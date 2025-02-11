
import PropTypes from 'prop-types';

export default function Tag({ tag }) {
    return (
        <button>
            {tag}
        </button>
    );
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
};