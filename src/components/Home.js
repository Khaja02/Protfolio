import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">Hey, I'm Khaja</h2>
            <h3 className="text-2xl py-4 sm:text-4xl font-bold text-white">I'm a Front-end Developer</h3>
            <p className="text-gray-500 py-4 max-w-md">
                I'm a recent computer science graduate and passionate software enthusiast.
                My focus lies in crafting dynamic web applications using a blend of HTML, Tailwind CSS, and React. 
                Explore my journey as I bring ideas to life through innovative technology.
            </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
