import React from 'react'
import SignupSide from "../assets/signupSide.png"
import SignupForm from '../layouts/signupForm'

const Signup = () => {
  return (
    <div className='flex w-full h-screen justify-end'>
        <div className='w-full h-screen absolute top-0 left-0'>
            <img src={SignupSide} alt="building" className='rounded-l-lg h-full object-cover' />
        </div>
        <SignupForm />
    </div>
  )
}

export default Signup
