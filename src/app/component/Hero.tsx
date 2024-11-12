"use client"
import Image from 'next/image'
import heroimage from '../../../public/assests/my_pic.jpg'
import Typewriter from 'typewriter-effect'
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-slate-300">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Professional Summary
        <br className="hidden lg:inline-block" />
        <Typewriter options={{strings: ["Hello, I'm Muhammad Shahid", "a Field Manager at Le Mendoza Pharmaceutical.", "I'm passionate about learning new technologies", "currently diving into TypeScript, Next.js, and AI chatbots!"
],
  autoStart: true,
  loop: true,
  
}} />

        </h1>
      <p className="mb-8 leading-relaxed">
      Experienced and dedicated Senior Field Manager in the pharmaceutical industry with a proven track record of driving sales, managing key accounts, and enhancing team productivity. Passionate about integrating technology into the sales field, with growing expertise in TypeScript, Next.js, AI, and chatbots to improve customer engagement and sales strategies.
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={heroimage}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
