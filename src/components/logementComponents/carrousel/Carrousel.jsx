import './Carrousel.module.scss'
import ArrowRight from '../../../assets/images/chevron_carrousel_right.png'
import ArrowLeft from '../../../assets/images/chevron_carrousel_left.png'
import { useState } from 'react'


import PropTypes from 'prop-types'

Slider.propTypes = {
    imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carrousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carrousel_arrow carrousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carrousel_arrow carrousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}
                    
                </>
            } 
        </section>
    )
}