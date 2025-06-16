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
            <div key={index} className="w-[270px] lg:w-[300px] xl:w-[350px] h-[350px] lg:h-[400px] p-2 rounded-xl bg-gradient-animated bg-200 duration-75 hover:cursor-pointer hover:-translate-y-2 hover:animate-gradient-x hover:shadow-boxShadow">
              <img className='xl:w-[350px] xl:h-[262px] rounded-xl object-fill mb-[10px]' src={item.Image} alt="memories" />
              <div className='text-center text-2xl font-bold'>{item.Name}</div>
              <div className='text-center text-xl'>{item.Role}</div>
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