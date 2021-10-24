//import { FormEvent } from 'react'
import create from 'zustand'
//import createContext from 'zustand/context'
import { AuthState } from './constants';




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