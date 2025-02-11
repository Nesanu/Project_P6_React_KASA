import greyStar from '../../../assets/images/grey_star.png';
import redStar from '../../../assets/images/red_star.png';
import PropTypes from 'prop-types';

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};




export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((_star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                    
                )
            })}
        </div>
    )
}


