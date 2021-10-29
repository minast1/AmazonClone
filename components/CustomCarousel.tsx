import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CustomCarousel() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
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
