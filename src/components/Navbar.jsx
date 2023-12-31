import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { romeos, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      className={`
      ${styles.paddingX} flex items-center w-full fixed py-5 top-0 bg-primary z-20
     `}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={romeos} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white font-bold text-[18px] cursor-pointer flex'>Romeo &nbsp;<span className='sm:block hidden'> | Omoregie </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title
                  ? "text-white"
                  : "text-secondary"
                } text-[18px] hover:text-white font-meduim cursor-pointer`}
              onClick={() => (
                setActive(link.title)
              )}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] cursor-pointer object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} black-gradient p-6 absolute top-20 mx-4 right-0 my-2 min-w-[140px] rounded-xl z-10`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins cursor-pointer font-medium text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar