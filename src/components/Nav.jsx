import React from 'react'
import { navLinks } from './Data'
import {FaTimes} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'

const Nav = () => {
  return (
    <>
        <header>
            <nav>
                <ul>
                    {navLinks.map(item => {
                        const {id, url, link} = item
                        return <li key={id}><a href={url}>{link}</a></li>
                    })}
                </ul>
                <div>
                    <CgMenuGridO/>
                </div>
            </nav>
            <div>
                <div>
                    <FaTimes/>
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