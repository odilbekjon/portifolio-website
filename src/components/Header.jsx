import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavopen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-semibold text-slate-950">
            OS
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Odilbek Safarov</p>
            <p className="text-xs text-slate-400">Frontend Developer</p>
          </div>
        </a>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={() => setNavopen(!navOpen)} aria-label="Toggle navigation">
            <span className="material-symbols-rounded">
              <MdMenu className={`${!navOpen ? 'visible' : 'hidden'}`} style={{ color: 'white' }} />
              <IoClose className={`${!navOpen ? 'hidden' : 'visible'}`} style={{ color: 'white' }} />
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;
