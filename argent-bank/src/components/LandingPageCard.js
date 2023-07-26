import '../styles/LandingPageCard.css'
import PropTypes from 'prop-types';

function LandingPageCard(props) {
  return(
    <div className='feature-item'>
      <img src={props.img} alt={props.alt} className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

LandingPageCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default LandingPageCard
