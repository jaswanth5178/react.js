import React, { useState } from 'react'

const App = () => {
  const images=["https://img.magnific.com/premium-photo/arunachal-pradesh-foundation-day_548646-87696.jpg",
    "https://img.magnific.com/free-photo/houses-small-town-surrounded-by-forests-foggy-cloud_181624-26927.jpg?t=st=1790559866~exp=1790563466~hmac=2b489b82ac252fee41fc03b0ce25a40624096552a951648ea0dafd59841b60b6&w=2000",
    "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Arunnachal_Pradesh_landscape_1_l_625_1000.jpg"
  ]

  const[currentIndex,setCurrentIndex] = useState(0)

  function handleNext(){
    setCurrentIndex((currentIndex + 1)%images.length)
  }

  function handlePrev(){
    setCurrentIndex((currentIndex -1 + images.length)%images.length)
  }

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img height={'300px'} width={'500px'} src={`${images[currentIndex]}`}/>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App