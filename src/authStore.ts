//import { FormEvent } from 'react'
import create from 'zustand'
//import createContext from 'zustand/context'



type AuthState = {
    authView: string
    setAuthView: (to:string) => void
    userId: string | number 
    password: string
    loading: boolean
    emailChecked: boolean
    checkEmail: () => void
    error: string | string[] | undefined
};

export const authStore = create<AuthState>((set, get) => ({
    authView: 'sign_in',
    password: '',
    userId: '',
    setAuthView: (to) => set(state => ({ authView: to })),
    emailChecked: false,
    checkEmail: async () => set(state => ({emailChecked: !state.emailChecked})),
    loading: false,
    error: undefined,
    
}));