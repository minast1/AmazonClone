import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../src/cartStore";
import prisma from '../../../src/prisma';



// type cartItemsType = Prisma.PromiseReturnType<typeof cartItems>
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      const { method } = req;
    const { id } = req.query
    
   switch (method) {
       case 'GET':
           //get items in usercart
          
           const cartItems = await prisma.user.findFirst({
               where: {
                   email: id as string
               },
               select: {
                   cart: {
                       select: {
                           id:true,
                           products : true 
                       }
                   }
               }
           })
           
           res.json(cartItems)
           break;
       case 'POST':
          // console.log(`DEleting...... ${req.body}`)
           //find the cart and update the products array
           const cart = await prisma.cart.findFirst({
               where: { id: req.body },
               select: { products: true }
           });
            

           const cartProducts = cart?.products as any[]
          const removedItemFromCart = cartProducts?.filter((el) => el.id != id);
            const updatedUserCart = await prisma.cart.update({
                where: {id : req.body},
                data: {
                    products : removedItemFromCart  //as Prisma.JsonArray
                },
                
                
             })
            res.end()
   
       default:
           break;
   }
}
