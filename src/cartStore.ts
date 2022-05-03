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
    id: string
    //setId: (to:string) => void
    //products: Product[] | []
    //addToCart: (product: Product) => void
    //removeFromCart: (Id: number) => void
    //subTotal: number
    //setSubTotal: () => void 
}


export const store = create<CartState>((set, get) => ({
    id: '',
   // setId: (to) => set(state => ({id : to}))

      
}));

