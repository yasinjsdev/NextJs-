import { Heebo } from 'next/font/google'
import styles from './Navbar.module.css'
import React from 'react'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const Navbar = () => {
  return (
    <div>
      <nav className={`${styles.navbar} ${heebo.className}`} >
        <ul className={styles.ul} >
          <li>Works</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar