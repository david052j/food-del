import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt praesentium deserunt et facere exercitationem sed fuga quis hic? Assumenda minus quaerat natus excepturi. Sunt ea earum voluptatem voluptatum illo reiciendis?Sunt praesentium deserunt et facere exercitationem sed fuga quis hic? Assumenda minus quaerat natus excepturi.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254-703-496-743</li>
            <li>woozah@pwanidishes.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 @pwanidishes.com - All Rights Reserved.</p>

    </div>
  )
}

export default Footer