import { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// components
import Navbar from './Navbar';

const Header = () => {

    const [navOpen, setNavopen] = useState(false);

  return (
    <>
        <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 text-white'>
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <a href="" className='text-[20px] '>
                    <span className=''>Odilbek Safarov</span>
                </a>
         
            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavopen(!navOpen)}>
                    <span className='material-symbols-rounded'>
                        <MdMenu className={`${!navOpen ? 'visible' : 'hidden'}`} style={{color:'white'}} />
                        <IoClose className={`${!navOpen ? 'hidden' : 'visible'}`} style={{color:'white'}} />
                    </span>
                </button>

                <Navbar navOpen={navOpen} />
            </div>

                <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>
                    Contact me
                </a>
            </div>
        </header>
    </>
  )
}

export default Header;
