// @ts-check
import PropTypes from 'prop-types'

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return (
    <>
      <select
        value={selectedBreed}
        onChange={e => setSelectedBreed(e.target.value)}
      >
        <option value="">Select a breed</option>
        {breeds.map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  setSelectedBreed: PropTypes.func.isRequired,
}
