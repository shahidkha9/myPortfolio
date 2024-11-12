import React from 'react'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-style: italic font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      {/* <Image src={cvLogo} alt="cv logo" width={60} height={60} className="rounded-full object-cover" /> */}

    <span className="ml-3 text-xl text-purple-400">My Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href = {"/"} className="mr-5 hover:text-violet-400 ">Home</Link>
    <Link href = {"#Education"} className="mr-5 hover:text-violet-400">Education</Link>
    <Link href = {"#Skills"} className="mr-5 hover:text-violet-400">Skills</Link>
      <Link href = {"#Experience"} className="mr-5 hover:text-violet-400">Experience</Link>
      <Link href = {"#Projects"} className="mr-5 hover:text-violet-400">Projects & Learning
      </Link>
      
    </nav>
    <a href="/assests/pdf cv/Muhammad Shahid.pdf">
    <button className="inline-flex items-center bg-purple-200 border-0 py-1 px-3 focus:outline-none hover:bg-violet-400 rounded text-base mt-4 md:mt-0">Download CV
    <FaDownload className="text-xl ml-2"/>
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
