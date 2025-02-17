import "./TitleCard.scss";


import PropTypes from 'prop-types';

TitleCard.propTypes = {
    text: PropTypes.node.isRequired,
};
const TitleCard = ({ text }) => {
  return (

    <div className="homeTitleContainer">
      <h2>{text}</h2>
    </div>
  );
};

export default TitleCard;