import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='max-w-7xl m-auto relative z-40'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home