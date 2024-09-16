// import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10 ' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/kushagrarastogi7007" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kushagra-rastogi-0080411a2/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
            <FaInstagram style={{ cursor: 'pointer' }}/>
            <FaSquareXTwitter style={{ cursor: 'pointer' }}/>
        </div>
    </nav>
  )
}

export default Navbar