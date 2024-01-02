import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {

    const handleScroll = (path: string) => {

            const scroll = document.querySelector(path)
    
            if (scroll) {
                scroll.scrollIntoView({ behavior: 'smooth' });
            }
        }
    


  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent-in">
                <div className="Nav-one">
                    <h1>శ్రీ అచ్చమ్మ పేరంటాలు తల్లి</h1>
                </div>
                <div className="Nav-two">
                    <div className="Nav-two-one">
                        <Link href='/' onClick={()=>handleScroll('.Home-one')}>Home</Link>
                    </div>
                    <div className="Nav-two-two">
                        <Link href='/' onClick={()=>handleScroll('.Home-two')}>About</Link>
                    </div>
                    <div className="Nav-two-three">
                        <Link href='/' onClick={()=>handleScroll('.Home-four')}>Gallery</Link>
                    </div>
                    <div className="Nav-two-four">
                        <Link href='/' onClick={()=>handleScroll('.Home-Footer')}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar