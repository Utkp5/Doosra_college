import React from 'react'
const Compt1 = () => {
  return (
    <div className='compt1 bg-amber-500 text-white w-60 h-96 mt-20 rounded-l-xl'>
      <div className='flex flex-col	justify-around h-96 p-4 '>
      <div className=''><img src="https://ernestoborges.github.io/frontendMentor-06/images/icon-sedans.svg" alt="" /></div>
      <div className='font-bold'>SEDANS</div>
      <p className='text-base	'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
      <button className="text-[#a58361] bg-white  p-3 w-32 rounded-full font-semibold mt-5 hover:bg-amber-500 hover:text-white	 hover:border-solid border-2 border-white-600">Learn More</button>      
      </div>
    </div>
  )
}

export default Compt1
