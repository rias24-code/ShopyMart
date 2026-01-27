import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
<footer className='footer'>
  <div className="footer-top">
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>Email: suppot@shopymart.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
    <div className="footer-social">
      <h4>Follow</h4>
      <div className="social-icons">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter /> 
        <FaWhatsapp />
      </div>
    </div>
    </div>
    <hr />
    <div className="footer-payments">
      <img src="/images/visa.png" alt="Visa" />
      <img src="/images/mastercard.png" alt="Master Card" />
      <img src="/images/UPI.png" alt="UPI" />
      <img src="/images/gpay.png" alt="Google Pay" />
    </div>
    <hr />
    <p className='footer-copy'>
      @2026 SHOPYMART. All rights reserved
    </p>
</footer>
  )
}

export default Footer;