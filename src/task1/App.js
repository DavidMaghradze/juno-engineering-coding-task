import { useEffect, useState } from 'react'

import './App.css';
import { fetchImages } from '../api/index'
import ImageCarousel from '../components/Carousel';

function App() {

  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const images = await fetchImages()
      setImages(images)
    } catch {
      console.log('Something Went Wrong')
    }
  }

  useEffect(()=>{
    getImages()
  },[])


  return (
      <div>
        <ImageCarousel data={images}/>
      </div>
  );
}

export default App;
