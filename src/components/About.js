import React from 'react'

export default function About() {
  return (
    <div
    name="about"
    className="py-96 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-20">
      I am a recent passout from the class of 2023, having successfully completed my Bachelor's in Computer Science from Bharath Institute of Higher Education and Research. Throughout my academic journey, I maintained a commendable CGPA of 9.2, reflecting my dedication and commitment to excellence. My education at Bharath Institute equipped me with a strong foundation in computer science principles and an in-depth understanding of various technological concepts.
      </p>

      <br />

      <p className="text-xl">
      A passionate and imaginative computer science graduate, I am driven by an insatiable enthusiasm for software engineering, as well as web and application development. My relentless pursuit of knowledge fuels my desire to explore the dynamic landscape of technology and innovation. I am fervently seeking opportunities to immerse myself in real-world projects where I can leverage cutting-edge technologies to devise and implement inventive solutions. 
      </p>
    </div>
  </div>
  )
}
