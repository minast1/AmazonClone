import NextAuth from 'next-auth'
import prisma from  '../../../src/prisma'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Providers from "next-auth/providers"
//import Credentials from '../../auth/credentials-signin';

 type User ={
        id: string
      name: string | null
      email: string | null 
      phone: string | null
      picture : string | null 
      password : string
}

 const idContainsOnlyDigits = (id : string ): boolean => {
      return id.match(/^[0-9]+$/) != null ? true : false 
 }
   
 const getUserByEmail  =  async (id: string) => {
     const user: User | null  =  await prisma.user.findUnique({
        where : {
              email:  id
       },
        select : {
              id : true ,
              name : true , 
              email: true,
              phone: true,
              picture : true, 
              password : true
            }
      })
     return user 
}
 
const getUserNumber =  async (id: string) => {
     const user: User | null  =  await prisma.user.findUnique({
        where : {
              phone:  id
            },
            select : {
              id : true ,
              name : true , 
              email: true,
              phone: true,
              picture : true, 
              password : true
            }
      })
     return user 
 } 
  
 


export default NextAuth ({
  // @link https://next-auth.js.org/configuration/providers
  //site : process.env.NEXTAUTH_URL ,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [

    Providers.Credentials({

       
      credentials: {
        id: { type: 'text'},
        password: {  type: 'password'} 
     },
      async authorize(credentials, req)  {  
          //console.log(credentials)
         // const {id ,  password} = credentials
          //const userEmail =  credentials.userId ??  userId;
           // Add logic here to look up the user from the credentials supplied
        
        const user = idContainsOnlyDigits(credentials.id) ? await getUserNumber(credentials.id) : 
           await getUserByEmail(credentials.id)  
           
  
          if (user) {
            // console.log(process.env.NEXTAUTH_SECRET)
           // bcrypt.compare(password, user.password, (err ,result) => {
              //  return  result  ? Promise.resolve(user) : Promise.reject(err)
            //}); 
           
          const crosscheckPassword = await bcrypt.compareSync(credentials.password, user.password)
            if(crosscheckPassword) {
            return Promise.resolve(user)
           }  else { 
             return  Promise.reject(`${process.env.NEXTAUTH_URL}/auth/credentials-signin?error=Invalid Password`)}
           
          } else {
                 
              return Promise.reject(`${process.env.NEXTAUTH_URL}/auth/credentials-signin?error=Invalid Username and Password combination!`)
          }
            
          }
         
         // return Promise.resolve(null)
          // You can also Reject this callback with an Error or with a URL:
           // return Promise.reject(new Error('error message')) // Redirect to error page
      
      })
  ],
  adapter: PrismaAdapter(prisma),
  // @link https://next-auth.js.org/configuration/databases
  //database: process.env.NEXTAUTH_DATABASE_URL,

  // @link https://next-auth.js.org/configuration/options#session
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
     jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 3 * 60 * 60, // 3 hrs
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
     updateAge: 24 * 60 * 60, // 24 hours
  },
  debug: true,
 
  // @link https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
     secret: process.env.NEXTAUTH_SECRET,
  
  },

  // @link https://next-auth.js.org/configuration/callbacks
  callbacks: {
    /**
     * Intercept signIn request and return true if the user is allowed.
     *
     * @link https://next-auth.js.org/configuration/callbacks#sign-in-callback
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean}         Return `true` (or a modified JWT) to allow sign in
     *                           Return `false` to deny access
     */
    signIn: async (user, account, profile) => {
      return true
    },

    /**
     * @link https://next-auth.js.org/configuration/callbacks#session-callback
     * @param  {object} session      Session object
     * @param  {object} user         User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client
     */
    session: async (session, user) => {
      
      //session = user ;
      //session.customSessionProperty = 'bar'
      return Promise.resolve(session)
    },

    /**
     * @link https://next-auth.js.org/configuration/callbacks#jwt-callback
     * @param  {object}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @param  {object}  account   Provider account (only available on sign in)
     * @param  {object}  profile   Provider profile (only available on sign in)
     * @param  {boolean} isNewUser True if new user (only available on sign in)
     * @return {object}            JSON Web Token that will be saved
     */
    jwt: async (token, user, account, profile, isNewUser) => {
      //const isSignIn = (user) ? true : false
      // Add auth_time to token on signin in
      //if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
      return Promise.resolve(token)
    },
  },

  // You can define custom pages to override the built-in pages
  // The routes shown here are the default URLs that will be used.
  // @link https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/credentials-signin',
    //signOut: '/api/auth/signout',
    //error: '/auth/credentials-signin', // Error code passed in query string as ?error=
    //verifyRequest: '/api/auth/verify-request', // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },

  // Additional options
  // secret: 'abcdef123456789' // Recommended (but auto-generated if not specified)
  // debug: true, // Use this option to enable debug messages in the console
})

//const Auth = (req, res) => NextAuth(req, res, options)

//export default Auth
