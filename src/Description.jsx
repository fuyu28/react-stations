// @ts-check
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/frise-bichon/6.jpg',
  )
  async function fetchDogUrl() {
    const url = 'https://dog.ceo/api/breeds/image/random'
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const json = await response.json()
      setDogUrl(json.message)
      console.log(json)
    } catch (error) {
      console.error('Error fetching dog image:', error)
    }
  }

  return (
    <>
      <p className="App-intro">犬を見よう</p>
      <DogImage imageUrl={dogUrl} />
      <br />
      <button onClick={fetchDogUrl}>更新</button>
    </>
  )
}

export default Description
