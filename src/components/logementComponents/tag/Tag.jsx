
import PropTypes from 'prop-types';

  /**
   * @description
   * Ce composant permet de créer un tag.
   * @param {string} tag - Le tag.
   * @returns {JSX.Element} - Un tag.
   * @example
   * <Tag tag="Tag" />
   * @example
   * <Tag tag="Tag2" />
   */
 
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