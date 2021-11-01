import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Box } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




type CustomProps = {
    clickHandler: () => void
    hasPrev: boolean
    label: string
 }

function CustomCarousel() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={
                (clickHandler: () => void, hasPrev: boolean, label: string) => (
                    <Box  position="absolute" top={100} left="1%" zIndex="modal">
                        <ArrowBackIosIcon fontSize="large" onClick={clickHandler}/>
                    </Box> 
                   
                )
            }
            renderArrowNext={
                (clickHandler: () => void, hasPrev: boolean, label: string) => (
                     <Box  position="absolute" top={100} right="1%" zIndex="modal">
                        <ArrowForwardIosIcon fontSize="large" onClick={clickHandler} />
                    </Box> 
                )
            }
            stopOnHover={true}
        >
                <div>
                    <img src="/slide1.jpg" style={{height: 550}}/>
                </div>
                <div >
                    <img src="/slide2.jpg" style={{height: 550}}/>
                </div>
                <div >
                    <img src="/slide3.jpg" style={{height: 550}}/>  
            </div>
             <div >
                    <img src="/slide4.jpg" style={{height: 550}}/>
            </div>
             <div >
                    <img src="/slide5.jpg" style={{height: 550}}/>
            </div>
            
            </Carousel>
    )
}

export default CustomCarousel
