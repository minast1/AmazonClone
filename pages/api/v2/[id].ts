import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
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
                           products : true 
                       }
                   }
               }
           })
           
           res.json(cartItems)
           break;
   
       default:
           break;
   }
}
