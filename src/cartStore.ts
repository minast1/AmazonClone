//import { FormEvent } from 'react'
import create from 'zustand'
import { Rating } from './constants'
//import createContext from 'zustand/context'


export type Product =  {
    id: number
    title: string
    price: number
    category: string
  description: string
  rating:Rating
  image: string
  quantity : number
}

export interface CartState {
    products: Product[] | []
    addToCart: (product: Product) => void
    removeFromCart: (Id: number) => void
    subTotal: number
    setSubTotal: () => void 
}


export const store = create<CartState>((set, get) => ({
    products: [],
    subTotal: 0 ,
    addToCart: (product) => {
        set({ products: [...get().products, product] });
         const updatedProducts = get().products;
        const subtotal = updatedProducts.map(({ price, quantity }) => Number(price) * quantity)
            .reduce((prev: number, current: number) => prev + current, 0);
        set({ subTotal: subtotal });
    },
    removeFromCart: (Id) => {
        const currentProducts = get().products;
        const filteredProducts = currentProducts.filter((product) => product.id != Id);
        set({ products: filteredProducts });
        //Get updated Products array and update the subtotal
        const updatedProducts = get().products;
        const subtotal = updatedProducts.map(({ price, quantity }) => Number(price) * quantity)
            .reduce((prev: number, current: number) => prev + current, 0);
        set({ subTotal: subtotal });
        
    },

    setSubTotal: () => {
          // const currentProduct = get().products;
        //const currentProductPrices = currentProduct.map(({ price, quantity }) => quantity && Number(price) * quantity).reduce();
       //const reducer = (previousValue:any , currentValue:any) => previousValue + currentValue;
        //const currentSubTotal = currentProductPrices.reduce(reducer, 0);
        //set({ subTotal: currentSubTotal });
    }
   
      
}));

