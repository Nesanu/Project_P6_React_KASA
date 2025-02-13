import './Carrousel.scss';
import { useState } from 'react';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // TODO installer la dépendance fontawesom pour les icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'

Carrousel.propTypes = {
    imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired
}

  /**Documentation de méthode 
   * @description
   * Ce composant permet de créer un carrousel
   * @param {string[]} imageSlider - Les images du carrousel.
   * @returns {JSX.Element} - Un carrousel.
   * @example
   * <Slider imageSlider={["path/to/image1.jpg", "path/to/image2.jpg"]} />
   * @example
   * <Slider imageSlider={["path/to/image1.jpg", "path/to/image2.jpg", "path/to/image3.jpg"]} />
    */

export default function Carrousel({imageSlider}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const countImages = imageSlider.length;
    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
       <div className="carrouselContainer">
            <img src={imageSlider[currentIndex]} alt={" index : " + (currentIndex + 1)} className="currentImg" />
            {countImages <= 1 ? (
        ""
      ) : (
        <>
          <div className="counterPosition">
            {currentIndex + 1} / {countImages}
          </div>
          <div className="buttonsContainer">
            <button type="button" onClick={handlePrevious} className="left">
              <FontAwesomeIcon icon={faChevronLeft} color="white" />
            </button>
            <button type="button" onClick={handleNext} className="right">
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </button>
          </div>
        </>
      )}
       </div>
    )
}


/*
//
    Avant
    <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carrousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carrousel_arrow carrousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carrousel_arrow carrousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}
                    
                </>
            } 
        </section>

*/