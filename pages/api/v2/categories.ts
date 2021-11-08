
import type { NextApiResponse , NextApiRequest} from 'next';


export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    
    try {
         const response = await fetch('https://fakestoreapi.com/products/categories');
        const allCategories = await response.json()
        if(!allCategories) throw Error 
     res.status(201).json(allCategories);
    } catch (error) {
        console.error(error)
    }  

   


}