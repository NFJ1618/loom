import PropTypes from 'prop-types';
import './LikeButton.css'

const LikeButton = ({color, text, onClick}) => {
    return <button onClick={ onClick } style={{backgroundColor: color}}className='btn'>{text}</button>;
};

LikeButton.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

LikeButton.defaultProps = {
    color: 'steelblue',
}

export default LikeButton;