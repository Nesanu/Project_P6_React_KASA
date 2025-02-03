import PropTypes from 'prop-types';
import './counterTitle.scss';

export function CounterTitle(props) {
    return (
        <section className={`${props.class}`}>
                <h2>{props.valeurTitre}</h2>
        </section>
    )
}

CounterTitle.propTypes = {
    valeurTitre: PropTypes.string.isRequired,
    class: PropTypes.string,
  };