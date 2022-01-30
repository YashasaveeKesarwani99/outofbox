import React from 'react'
import './Homepage.css'
import { BsFillTelephoneFill, BsLock } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { DiCodeBadge } from 'react-icons/di'
import echo from '../../utils/amazon_echo.png'
import fire from '../../utils/amazon_firestick.jpg';
import gift from '../../utils/gift_box.jpg'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'

const Homepage = ()=>{

    const [display,setDisplay] = React.useState(false)

    const displayHandler = ()=>{
        var dis = display
        setDisplay(!dis)
    }

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
                {(display)?(<div className='homepage-nav-right-reponsive'>
                    <div className='homepage-nav-right-responsive-left'>
                    <div><span>+91 1234456765</span></div>
                    <div>email@email.com</div>
                    <div>Request a call back</div>
                    <div>Login/Register</div>
                    <div><div className='homepage-nav-right-login-trial'><p>Free trial</p></div></div>
                    </div>
                    <div>
                    <div className='homepage-nav-right-reponsive-botton' onClick={()=>displayHandler()}><AiOutlineMenu size={30}/></div>
                    </div>
                </div>):null}
                <div className='homepage-nav-right-reponsive-botton' onClick={()=>displayHandler()}><AiOutlineMenu size={30}/></div>
                <div className='homepage-nav-right'>
                    <div className='homepage-nav-right-contact'>
                        <span><span><BsFillTelephoneFill/></span>+91 1234456765</span>
                        <p>|</p>
                        <div style={{display:"flex", justifyContent:'center',alignItems:'center',paddingLeft:'4%'}}>
                            <div style={{marginTop:'5px'}}><IoMdMail/></div>
                            <div>email@email.com</div>
                        </div>
                        <p>Request a call back</p>
                    </div>
                    <div className='homepage-nav-right-login'>
                        <p>Login/Register</p>
                        <div className='homepage-nav-right-login-trial'><p>Free trial</p></div>
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
                    <div >Register Now</div>
                    <div style={{paddingTop:'8px', marginLeft:"10px"}}><AiOutlineArrowRight/></div>
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
            <div className='homepage-offers'>
                <div style={{fontSize:'25px',wordSpacing:'5px'}}>Stand A Chance To Win Amazing Prices</div>
                <div style={{color:'rgb(87,28,96)'}}>REGISTER, ATTEND AND ENGAGE</div>
                <div><a href='/' style={{color:'black', borderBottom:'2px solid green', textDecoration:'none'}}>Opt For AWS Cloud Services With Us To Win Exciting Offers*</a></div>
                </div>
                <div className='homepage-offers-photos'>
                    <div className='homepage-offers-photo'>
                    <div><img src={echo} alt="echo"/></div>
                    <div>Top 50 customers will get Amazon Echo Dot</div>
                    </div>
                    <div className='homepage-offers-photo'>
                    <div ><img src={fire} alt="fire stick"/></div>
                    <div>Next 50 customers will get Amazon Firestick</div>
                    </div>
                    <div className='homepage-offers-photo'>
                    <div><img src={gift} alt="gifts"/></div>
                    <div>And much more to win</div>
                    </div>
                </div>
                <div style={{color:'lightgray',textAlign:'right', marginRight:'10vh',marginBottom:'5vh'}}>*T&C apply</div>
                <div className='homepage-video-series'>
                    <div className='homepage-video-series-title'><a>On-Demand Video Series</a></div>
                    <div className='homepage-video-serires-cards'>
                        <div className='homepage-video-series-card'>
                            <div style={{fontWeight:'600'}}>ENLIVEN EDUCATION</div>
                            <div style={{fontWeight:'800',fontSize:"25px"}}>AWS in Education<br/> Segment</div>
                            <div style={{fontSize:'18px',marginLeft:"1.5em"}}>View Series</div>
                        </div>
                        <div className='homepage-video-series-card'>
                            <div style={{fontWeight:'600'}}>ENLIVEN EDUCATION</div>
                            <div style={{fontWeight:'800',fontSize:"25px"}}>AWS in Education<br/> Segment</div>
                            <div style={{fontSize:'18px',marginLeft:"1.5em"}}>View Series</div>
                        </div>
                    </div>
                </div>
                <div className='homepage-signup'>
                    <div className='homepage-signup-left'>
                        <div style={{fontSize:"25px"}}>Start Up Now And Get Free Consultation<br/> To Start Your AWS Journey With Us.</div>
                        <div>CONTACT US</div>
                    </div>
                </div>
                <div className='homepage-usecase'>
                    <div className='homepage-usecase-title'><a href="/">Explore The Various Use Cases</a></div>
                    <div className='homepage-usecase-cards'>
                        <div className='homepage-usecase-card'>
                            <div>Virtual Live<br/> Classroom</div>
                            <div>Gain the flexibility over a<br/> traditional classroom,<br/> Brainstorm, ideate, and <br/>discuss in real time</div>
                        </div>
                        <div className='homepage-usecase-card'>
                            <div>Virtual Live<br/> Classroom</div>
                            <div>Gain the flexibility over a<br/> traditional classroom,<br/> Brainstorm, ideate, and <br/> discuss in real time</div>
                        </div>
                        <div className='homepage-usecase-card'>
                            <div>Virtual Live<br/> Classroom</div>
                            <div>Gain the flexibility over a<br/> traditional classroom,<br/> Brainstorm, ideate, and <br/>discuss in real time</div>
                        </div>
                        <div className='homepage-usecase-card'>
                            <div>Virtual Live<br/> Classroom</div>
                            <div>Gain the flexibility over a<br/> traditional classroom,<br/> Brainstorm, ideate, and <br/>discuss in real time</div>
                        </div>
                    </div>
                </div>
                <div className='homepage-attend'>
                    <div className='homepage-attend-title'><a href='/'>Why Attend The Session</a></div>
                    <div className='homepage-attend-cont-1'>
                        <div className='homepage-attend-cont-1-content'>
                            <div className='homepage-attend-cont-1-icon'><DiCodeBadge size={70} color='rgba(82,20,125,1)'/></div> 
                            <div className='homepage-attend-cont-1-text'>
                                <div>01</div>
                                <div>Free Registration</div>
                            </div>
                        </div>
                        <div className='homepage-attend-cont-1-content'>
                            <div className='homepage-attend-cont-1-icon'><DiCodeBadge size={70} color='rgba(82,20,125,1)'/></div>
                            <div className='homepage-attend-cont-1-text'>
                                <div>02</div>
                                <div>Attend From Anywhere</div>
                            </div>
                        </div>
                        <div className='homepage-attend-cont-1-content'>
                            <div className='homepage-attend-cont-1-icon'><DiCodeBadge size={70} color='rgba(82,20,125,1)'/></div>
                            <div className='homepage-attend-cont-1-text'>
                                <div>03</div>
                                <div>Gain Crucial Insights</div>
                            </div>
                        </div>
                    </div>
                    <div className='homepage-attend-cont-2'>
                        <div className='homepage-attend-cont-1-content'>
                            <div className='homepage-attend-cont-1-icon'><DiCodeBadge size={70} color='rgba(82,20,125,1)'/></div>
                            <div className='homepage-attend-cont-1-text'>
                                <div>04</div>
                                <div>Chance To Win Exciting Prizes</div>
                            </div>
                        </div >
                        <div className='homepage-attend-cont-1-content'>
                            <div className='homepage-attend-cont-1-icon'><DiCodeBadge size={70} color='rgba(82,20,125,1)'/></div>
                            <div className='homepage-attend-cont-1-text'>
                                <div>05</div>
                                <div>Learn Interact Network</div>
                            </div>
                        </div>
                        </div>
                </div>
                <div className='homepage-gallery'>
                    <div className='homepage-gallery-title'><a href='/'>Explore The Various Use Cases</a></div>
                    <div className='homepage-gallery-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tempus felis. Nulla et tincidunt lorem. Praesent sem turpis, vehicula <br/>eget fringilla ac, porttitor eget urna. Nulla molestie ipsum quis suscipit ultricies. Nunc mattis <br/>vehicula rutrum. Morbi malesuada sit amet tortor sit amet interdum. Integer<br/> iaculis mi a metus vestibulum ullamcorper. </div>
                   </div>
                    <div className='homepage-gallery-photos'>
                        <div className='homepage-gallery-photo-1'>
                            <div className="homepage-gallery-photo-text">Cloud Consulting Services</div>
                        </div>
                        <div className='homepage-gallery-photo-2'>
                            <div className="homepage-gallery-photo-text">Cloud Consulting Services</div>
                        </div>
                        <div className='homepage-gallery-photo-3'>
                            <div className="homepage-gallery-photo-text">Cloud Migration Services</div>
                        </div>
                        <div className='homepage-gallery-photo-4'>
                            <div className="homepage-gallery-photo-text">S.M.A.R.T Framework</div>
                        </div>
                    </div>
                    <div className='homepage-offers-bottom'>
                    <div className='homepage-offers' style={{marginTop:'20vh'}}>
                <div style={{fontSize:'25px',wordSpacing:'5px'}}>Stand A Chance To Win Amazing Prices</div>
                <div style={{color:'rgb(87,28,96)'}}>REGISTER, ATTEND AND ENGAGE</div>
                <div><a href='/' style={{color:'black', borderBottom:'2px solid green', textDecoration:'none'}}>Opt For AWS Cloud Services With Us To Win Exciting Offers*</a></div>
                </div>
                <div className='homepage-offers-photos'>
                    <div className='homepage-offers-photo'>
                    <div><img src={echo} alt="echo"/></div>
                    <div>Top 50 customers will get Amazon Echo Dot</div>
                    </div>
                    <div className='homepage-offers-photo'>
                    <div ><img src={fire} alt="fire stick"/></div>
                    <div>Next 50 customers will get Amazon Firestick</div>
                    </div>
                    <div className='homepage-offers-photo'>
                    <div><img src={gift} alt="gifts"/></div>
                    <div>And much more to win</div>
                    </div>
                </div>
                </div>
                <div className='homepage-signup-bottom'>
                <div className='homepage-signup' style={{marginTop:'20vh'}}>
                    <div className='homepage-signup-left'>
                        <div style={{fontSize:"25px"}}>Start Up Now And Get Free Consultation<br/> To Start Your AWS Journey With Us.</div>
                        <div>CONTACT US</div>
                    </div>
                </div>
                </div>
                <div className='homepage-footers'>
                    <div className='homepage-footers-1'>
                    <div className='homepage-footer'>
                        <div>Services</div>
                        <div>S.M.A.R.T Framework</div>
                        <div>Cloud Computing</div>
                        <div>Cloud Migration</div>
                        <div>Management Services</div>
                    </div>
                    <div className='homepage-footer'>
                    <div>Services</div>
                        <div>S.M.A.R.T Framework</div>
                        <div>Cloud Computing</div>
                        <div>Cloud Migration</div>
                        <div>Management Services</div>
                    </div>
                    <div className='homepage-footer'>
                    <div>Services</div>
                        <div>S.M.A.R.T Framework</div>
                        <div>Cloud Computing</div>
                        <div>Cloud Migration</div>
                        <div>Management Services</div>
                    </div>
                    <div className='homepage-footer'>
                    <div>Services</div>
                        <div>S.M.A.R.T Framework</div>
                        <div>Cloud Computing</div>
                        <div>Cloud Migration</div>
                        <div>Management Services</div>
                    </div>
                    <div className='homepage-footer'>
                        <div>Redington</div>
                        <div>Reach Us</div>
                        <div>+91 99999999999</div>
                        <div>email@address.com</div>
                        <div style={{fontWeight:'600'}}>Follow Us On</div>
                        <div className='homepage-footer-icons'>
                            <AiFillLinkedin color='grey'/>
                            <AiOutlineTwitter color='grey'/>
                            <AiFillFacebook color='grey'/>
                        </div>
                    </div>
                    </div>
                    <div className='homepage-footers-2'>
                        <div>Privacy Policy | Terms and Conditions</div>
                        <div style={{color:'grey'}}>C Redington 2019, All Rights Reserved</div>
                    </div>
                </div>
        </>
    )

}

export default Homepage