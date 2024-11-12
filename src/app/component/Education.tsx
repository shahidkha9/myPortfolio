import Image from 'next/image'
import React from 'react'
import Img1 from '../../../public/assests/ed_pic/matric.jpg'
import Img2 from '../../../public/assests/ed_pic/inter.jpg'
import Img3 from "../../../public/assests/ed_pic/uk.png"

const Education = () => {
  return (
    <div id='Education'>
    <section className="text-gray-600 body-font bg-slate-200">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <Image
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={Img1}
        />
        <p className="leading-relaxed">
        &quot;I completed my Matriculation from the Board of Secondary Education, Karachi, with a focus in Science. During this time, I developed a strong foundation in subjects such as Physics, Chemistry, Biology, and Mathematics. This education laid the groundwork for my analytical and problem-solving skills, fostering a passion for understanding scientific principles and their practical applications.&quot;
        </p>
        <br />
        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          Matriculation
        </h2>
        <p className="text-gray-500">from the Board of Secondary Education, Karachi,</p>
      </div>
    </div>
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full text-center">
        <Image
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={Img2}
        />
        <p className="leading-relaxed">
        &quot;I completed my intermediate education in Arts at the Intermediate Board of Karachi, where I gained foundational skills in subjects such as humanities, Islamic Studies, and Islamic History. This education has enhanced my understanding of cultural, historical, and social perspectives, which contribute to my analytical and communication skills.&quot;
        </p>
        <br />
        <br />
        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
        intermediate
        </h2>
        <p className="text-gray-500">from Intermediate Board of Karachi,</p>
      </div>
    </div>
    <div className="lg:w-1/3 lg:mb-0 p-4">
      <div className="h-full text-center">
        <Image
          alt="testimonial"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={Img3}
        />
        <p className="leading-relaxed">
        I completed my Bachelor of Arts from Karachi University, where I gained a comprehensive understanding of various disciplines within the Arts. This program equipped me with critical thinking, effective communication, and analytical skills, essential for diverse professional and cultural contexts. Studying at Karachi University also provided me with exposure to a range of perspectives and ideas, which broadened my worldview and prepared me for practical challenges in today&apos;s dynamic environment.
        </p>
        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
        Bachelor of Arts
        </h2>
        <p className="text-gray-500">from Karachi University,</p>
      </div>
    </div>
  </div>
</div>
</section>
      
    </div>
  )
}

export default Education
