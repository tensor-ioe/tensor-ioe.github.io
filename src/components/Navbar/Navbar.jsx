import { NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "../../images/assets/logo.png"
import pages from '../../constants/pages'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [start, setStart] = useState(true)
    const handleToggle = () => {
        setStart(false) /* to remove startup animation from hamburger to cross*/
        setToggle((prev) => !prev)
    }
    return (
        <div className={`h-[75px]  grid place-content-center ${toggle ? 'mb-[246px]' : 'mb-[0px]'} shadow-navbarShadow sticky top-0 z-30 duration-500 bg-white xl:mb-0`}>
            <div className="w-[100vw] h-[75px] px-5 flex items-center justify-between relative z-20 bg-white xl:w-width xl:p-0">
                <NavLink className="grid place-content-center" to='/' onClick={() => { window.scrollTo(0, 0) }}>
                    <img className="max-sm:w-[130px] max-sm:h-[38px] w-[165px] h-[45px]" src={logo} alt="Tensor" />
                </NavLink>
                <div className='hidden xl:block'>
                    {pages.map((page, index) => {
                        return (
                            <NavLink key={index} className={
                                `text-[18px] no-underline px-[14px] py-[14px] hover:opacity-100
                                ${(index === (pages.length - 1)) ? `opacity-100 bg-applybgcolor rounded-lg` : 'opacity-55'}
                                `
                            } to={`/${page.toLowerCase()}`}>{page}</NavLink>
                        )
                    })}
                </div>
                <div onClick={handleToggle} className="flex flex-col gap-[7px] items-center justify-center cursor-pointer xl:hidden">
                    <div className={`w-10 h-1 bg-[#1360A5] rounded-sm ${start ? 'animate-none' : (toggle ? 'animate-topAnim' : 'animate-topAnimRev')}`}></div>
                    <div className={`w-10 h-1 bg-[#1360A5] rounded-sm ${start ? 'animate-none' : (toggle ? 'animate-midAnim' : 'animate-midAnimRev')}`}></div>
                    <div className={`w-10 h-1 bg-[#1360A5] rounded-sm ${start ? 'animate-none' : (toggle ? 'animate-botAnim' : 'animate-botAnimRev')}`}></div>
                </div>
            </div>
            {/* for responsive navbar */}
            <div className={`w-[100vw] bg-white absolute z-10 ${toggle ? 'top-[101%]' : 'top-[-350%]'} duration-500 xl:hidden`}>
                {pages.map((page, index) => {
                    return (
                        <NavLink key={index} onClick={() => setToggle((prev) => !prev)} className={
                            `text-[14px] no-underline px-[14px] py-[14px] flex flex-row justify-center hover:opacity-100
                                ${(index === (pages.length - 1)) ? `opacity-100 bg-applybgcolor` : 'opacity-55'}
                                `
                        } to={`/${page.toLowerCase()}`}>{page}</NavLink>
                    )
                })}
            </div>
        </div>
    )
}
export default Navbar;