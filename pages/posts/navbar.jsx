import Link from 'next/link';
import React from 'react';
import styles from '../../styles/navbar.module.css';
import { navLinks } from '../lib/navLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <ul>
            {navLinks.map((item)=>(
               <li key={`navbar-${item.path}`}><Link href={{pathname:item.path,query:{id:item?.query}}}>{item.name}</Link></li> 
            ))}
        </ul>
    </div>
  )
}

export default Navbar