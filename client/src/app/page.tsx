"use client";
import Image from 'next/image'
import Link from 'next/link'

import Navbar from './components/navbar/Navabar'
import Footer from './components/footer/Footer'
import ResNavbar from './components/navbar/ResNavbar'
import Animation from './animation/Animation'

import { useEffect, useState } from 'react';
import './globals.css'
import './MobileView.css'

import logo from './assets/logo.png'
import Temple from './assets/Temple.png'
import Wheel from './assets/Wheel.png'
import Om2 from './assets/Om2.png'
import Hero from './assets/Hero.png'

import { PiHandsPrayingFill } from "react-icons/pi";

export default function Home() {

  const [isLoading, setLoading] = useState(false);

  function someRequest() {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 10));
  }

  useEffect(() => {
    setLoading(true);
    someRequest().then(() => {
      setLoading(false);
    });
  },[]);

  if (isLoading) {
      return (
        <Animation/>
      );
  }

  return (
      <div className="HomeComponent">
          <div className="HomeComponent-in">
            <div className="Home-Nav">
              <Navbar />
            </div>
            <div className="Home-Nav-Res">
              <ResNavbar />
            </div>
            <div className="Home-one">
              <div className="Home-one-in">
                  <div className="Hero-head">
                    <p>శ్రీ అచ్చమ్మపేరంటాలు తల్లి 67వ వార్షికోత్సవ ఉత్సవాలు ది 16-02-24 నుండి 24-02-24 వరకు జరుగును.</p>
                  </div> 
                  <div className="Hero-main">
                    <div className="Hero-main-in">
                      <div className="Hero-mn-one">
                          <div className="Hero-mn-one-one">
                            <p>Welcome to our temple</p>
                            <h1>Sri Achhamma Perantalu Thalli</h1>
                            <p>Embark on a spiritual journey with our temple: a sacred space where serenity meets devotion, and timeless traditions resonate.</p>
                          </div>
                          <div className="Hero-mn-one-two">
                            <img src={Hero.src} alt="" />
                          </div>
                      </div>

                    </div>
                    <div className="Hero-line">
  
                    </div>
                  </div>
              </div>
            </div>
            <div className="Home-two">
              <div className="Home-two-in">
                <div className="Home-tw-one">
                  <Image src={Temple.src} alt="" width={800} height={500}/>
                </div>
                <div className="Hero-mt-two">
                    <div className="Hero-mt-th">
                      <h1>About Temple</h1>
                    </div>
                    <div className="Hero-mt-tm">
                      <h1>Sri Achhamma Perantalu Thalli</h1>
                    </div>
                    <div className="Hero-mt-tp">
                      <p>Every year, the <span>ఉత్సవాలు</span> have been celebrated grandly for nine days for the past 66 years in the village of Galayagudem, and we extend a warm welcome to everyone to participate in the puja and seek blessings from the god.</p>
                    </div>
                    <div className="Hero-mt-tpr">
                      <div className="Hero-mt-tpr-in">
                          <div className="hero-pr-one">
                            <Image src={Om2.src} alt="" width={800} height={500}/>
                            <p>Puja&apos;s</p>
                          </div>
                          <div className="hero-pr-two">
                            <PiHandsPrayingFill className='prayer' />
                            <p>Prayers</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="Home-three">

            </div>
            <div className="Home-four">
              <div className="Home-four-in">
                  <div className="Home-four-one">
                      <div className="Home-four-p">
                        <p>WONDERFUL THINGS</p>
                      </div>
                      <div className="Home-four-h">
                        <h1>JOIN THE 9 DAY EVENTS AND PRAYERS</h1>
                      </div>
                  </div>
                  <div className="Home-four-two">
                    <div className="Home-ft-in">
                        <div className="Home-ft-one">
                          <div className="hm-ft-on-in">
                            <Image src={Wheel.src} alt="" width={800} height={500}/>
                          </div>
                        </div>
                        <div className="Home-ft-two">
                          <div className="hm-ft-tw-in">
                          <Image src={logo.src} alt="" width={800} height={500}/>
                          </div>
                        </div>
                        <div className="Home-ft-three">
                          <div className="hm-ft-th-in">
                            <Image src={Temple.src} alt="" width={800} height={500}/>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="Home-four-three">
                    <button>
                      <Link href='/gallery'>Explore More</Link>
                    </button>
                  </div>
              </div>
            </div>
            <div className="Home-Footer">
              <Footer />
            </div>
          </div>
      </div>
  )
}
