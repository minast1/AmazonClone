import prisma from "../../../src/prisma";
import { getSession } from 'next-auth/client'

export default async (req ,res) => {
    
    const session = await getSession({ req })
    
    res.json(session)
}