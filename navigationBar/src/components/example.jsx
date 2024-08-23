import React from 'react'

const Nav = () => {
  return (
    // <nav className='w-full bg-secondary h-16 p-6 flex items-center justify-between font-[poppins]'>
    //     <div className='flex items-center'>
    //         <ion-icon className='text-2xl text-white bg-white' name="desktop-outline"></ion-icon>
    //         <span className='text-3xl text-white'>Dhiraj</span>
    //     </div>
    // </nav>
    <nav className="bg-blue-500 p-4">

      <div className="container mx-auto">

        <div className="flex justify-between items-center">

          <div className="text-white font-bold text-xl">My Website</div>

          <div className="hidden md:flex space-x-4">

            <a href="#" className="text-white hover:text-gray-300">Home</a>

            <a href="#" className="text-white hover:text-gray-300">About</a>

            <a href="#" className="text-white hover:text-gray-300">Services</a>

            <a href="#" className="text-white hover:text-gray-300">Contact</a>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Nav