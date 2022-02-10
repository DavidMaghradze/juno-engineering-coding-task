import React from 'react'

const CarouselItem = ({ url, currentIndex, index }) => {

    const isActive = currentIndex === index

    return (
        <div className={`carousel-item ${isActive && 'active'}`}>
            <img src={url} alt="url" />
        </div>
    )
}

export default CarouselItem