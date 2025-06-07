
import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookSquare,  FaTwitter, FaYoutube  } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {

   const [isResponse, setIsResponse] = useState(false);

  return (
    <div className='footer'>
        <div className='footer-sec'>
            <div className='first-footer-sec'>
                <div className='footer-title'>
                    Online shopping
                </div>
                <div>
                  <a href='/'><p>Women</p></a>
                  <a href='/'><p>Men</p></a>
                  <a href='/'><p>Kids</p></a>
                  <a href='/'><p>Home & Living</p></a>
                  <a href='/'><p>Beauty</p></a>
                </div>
            </div>
            <div className='sec-footer-sec'>
                <div className='footer-title'>
                    Customer policies
                </div>
                <div>
                  <a href='/'><p>Contact Us</p></a>
                  <a href='/'><p>FAQ</p></a>
                  <a href='/'><p>T&C</p></a>
                  <a href='/'><p>Terms Of Use</p></a>
                  <a href='/'><p>Track Orders</p></a>
                  <a href='/'><p>Shipping</p></a>
                  <a href='/'><p>Cancellation</p></a>
                  <a href='/'><p>Return</p></a>
                  <a href='/'><p>Privacy Policy</p></a>
                </div>
            </div>
            <div className='third-footer-sec'>
              <div className='third-footer-sec'>
                <div className='footer-title'>
                    Experience mobile app
                </div>
                <div className='app-btn'>
                    <button>
                      <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/103-GooglePlay_play_google_play_apps-512.png' alt=' ' />
                          <div className='app-btn-content'>
                            <p>GET IT ON</p>
                            <h5>Google Play</h5>
                          </div>
                    </button>
                    <button>
                      <img src='https://www.romantelecom.nl/wp-content/uploads/2017/11/apple-logo.png' alt='' />
                          <div className='app-btn-content'>
                            <p>Download on the</p>
                            <h5>App Store</h5>
                          </div>
                    </button>
                </div>
              </div>
              <div className='social'>
                <div className='footer-title'>
                    keep in touch
                </div>
                <div className='social-media-btn'>
                    <a href='/'><FaFacebookSquare className='social-media-icons'/></a>
                    <a href='/'><FaTwitter className='social-media-icons' /></a>
                    <a href='/'><FaYoutube className='social-media-icons' /></a>
                    <a href='/'><TiSocialInstagram className='social-media-icons' /></a>
                </div>
              </div>

              {!isResponse && <div className='responsive-footer'>
                <div>
                  <img src='original.png' alt='' className='R-policy-imgs' />
                  <p><span>100% ORIGINAL</span> guarantee for all products.</p>
                </div>
                <div>
                  <img src='https://www.flowsparks.com/wp-content/uploads/2022/07/rt-icons-06.png' alt=''className='R-policy-imgs' />
                  <p><span>Return within 30days</span> of receibing your order</p>
                </div>
            </div>}

            </div>
            <div className='normal-foot fourth-footer-sec'>
                <div>
                  <img src='original.png' alt='' className='policy-imgs' />
                  <p><span>100% ORIGINAL</span> guarantee for all products.</p>
                </div>
                <div>
                  <img src='https://www.flowsparks.com/wp-content/uploads/2022/07/rt-icons-06.png' alt=''className='policy-imgs' />
                  <p><span>Return within 30days</span> of receibing your order</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
