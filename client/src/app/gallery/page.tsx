import React from 'react'
import Link from 'next/link'

import './page.css'

const page = () => {
  return (
        <div className="GalleryComponent">
            <div className="GalleryComponent-in">
                <div className="GalleryNav">
                  <div className="GalleryNav-in">
                     <div className="G-one">
                        <h1>శ్రీ అచ్చమ్మ పేరంటాలు తల్లి</h1>
                     </div>
                      <div className="G-two">
                          <Link href='/'>Home</Link>
                      </div>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default page