import React from 'react'
import Star from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';



type AppProps = {
    rating: number 
}
function RatingContainer({ rating }: AppProps) {
    const stars = Array.from(Array(rating).keys());
    //console.log(rating);
    return (
        <Box display="flex" flexDirection="row" mb={1}>
            {
                stars.map((star, index) => 
                
                    <Star color="primary" fontSize="small" key={index}/>
                )
            }
                              
                                 
                              </Box>
    )
}

export default RatingContainer
