import React from 'react'
import { navLinks } from './Data'

const footer = () => {
  return (
    <>
        <footer>
            <h1>Lucid Nelson</h1>
            <ul>
                {navLinks.map(item => {
                    const {id, url, link} = item
                    return <li key={id}><a href={url}>{link}</a></li>
                })}
            </ul>
            <p>All Rights Reserved</p>
        </footer>
    </>
  )
}

export default footer