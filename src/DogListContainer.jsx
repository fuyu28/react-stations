// @ts-check
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState(breeds[0])
  const [dogImages, setDogImages] = useState([])

  const getBreeds = async () => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const json = await response.json()
      const breedsList = Object.keys(json.message)
      setBreeds(breedsList)
    } catch (error) {
      console.error('Error fetching dog breeds:', error)
    }
  }

  const getDogImages = async () => {
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/10`
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const json = await response.json()
      setDogImages(json.message)
    } catch (error) {
      console.error('Error fetching dog images:', error)
    }
  }

  useEffect(() => {
    getBreeds()
  }, [])
  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button onClick={getDogImages}>表示</button>
      <div className="Dog-list-container">
        {dogImages.map((image, index) => (
          <img key={index} src={image} alt={`Dog ${index}`} />
        ))}
      </div>
    </>
  )
}

export default DogListContainer
