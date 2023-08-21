import React from 'react'
import Movie from '../assets/projects/movie guide.png'
import Sentiment from '../assets/projects/sentiment analysis.png'
import News from '../assets/projects/News App.jpg'
import Weather from '../assets/projects/reactWeather.jpg'
import Volume from '../assets/projects/volume control.jpg'
import Notes from '../assets/projects/Notes.jpg'

export default function Projects() {
    const code = (id)=>{
        if(id===1){
            window.open("https://github.com/Khaja02/sentiment-analysis")
        }
        if(id===2){
            window.open("https://github.com/Khaja02/News-App")
        }
        if(id===3){
            window.open("https://github.com/Khaja02/Note-App")
        }
        if(id===4){
            window.open("https://github.com/Khaja02/Movie-Guide")
        }
        if(id===6){
            window.open("https://github.com/Khaja02/Weather-App")
        }
        
        
    }
    const projects = [
        {
          id: 1,
          src: Sentiment,
        },
        {
          id: 2,
          src: News,
        },
        {
          id: 3,
          src: Notes,
        },
        {
          id: 4,
          src: Movie,
        },
        {
          id: 5,
          src: Volume,
        },
        {
          id: 6,
          src: Weather,
        }
      ];
  return (
    <div
    name="projects"
    className="w-full pt-80 pb-80 bg-gradient-to-b from-black to-gray-800  text-white"
  >
    <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p  className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out some of my projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src ,}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button onClick={()=>{code(id)}} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
