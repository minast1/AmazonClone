import { Cart, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../../src/prisma'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { method, body } = req;
   
 
    const { email, products } = body;

    switch (method) {
        case 'POST':
            let updatedCartItems: any[]= [];
            //find the users cart and Id
            const user = await prisma.user.findFirst({
                where: { email: email },
                select: {id : true, cart : true }
            });
                 //Update the users cart with the new product
            if (user) {
                const existingCartItems = user?.cart?.products as Prisma.JsonArray;
                updatedCartItems = [...updatedCartItems,...existingCartItems, products] 
               
                
            }

            //Save it back into the db
            const updatedUserCart = await prisma.cart.update({
                where: { userId: user?.id },
                data: {
                    products : updatedCartItems  //as Prisma.JsonArray
                },
                
                
             })

            
            
            res.end();
            break;
        
        default:
            break;
    }

   


}