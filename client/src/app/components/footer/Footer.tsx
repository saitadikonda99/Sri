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
                            <Link href='/'>Feedback</Link>
                            <Link href='/'>Report Errors</Link>
                        </div>
                    </div>
                </div>
                <div className="Footer-two">
                    <div className="Footer-two-in">
                        <div className="Footer-one-on">
                            <Image src={Om.src} alt="" width={800} height={500}/>
                            <p>గాలాయగూడెం గ్రామం లో వెలసిన శ్రీ అచ్చమ్మపేరంటాలు తల్లి 67వ వార్షికోత్సవ ఉత్సవాలు ది 15-02-24 నుండి 25-02-24 వరకు జరుగును.</p>
                        </div>
                        <div className="Footer-two-on">
                            <div className="Footer-ser">
                                <div className="Footer-ser-in">
                                    <span>Our Services</span>
                                    <p>Prayers</p>
                                    <p>Puja</p>
                                    <p>Darshanam</p>
                                    <p>Prasadam</p>
                                </div>
                            </div>
                            <div className="Footer-con">
                                <span>Contact Us</span>
                                <div className="Footer-tt-one">
                                    <div className="Footer-tt-one-in">
                                        <IoLocationOutline />
                                        <p>Sri Achhamma Perantalu Thalli</p>
                                    </div>
                                    <div className="Footer-tt-two">
                                        <p>Q4MH+PP4, Jangareddygudem Rd, Galayagudem, Challapalle, Andhra Pradesh 534450</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-three">
                    <div className="Footer-three-one">
                        <MdCopyright />
                        <p>2024 - Sri Achhamma Perantalu Thalli </p> <span> | </span>
                        <p>Designed & Developed by</p>
                        <Link href='/'>Tadikonda Sai Manikanta</Link>
                    </div>
                </div>
            </div>
       </div>
  )
}

export default Footer


