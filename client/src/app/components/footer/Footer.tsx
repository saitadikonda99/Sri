import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './Footer.css'

// imports starts here
import { MdCopyright } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Om from '../../assets/Om.png'


const Footer = () => {
  return (
       <div className="FooterComponent">
            <div className="FooterComponent-in">
                <div className="Footer-one">
                    <div className="Footer-one-in">
                        <div className="Footer-one-one">
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="Footer-one-two">
                            <Link href='mailto:saitadikonda.tech@gmail.com'>Feedback</Link>
                            <Link href='mailto:saitadikonda.tech@gmail.com'>Report Errors</Link>
                        </div>
                    </div>
                </div>
                <div className="Footer-two">
                    <div className="Footer-two-in">
                        <div className="Footer-one-on">
                            <Image src={Om.src} alt="" width={800} height={500}/>
                            <p>గాలాయగూడెం గ్రామం లో వెలసిన శ్రీ అచ్చమ్మపేరంటాలు తల్లి 67వ వార్షికోత్సవ ఉత్సవాలు ది 16-02-24 నుండి 24-02-24 వరకు జరుగును.</p>
                        </div>
                        <div className="Footer-two-in-in">
                            <div className="Footer-two-on">
                                <div className="ft-one-ft">
                                    <p>Our Services</p>
                                </div>
                                <div className="ft-two-ft">
                                    <p>Dharshanam</p>
                                </div>
                                <div className="ft-three-ft">
                                    <p>Prasadam</p>
                                </div>
                                <div className="ft-four-ft">
                                    <p>Puja&apos;s</p>
                                </div>
                            </div>
                            <div className="Footer-three-on">
                                <div className="ft-con-one">
                                    <IoLocationOutline className="location" />
                                    <p>Galayagudem, Andhra Pradesh</p>
                                </div>
                                <div className="ft-con-two">
                                    <p>Q4MH+PP4, Jangareddygudem Rd, Galayagudem, Challapalle, Andhra Pradesh 534450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-three">
                    <div className="Footer-three-one">
                        <div className="Fto">
                            <MdCopyright />
                            <p>2024 - Sri Achhamma Perantalu Thalli <span> | </span> </p>
                        </div>
                        <div className="Ftt">
                            <p>Designed & Developed by</p>
                            <Link href='https://www.linkedin.com/in/tadikondasaimanikanta/' passHref>Tadikonda Sai Manikanta</Link>
                        </div>
                    </div>
                </div>
            </div>
       </div>
  )
}

export default Footer


