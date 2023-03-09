import React from 'react'
import { navLinks } from './Data'
import {FaTimes} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'

const Nav = () => {
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
                <div className='menu__open'>
                    <CgMenuGridO size={40}/>
                </div>
            </nav>
            <div className='mobile__menu'>
                <div className='mobile__menu--wrapper'>
                    <div className='menu__close'>
                        <FaTimes size={40}/>
                    </div>
                    <ul>
                    {navLinks.map(item => {
                        const {id, url, link} = item
                        return <li key={id}><a href={url}>{link}</a></li>
                    })}
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Nav