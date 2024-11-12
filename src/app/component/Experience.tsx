import React from 'react'
import Image from 'next/image'
import exp from '../../../public/assests/exp/exp.webp'

const Experience = () => {
  return (
    <div  id='Experience'>
    <section className="text-gray-600 body-font bg-gray-300">
<div className="container px-5 py-24 mx-auto flex flex-col">
  <div className="lg:w-4/6 mx-auto">
    <div className="rounded-lg h-64 overflow-hidden">
      <Image
        alt="content"
        className="object-cover object-center h-full w-full"
        src={exp}
      />
    </div>
    <div className="flex flex-col sm:flex-row mt-10">
      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
        <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
            Muhammad Shahid
          </h2>
          <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4" />
          <p className="text-base">
          a Field Manager at Le Mendoza Pharmaceutical. I&apos;m passionate about learning new technologies, currently diving into TypeScript, Next.js, and AI chatbots!
          </p>
        </div>
      </div>
      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <p className="leading-relaxed text-lg mb-4">
        Lead and manage a team of field representatives, ensuring targets and goals are met consistently.
Develop and maintain relationships with key healthcare professionals, promoting products and building brand loyalty.
Utilize data analysis to refine and improve sales strategies and identify high-potential markets.
Conduct regular training sessions to enhance team skills, including knowledge of emerging medical trends and best practices.
Collaborate closely with marketing and product teams to tailor sales approaches that meet current market demands.
        </p>
        
      </div>
    </div>
  </div>
</div>
</section>
      
    </div>
  )
}

export default Experience
