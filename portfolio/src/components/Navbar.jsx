import React from 'react';
import { FaLinkedin, FaGithub} from "react-icons/fa"
import "../styles/navbar.css"
import { CONTACT } from '../constants';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-2xl'>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Download CV
            </button>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-3xl'>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
