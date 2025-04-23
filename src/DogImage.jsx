// @ts-check
import { PropTypes } from 'prop-types'

export const DogImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="犬" />
}

export default DogImage

DogImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}
