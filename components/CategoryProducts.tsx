import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../src/constants';

type AppProps = {
    category: string
}

type Products = {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string 
}

function CategoryProducts({ category }: AppProps) {
   const {data , error} = useSWR<Products[]>(`https://fakestoreapi.com/products/category/${category}`, fetcher)
    return (
        <Box pl={2}>
            {
                data &&
                data.map(({ title }) => 
             <Typography variant="body2" gutterBottom>{title}</Typography>
            
                )}
           
    
        </Box> 
    )
}

export default CategoryProducts
