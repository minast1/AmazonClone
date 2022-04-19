import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import useSWR from 'swr'
import { fetcher, Product } from '../src/constants';

type AppProps = {
    category: string
}


function CategoryProducts({ category }: AppProps) {
   const {data , error} = useSWR<Product[]>(`https://fakestoreapi.com/products/category/${category}`, fetcher)
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
