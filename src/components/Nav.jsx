import React, { useState } from 'react'
import { navLinks } from './Data'
import {FaTimes} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'

const Nav = () => {
    const [nav, setNav] = useState(false)
  return (
    <>
        <header>
            <nav>
                <div className='nav__logo'>
                    <h2>Lucid Nelson</h2>
                </div>
                <ul>
                    {navLinks.map(item => {
                        const {id, url, link} = item
                        return <li key={id}><a href={url}>{link}</a></li>
                    })}
                </ul>
                <div className='menu__open' onClick={() => setNav(!nav)}>
                    <CgMenuGridO size={40}/>
                </div>
            </nav>
            {nav && <div className='mobile__menu'>
                <div className='mobile__menu--wrapper'>
                    <div className='menu__close' onClick={() => setNav(!nav)}>
                        <FaTimes size={40}/>
                    </div>
                    <ul>
                    {navLinks.map(item => {
                        const {id, url, link} = item
                        return <li key={id}><a href={url}>{link}</a></li>
                    })}
                    </ul>
                </div>
            </div>}
        </header>
    </>
  )
}

export default Nav