
import * as yup from 'yup';




export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export type AuthState = {
    authView: string
    setAuthView: (to:string) => void
    userId: string | number 
    password: string
    loading: boolean
    emailChecked: boolean
    checkEmail: () => void
    error: string | string[] | undefined
};

export type IFormInput = {
  id: string | number
  password: string | number
  callbackUrl? : string
}

export type MessageType = {
  message: string | React.ReactElement
}

export type RegisterFormInput = {
  name: string
  email: string
  phone: string
  password: string
  passwordconfirm?: string
}
 
export const schema = yup.object({
  name: yup.string().required('The name field is required'),
  email: yup.string().email('You must provide a valid email address').required('The email field is required'),
  password: yup.string().required('The password field is required').min(8, 'password should be a minimum of 8 characters'),
  phone: yup.string().required('The phone field is required').length(10, 'phone number must be 10 digits'),
  passwordconfirm: yup.string().oneOf([yup.ref('password'), null], 'password mismatch!').required('This field is required')
})

export const fetcher =  (url: string) => fetch(url).then(r => r.json());

export const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export interface Product {
    id: number
    title: string
    price: string
    category: string
  description: string
  rating?:number
  image: string
  quantity? : number
}

