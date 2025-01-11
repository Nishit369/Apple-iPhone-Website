import React from 'react'
import { appleImg, bagImg } from '../utils'
import { searchImg } from '../utils/index';
import { navLists } from '../constants';
const Navbar = () => {
  return (
    <header className = "w-full py-5 px-5 sm:px-10 flex justify-between items-center">
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={20} height={20} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
              {navLists.map((nav, i)=> (
                <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                  {nav}
                </div>
              ))}

            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
            <img src={searchImg} alt='search' width={18} height={18}/>
            <img src={bagImg} alt='search' width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar