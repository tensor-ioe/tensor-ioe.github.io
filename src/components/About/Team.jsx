import React from 'react'
import { useState, useRef } from 'react'
import CurrentTeam from '../../constants/AboutTeam'
import arrow from '../../images/assets/AboutTeamArrow.png'

const Team = () => {
  const currentTeam = useRef(null) // create ref
  const [loadMore, setLoadMore] = useState(false)
  const handleLoadMore = () => {
    currentTeam.current?.scrollIntoView()
    setLoadMore((prev) => !prev)
  }

  return (
    <>
      <h1 ref={currentTeam} className="relative text-4xl md:text-5xl font-extrabold text-center mb-8">CURRENT TEAM</h1>
      <div className={`w-full ${loadMore ? "h-full" : "max-md:h-[1125px] h-[380px] lg:h-[410px]"} pt-2 flex items-center justify-around flex-wrap gap-7 relative overflow-hidden`}>
        {CurrentTeam.map((item, index) => {
          return (
            <div key={index} className="group w-[270px] lg:w-[300px] xl:w-[350px] h-[350px] lg:h-[400px] p-2 rounded-xl bg-gradient-animated bg-200 duration-75 hover:cursor-pointer hover:-translate-y-2 hover:animate-gradient-x hover:shadow-boxShadow">
              <img className='xl:w-[350px] xl:h-[262px] rounded-xl object-fill mb-[10px]' src={item.Image} alt="memories" />
              <div className='text-center text-2xl font-bold'>{item.Name}</div>
              <div className='text-center text-xl mb-2'>{item.Role}</div>
              <div className="hidden group-hover:flex items-center justify-center gap-2 animate-popup">
                {/* facebook svg icon */}
                <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                  <svg className='w-[30px] h-[30px] hover:scale-110' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </a>
                {/* instagram svg icon */}
                <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                  <svg className='w-[40px] h-[40px] hover:scale-110' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                    <path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path>
                  </svg>
                </a>
                {/* github svg icon */}
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <svg className='w-[30px] h-[30px] hover:scale-110' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                {/* linkedin svg icon */}
                <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg className='w-[30px] h-[30px] hover:scale-110' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div onClick={handleLoadMore} className='relative mt-2 mx-auto mb-10 w-[40px] h-[40px] border-4 border-blue-600 rounded-full grid place-content-center cursor-pointer'>
        {loadMore ? <img className='rotate-180' src={arrow} alt="Down" /> : <img src={arrow} alt="Down" />}
      </div>
    </>
  )
}

export default Team