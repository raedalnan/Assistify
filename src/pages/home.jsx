import { useState } from 'react'
import Navbar from '../layouts/navbar'
import Hero from '../layouts/hero'
import Banner from '../layouts/banner'
import LogoutModal from '../modals/logoutModal';

function Home() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
    </>
  )
}

export default Home
