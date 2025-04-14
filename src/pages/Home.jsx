import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from './BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewslettterBox from '../Components/NewslettterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewslettterBox/>

    </div>
  )
}

export default Home
