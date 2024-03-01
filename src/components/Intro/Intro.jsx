import React from 'react'
import './Intro.css'

import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Insta from '../../img/instagram.png'
import Whatsapp from '../../img/whatsapp.png'

import vec1 from '../../img/Vector1.png'
import vec2 from '../../img/Vector2.png'
import hero from '../../img/hero.png'
import thumbs from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glasses from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy!! I Am</span>
                <span>Abhisek Tripathy</span>
                <span>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    A excepturi nisi aspernatur nemo aliquam. 
                    Minima doloribus maiores facilis veritatis laudantium.
                </span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="https://github.com/AceingAbhi">
                    <img src={GitHub} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/abhisek-tripathy-7b6990245/">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/aceing_abhi238?igsh=eDZ2azczNmpuNm1s">
                    <img src={Insta} alt="" />
                </a>
                <a href="https://wa.me/+916372425211">
                    <img src={Whatsapp} alt="" style={{height: '90px'}}/>
                </a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={vec1} alt="" />
            <img src={vec2} alt="" />
            <img src={hero} alt="" />
            <img src={glasses} alt="" />
            <div style={{top: '-4%', left: '64%' }}>
                <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem' }}>
                <FloatingDiv image={thumbs} txt1='Best Design' txt2='Award'/>
            </div>

            <div className='blur' style={{background: 'rgb(238 210 255)'}}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '24rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro