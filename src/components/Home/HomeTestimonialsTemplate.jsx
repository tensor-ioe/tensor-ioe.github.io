import testimonies from '../../constants/Testimonies'

const HomeTestimonialsTemplate = () => {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-center">Testimonials</h1>
            <div className="w-[90vw] xl:w-width mx-auto mb-10 relative">
                <div className="show-scrollbar pb-3 whitespace-nowrap overflow-y-hidden">
                    {testimonies.map((item, index) => {
                        return (
                            <div key={index} className={`w-[320px] h-[510px] inline-block ml-3 mr-3 pt-[75px]`}>
                                <div className="h-[425px] relative pt-[85px] px-5 bg-[#E0EDFA] rounded-2xl shadow-boxShadow">
                                    <img className="w-[150px] h-[150px] rounded-[50%] absolute top-[-75px] left-[85px] object-cover" src={item.PersonImage} alt="personimage" />
                                    <div className="w-[280px] h-[264px] whitespace-normal opacity-65 text-center italic overflow-scroll">{item.Testimony}</div>
                                    <h1 className="text-center text-xl font-bold">{item.Name}</h1>
                                    <h1 className="text-center text-xl opacity-65">{item.Role}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default HomeTestimonialsTemplate