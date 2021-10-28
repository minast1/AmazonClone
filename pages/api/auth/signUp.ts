import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'
import prisma from "../../../src/prisma";
import { User } from ".prisma/client";

export type ResponseData = {
    message?: string
    user?: User
}



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
     
    const saltRounds = 10;
    const { name, email, phone, password } = req.body;
  // Create new user in the database 
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    //Check for existing email or phone number

    const emailExists = await prisma.user.findUnique({
        where: {email: email},
        select: { email: true }
    });

    const numberExists = await prisma.user.findUnique({
        where: {
            phone: phone
        },
        select: { phone: true }
    });

    if (emailExists) {
        res.status(422).json({ message: 'Email exists already!' });
        return;
    };
    if (numberExists) {
        res.status(422).json({ message: 'Phone Number exists alrready' });
        return;
    };

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            phone: phone, 
            password: hash
        }
    });
        res.status(201).json(user)

}


