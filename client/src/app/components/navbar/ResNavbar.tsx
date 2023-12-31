"use client";

import React from 'react'
import './ResNavbar.css'
import Link from 'next/link'

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ResNavbar = () => {

    const [click, setClick] = React.useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const handleScroll = (path: string) => {

        const scroll = document.querySelector(path)

        if (scroll) {
            scroll.scrollIntoView({ behavior: 'smooth' });
        }

        setClick(!click)
    }

  return (
        <div className="ResNavbar-Component">
            <div className="ResNav-in">
                <div className="ResNav-one">
                    <h1>శ్రీ అచ్చమ్మ పేరంటాలు తల్లి</h1>
                </div>
                <div className="ResNav-two">
                    {click ? <IoClose onClick={handleClick} /> : <FaBars onClick={handleClick} />}
                </div>
            </div>
                <div className={click ? 'Res-navigation' : 'nav-hide'}>
                    <div className="Res-navigation-in">
                        <div className="Res-navigation-one">
                            <Link href='/' onClick={()=>handleScroll('.Home-one')}>Home</Link>
                        </div>
                        <div className="Res-navigation-two">
                           <Link href='/' onClick={()=>handleScroll('.Home-two')}>About</Link>
                        </div>
                        <div className="Res-navigation-three">
                            <Link href='/' onClick={()=>handleScroll('.Home-four')}>Gallery</Link>
                        </div>
                        <div className="Res-navigation-four">
                            <Link href='/' onClick={()=>handleScroll('.Home-Footer')}>Contact</Link>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default ResNavbar