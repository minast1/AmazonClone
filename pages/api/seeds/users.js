import prisma from "../../../src/prisma";
import faker from 'faker'
import bcrypt from 'bcrypt'

const saltRounds = 10 
const password  = 'minast1rith'

export default async (req ,res) => {
    
    const hashedPassword  = bcrypt.hashSync(password, saltRounds)
    const user = await prisma.user.create({
        data : {
            name : faker.name.findName(),
            email : faker.internet.exampleEmail(),
            password : hashedPassword
        }
    }) 
    
    res.json(user)
}