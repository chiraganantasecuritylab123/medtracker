import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <>
        <div className='bg-[#0B295A] p-4 sticky'>
            <Image
                src='/assets/mt-logo.png'
                width={150}
                height={150}
                alt='logo'
            /> 
        </div>
    </>
  )
}

export default Header