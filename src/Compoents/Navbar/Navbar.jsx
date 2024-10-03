import React, { useState } from 'react';

const Navbar = ({cardIncrement,openNav}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMenuClick =()=>{
        
        setIsMenuVisible(!isMenuVisible);
    }
  


    return (
        <div>
            <nav class='m-0 p-0'>
                <div class='bg-[#802c6e] p-2'>
                    <div class=' container mx-auto'>
                        <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                            <div>
                                <a class='text-2xl text-white' href=''>
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SWt</span>
                                </a>
                            </div>
                            <div>
                            <ul class='hidden lg:block  xl:flex xl:gap-12 flex-wrap'>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">Home</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">About</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">Category</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">Products</a>
                                </li>
                            </ul>    
                            </div>
                            <div class='flex gap-4'>
                                <button class='p-2 px-5  border-white border-2 rounded-2xl hover:bg-[#df57c1] hover:text-white'>Login</button>

                                <div class='mt-2 relative'>
                                   <button onClick={openNav} >
                                     <svg  xmlns="http://www.w3.org/2000/svg"  color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    </button>
                                    <div className=' absolute bottom-7 right-0'>
                                        <span className='text-white text-xl'>{cardIncrement}</span>
                                    </div>
                                </div>
                                <div class='mt-3 block lg:hidden' onClick={handleMenuClick}>
                                <svg color='white' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                  </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isMenuVisible ? '' : 'hidden'}  id="mobileMenu">
                    <hr />
                    <div className='bg-[#802c6e] '>
                    <ul class=" lg:hidden ml-8 gap-8 ">
                    <li>
                       <a class='text-white text-lg hover:text-[#df57c1]' href="">Home</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">About</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">Category</a>
                                </li>
                                <li>
                                    <a class='text-white text-lg hover:text-[#df57c1]' href="">Products</a>
                                </li>
                         </ul>
                   </div>    
            </div>
            </nav>     
        </div>      
    );
};

export default Navbar;