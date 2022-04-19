//import { FormEvent } from 'react'
import create from 'zustand'
import { Product } from './constants'
//import createContext from 'zustand/context'
export interface CartState {
    products: Product[] | []
    addToCart: (product: Product) => void
    removeFromCart: (Id: number) => void
    subTotal: number
    setSubTotal: () => void 
}


export const authStore = create<CartState>((set, get) => ({
    products: [],
    subTotal: 0 ,
    addToCart: (product) => {
        set({ products: [...get().products, product] });
         get().setSubTotal
    },
    removeFromCart: (Id) => {
        const currentProducts = get().products;
        const filteredProducts = currentProducts.filter((product) => product.id != Id);
        set({ products: filteredProducts });
          get().setSubTotal
    },

    setSubTotal: () => {
           const currentProduct = get().products;
        const currentProductPrices = currentProduct.map(({ price, quantity }) => quantity && Number(price) * quantity);
       const reducer = (previousValue:any , currentValue:any) => previousValue + currentValue;
        const currentSubTotal = currentProductPrices.reduce(reducer, 0);
        set({ subTotal: currentSubTotal });
    }
   
      
}));

