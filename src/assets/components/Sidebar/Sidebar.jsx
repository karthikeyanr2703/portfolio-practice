import React, { useState } from 'react'
import "./Sidebar.scss"
import Links from '../Links/Links'
import ToggleButton from '../Toggle/ToggleButton'
import {motion} from "framer-motion"

const Sidebar = () => {

 
  return (
    <motion.div className='sidebar' >
        <div className='bg'>
            <Links/>
        </div>
      <ToggleButton />
    </motion.div>
  )
}

export default Sidebar
