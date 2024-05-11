import React from 'react'

// "#17bfa4"
// "#41bdef"
// "#e56b6a"
// "#f1a14d"

function Services() {
  return (
    <div className='text-center text-black dark:text-white'>
        <h1 className="text-2xl font-medium">SERVICES</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0594ff] to-[#93f3f6] rounded mx-auto mt-1 mb-10"></div>
          <h1 className='mb-10 text-5xl font-nomral tracking-wide'>We provide Artificial Intelligence Services</h1>
        <div className='w-3/4 grid grid-cols-2 grid-rows-2'>
            <div className='w-full h-[400px]'>
                <h1 className='font-semibold text-5xl text-[#17bfa4]'><span className='text-gray-500'>0</span> <span className='text-gray-500 hover:text-[#17bfa4]'>1</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Services