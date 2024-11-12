import React from 'react'
import Link from 'next/link';
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     
        <span className="ml-3 text-xl">Muhammad Shahid</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 Muhammad Shahid —
        <a
          href=""
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          shahidkha993@gmail.com
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
      
        <Link target="_blank" aria-label="Facebook" href={''} className="text-gray-500">
        <ImFacebook className="text-2xl hover:text-blue-500" />
        </Link>
        <Link target="_blank" href={''} className="text-gray-500">
        <ImLinkedin2 className="text-2xl hover:text-blue-700" />
        </Link>
        <Link target="_blank" href={''} className="text-gray-500">
        <PiInstagramLogoFill className="text-2xl hover:text-pink-500" />
        </Link>
      </span>
  
    </div>
  </footer>
    </div>
  )
}

export default Footer
