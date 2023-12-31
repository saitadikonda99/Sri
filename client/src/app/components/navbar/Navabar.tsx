import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent-in">
                <div className="Nav-one">
                    <h1>శ్రీ అచ్చమ్మ పేరంటాలు తల్లి</h1>
                </div>
                <div className="Nav-two">
                    <div className="Nav-two-one">
                        <Link href='/'>Gallery</Link>
                    </div>
                    <div className="Nav-two-two">
                        <Link href='/'>About</Link>
                    </div>
                    <div className="Nav-two-three">
                        <Link href='/'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar