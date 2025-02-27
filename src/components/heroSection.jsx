import React from 'react'
import Header from './ui/header'
import Image from 'next/image'

function HeroSection() {
    return (
        <>
            <div className='bg-[#0B295A]'>
                <div className='2xl container'>
                    <Header />
                    <div className='pt-20 flex justify-center font-poppins font-semibold'>
                        <div className='text-white text-center '>
                            <div className='flex justify-center'>
                                <h1 className='text-7xl font-bold w-[50%]'>The patient app actually integrated</h1>
                            </div>
                            <div className='mt-12 text-[#BFC8D5] w-[70%] mx-auto font-semibold'>
                                <p>Medtracker is a covergence of technology and pharmacy landscapes,designed to allow USERS to gain access to information of the availability and locations of their desired product.</p>
                                <p className='mt-4'>Medtracker empower Pharmacies to embrace the future, opportunities and benefits of Digitalization in the pharmaceutical industry .</p>
                            </div>
                            <div className='flex justify-center'>
                                <Image
                                    src="/assets/mobile.png"
                                    width={1000}
                                    height={700}
                                    alt='mobile'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection