import React from 'react';
import  './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className='wrapper'>
          <div className='footer'>
            <div className='f-left'>
              <h1>Exclusive</h1>
              <h3>Subscribe</h3>
              <p>Get 10% off your first order</p>
              <div className='input-container'>
                <input type="email" name="email" className="mail" placeholder="Enter your email"/>
                <img src='/assets/icon-send.png' alt='send-icon' />
              </div>
            </div>

            <div className='f-right'>
              <div className='item'>
                <h3>Support</h3>
                <ul>
                  <li><a href='#'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</a></li>
                  <li><a href='#'>exclusive@gmail.com</a></li>
                  <li><a href='#'>+88015-88888-9999</a></li>
                </ul>
              </div>

              <div className='item'>
                <h3>Account</h3>
                <ul>
                  <li><a href='#'>My Account</a></li>
                  <li><a href='#'>Login / Register</a></li>
                  <li><a href='#'>Cart</a></li>
                  <li><a href='#'>Wishlist</a></li>
                  <li><a href='#'>Shop</a></li>
                </ul>
              </div>

              <div className='item'>
                <h3>Quick Link</h3>
                <ul>
                  <li><a href='#'>Privacy Policy</a></li>
                  <li><a href='#'>Terms Of Use</a></li>
                  <li><a href='#'>FAQ</a></li>
                  <li><a href='#'>Contact</a></li>
                </ul>
              </div>

              <div className='item'>
                <h3>Download App</h3>
                <ul>
                  <li><p>Save $3 with App New User Only</p></li>
                  <li className='QRC'>
                    <img src='/assets/Qr Code.png' alt='QR-Code' />
                    <span>
                      <img src='/assets/GooglePlay.png' alt='googleplay' />
                      <img src='/assets/AppStore.png' alt='appstore' />
                    </span>
                  </li>
                  <li className='logos'>
                    <a href='#'><img src='/assets/Icon-Facebook.png' alt='facebook' /></a>
                    <a href='#'><img src='/assets/Icon-Twitter.png' alt='twitter' /></a>
                    <a href='#'><img src='/assets/icon-instagram.png' alt='instagram' /></a>
                    <a href='#'><img src='/assets/Icon-Linkedin.png' alt='linkedIn' /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <span className='copyright'>&copy; Copyright Rimel 2022. All right reserved</span>
      </footer>
    </>
  )
}

export default Footer
