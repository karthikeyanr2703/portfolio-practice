import React from 'react'


import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
    
        <div className='wrapper'>
       
            <span>Development</span>
            <div className='social'>
                <a href="#"><img src="/public/instagram.png" alt="" /></a>
                <a href="#"><img src="/public/facebook.png" alt="" /></a>
                <a href="#"><img src="/public/youtube.png" alt="" /></a>
                <a href="#"><img src="/public/dribbble.png" alt="" /></a>
               
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
