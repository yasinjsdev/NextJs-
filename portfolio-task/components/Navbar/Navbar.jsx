"use client"


import { Heebo } from 'next/font/google'
import styles from './Navbar.module.css'
import React, { useState } from 'react'
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false)
  return (
    <div>
      <nav className={`${styles.navbar}`} >
        <div className={styles.hamburger} >
          {
            showNavItems ?
              <div
                className={styles.cross}
                onClick={() => setShowNavItems(false)}
              >
                <MdOutlineCancel />
              </div> :
              <svg
                onClick={() => setShowNavItems(!showNavItems)}
                width="30"
                height="20"
                viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.800049H30" stroke="#21243D" stroke-width="1.6" />
                <path d="M0 9.80005H30" stroke="#21243D" stroke-width="1.6" />
                <path d="M0 18.8H30" stroke="#21243D" stroke-width="1.6" />
              </svg>
          }
        </div>
        <ul className={`${showNavItems ? styles.show : styles.hide} ${styles.ul}`} >
          <li>Works</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar