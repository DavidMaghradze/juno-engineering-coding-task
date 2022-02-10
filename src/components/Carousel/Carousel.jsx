import React, { useEffect, useState } from 'react'

import './Carousel.css'

import CarouselItem from './CarouselItem'

const ImageCarousel = ({ data = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNextClick = () => {
        setCurrentIndex( curIndex => {
            const nextIndex = curIndex === data.length - 1 ? 0 : ++curIndex
            return nextIndex
        })
    }

    const handlePrevtClick = () => {
        setCurrentIndex( curIndex => {
            const prevIndex = curIndex ===  0 ? data.length - 1 : --curIndex
            return prevIndex
        })
    }

    return (
        <div className='carousel-container'>
            <button onClick={handlePrevtClick} className='carousel-arrow carousel-arrow--prev'>prev</button>           
            <button onClick={handleNextClick} className='carousel-arrow carousel-arrow--next'>next</button>
            <div className='carousel-inner'>
                {data.map( (item, index) => 
                    (
                        <CarouselItem 
                            key={item}
                            url={item}
                            currentIndex={currentIndex}
                            index={index}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default ImageCarousel