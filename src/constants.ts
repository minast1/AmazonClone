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