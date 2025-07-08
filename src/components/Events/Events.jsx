import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import events from '../../constants/events'
import close from '../../images/assets/close.png'

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [overlay, setOverlay] = useState('hidden')
  const [event, setEvent] = useState({})

  const handleClickEvent = (event) => {
    setOverlay('block')
    setEvent(event)
  }
  return (
    <div className='overflow-hidden relative'>
      <div className={` w-[100vw] px-5 xl:px-0 xl:w-width xl:mx-auto pt-10 mb-10 relative z-0`}>
        {/* blob-1 */}
        <div className="max-sm:w-[400px] max-sm:h-[400px] w-[450px] h-[450px] bg-[#90C3F6] absolute  top-[-10%] left-[-20%] rounded-customborder animate-change"></div>
        {/* blob-2 */}
        <div className="max-sm:w-[400px] max-sm:h-[400px] w-[450px] h-[450px] bg-[#90C3F6] absolute bottom-[-10px] right-[-25%] rounded-customborder animate-change"></div>
        {/* Begining of event page  */}
        <h1 className='text-4xl font-extrabold text-center mb-7 relative'>EVENTS</h1>
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-10">
          {events.map((item, index) => {
            return (
              // wrapping a function with args into another anonymous function, to execute only when clicked as '()' executes a function immediately
              <div key={index} onClick={() => handleClickEvent(item)} className="group w-[300px] xl:w-[350px] aspect-[4/3] rounded-xl shadow-boxShadow relative overflow-hidden hover:cursor-pointer">
                <img className='w-full h-full object-fill rounded-xl transition-all group-hover:scale-110' src={item.eventImage} alt="memories" />
                <div className="w-full h-full rounded-xl bg-[#1361a5d9] grid place-content-center max-md:text-2xl text-3xl font-semibold uppercase text-center text-white absolute top-0 transition-all group-hover:text-4xl group-hover:max-md:text-3xl group-hover:bg-[#00000099]">
                  {item.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`w-full h-nonavbarheight bg-[#00000096] grid place-content-center fixed top-[75px] z-30 ${overlay}`}>
        <div onClick={() => setOverlay('hidden')} className="w-full h-full absolute z-40"></div>
        <div className="w-[80vw] lg:w-[975px] h-[80vh] bg-[#90C3F6] rounded-xl relative z-50 text-white overflow-hidden animate-popup">
          <div className='relative'>
            <img onClick={() => setOverlay('hidden')} className="max-sm:w-4 w-6 absolute max-sm:top-[45%] top-1/2 -translate-y-1/2 right-7 cursor-pointer" src={close} alt="closeBtn" />
            <h1 className="max-sm:text-xl max-sm:leading-[60px] text-3xl text-center font-bold leading-[70px] bg-[#1360A5AB] border-b-4">{event.title}</h1>
          </div>
          <div className="w-full h-full flex max-sm:flex-col text-black">
            <div className="max-sm:w-[60vw] w-2/5 py-4 px-10 mx-auto">
              <NavLink to="/gallery">
                <div className='group w-full relative mb-2 hover:cursor-pointer'>
                  <img className="w-full aspect-[4/3] rounded-xl" src={event.eventImage} alt="Event here" />
                  <div className="hidden w-full h-full rounded-xl bg-[#00000099] group-hover:grid place-content-center absolute top-0">
                    <span className='text-3xl font-semibold text-white animate-popup'>GALLERY</span>
                  </div>
                </div>
              </NavLink>
              <h1 className="max-md:text-sm text-xl text-center font-bold">{event.date}</h1>
            </div>
            <div className="max-sm:w-full w-3/5 h-full max-md:text-sm max-sm:border-t-4 sm:border-l-4 pt-3 pb-20 px-10 text-justify overflow-scroll">
              {event.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events