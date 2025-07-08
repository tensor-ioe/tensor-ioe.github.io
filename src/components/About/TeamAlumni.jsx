import React from 'react'
import { useState, useRef } from 'react'
import Alumni from '../../constants/alumni'
import arrow from '../../images/assets/AboutTeamArrow.png'

const TeamAlumni = () => {
  const alumni = useRef(null)
  const [loadMore, setLoadMore] = useState(false)
  const handleLoadMore = () => {
    alumni.current?.scrollIntoView() 
    setLoadMore((prev) => !prev)
  }

  return (
    <>
      <h1 ref={alumni} className="relative text-4xl md:text-5xl font-extrabold text-center mb-10">ALUMNI</h1>
      <div className={`w-full ${loadMore ? "h-full" : "max-md:h-[1125px] h-[380px] lg:h-[410px]"} flex items-center justify-around flex-wrap gap-7 relative overflow-hidden`}>
        {Alumni.map((item, index) => {
          return (
            <div key={index} className="w-[270px] lg:w-[300px] xl:w-[350px] h-[350px] lg:h-[400px] p-2 rounded-xl bg-gradient-animated bg-200 animate-gradient-x shadow-boxShadow">
              <img className='xl:w-[350px] xl:h-[262px] rounded-xl object-fill mb-[10px]' src={item.Image} alt="memories" />
              <div className='text-center text-2xl font-bold'>{item.Name}</div>
              <div className='text-center text-xl'>{item.Role}</div>
              <div className="text-center text-xl">{item.Year}</div>
            </div>
          )
        })}
      </div>
      <div onClick={handleLoadMore} className='relative mx-auto mt-2 mb-10 w-[40px] h-[40px] border-4 border-blue-600 rounded-full grid place-content-center cursor-pointer'>
        {loadMore ? <img className='rotate-180' src={arrow} alt="Down" /> : <img src={arrow} alt="Down" />}
      </div>
    </>
  )
}

export default TeamAlumni