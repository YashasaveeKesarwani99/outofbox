import React from 'react'
import './Homepage.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { IoLogoXing } from 'react-icons/io'

const Homepage = ()=>{

    return(
        <>
        <div className='homepage-main'>
            <div className='homepage-header'>
                <div className='homepage-nav-left'>
                    <p>Redington</p>
                    <p>Services</p>
                    <p>Solutions</p>
                    <p>Partnership</p>
                    <p>Marketplace</p>
                    <p>Resources</p>
                </div>
                <div className='homepage-nav-right'>
                    <div className='homepage-nav-right-contact'>
                        <span><span><BsFillTelephoneFill/></span>+91 1234456765</span>
                        <p>|</p>
                        <p><span><IoMdMail/></span>email@email.com</p>
                        <p>Request a call back</p>
                    </div>
                    <div className='homepage-nav-right-login'>
                        <p>Login/Register</p>
                        <p>Free trial</p>
                    </div>
                </div>
            </div>
            <div className='homepage-title-container'>
            <div className='homepage-title-sub-container'>
                <div className='homepage-title'>
                <div className='homepage-title-bold'>
                    <p>ENLIVEN EDUCATION</p>
                </div>
                <div className='homepage-title-small'>
                    <p>Unfold New Age Learning with AWS And Redington</p>
                </div>
                </div>
            </div>
            </div>
            </div>
            <div className='homepage-about'>
                <div className='homepage-about-container-1'>
                <div className='homepage-about-left'>
                    <div>Seamlessly Shift To</div>
                    <div>Remote Learning and  <br/> working</div>
                </div>
                <div className='homepage-about-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tempus felis. Nulla et tincidunt lorem. Praesent sem turpis, vehicula eget fringilla ac, porttitor eget urna. Nulla molestie ipsum quis suscipit ultricies. Nunc mattis vehicula rutrum. Morbi malesuada sit amet tortor sit amet interdum. Integer iaculis mi a metus vestibulum ullamcorper. Sed sed eros finibus, fermentum diam in, eleifend tellus.</div>
                </div>
            <div className='homepage-ses'>
                <div className='homepage-ses-left'>
                    <p>Attend Our program Launch Session</p>
                    <p>Topic</p>
                    <p>Speaker</p>
                    <p>2nd December 2021, 3:00 - 4:00 PM</p>
                </div>
                <div className='homepage-ses-right'>
                    <p className='hompage-ses-ellipse'></p>
                    <p >Register Now</p>
                </div>
            </div>
            </div>
            <div className='homepage-live-ses'>
               <div className='homepage-live-ses-title'> <a href='/'>Scheduled LIVE Sessions</a></div>
                <div className='homepage-live-ses-cards'>
                    <div className='homepage-live-ses-card'>
                        <div>LIVE WEBINAR</div>
                        <div>Learnyst - Tech Online <br/>Security With Your<br/> institute Branded Apps</div>
                        <div>DATE AND TIME <br/> 8th Dec '21 | 3-4 PM</div>
                        <div>Register Now</div>
                    </div>
                    <div className='homepage-live-ses-card'>
                        <div>LIVE WEBINAR</div>
                        <div>Learnyst - Tech Online <br/>Security With Your<br/> institute Branded Apps</div>
                        <div>DATE AND TIME <br/> 8th Dec '21 | 3-4 PM</div>
                        <div>Register Now</div>
                    </div>
                    <div className='homepage-live-ses-card'>
                        <div>LIVE WEBINAR</div>
                        <div>Learnyst - Tech Online<br/> Security With Your <br/>institute Branded Apps</div>
                        <div>DATE AND TIME <br/> 8th Dec '21 | 3-4 PM</div>
                        <div>Register Now</div>
                    </div>
                    <div className='homepage-live-ses-card'>
                        <div>LIVE WEBINAR</div>
                        <div>Learnyst - Tech Online <br/>Security With Your<br/> institute Branded Apps</div>
                        <div>DATE AND TIME <br/> 8th Dec '21 | 3-4 PM</div>
                        <div>Register Now</div>
                    </div>
                </div>
            </div>
            <div style={{height:'40vh'}}>

            </div>
        </>
    )

}

export default Homepage