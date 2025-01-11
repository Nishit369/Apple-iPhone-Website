import React from 'react'
import gsap from 'gsap'
import {useGSAP}  from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils/index'
import { useState } from 'react'
import { useEffect } from 'react'
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
    window.addEventListener('resize', handleVideoSrcSet)
    return () => window.removeEventListener('resize', handleVideoSrcSet)
  },[])
  useGSAP(() => {
    gsap.to('#hero', {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      delay: 2
    })
    gsap.to('#cta',{
      duration: 1,
      opacity: 1,
      delay: 2,
      y: -50,
      ease: 'power4.out',
    })
  },[])
  return (
    <section className='w-full nav-height bg-black relative'> 
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div id="cta"
      className='flex flex-col items-center opacity-0 translate-y-20'>
      <a href="#highlights" className='btn'>Buy</a>
      <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero