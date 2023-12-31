import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
        <div className="GalleryComponent">
            <div className="GalleryComponent-in">
                <h1>Coming Soon</h1>
                <Link href='/'>Back to Home</Link>
            </div>
        </div>
  )
}

export default page