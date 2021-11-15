import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer-dark mt-3">
      <footer>
      
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-4 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/order">Order Now</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact US</NavLink>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-4 item">
              <h3>About</h3>
              <ul>
                <li>
                  <NavLink to="/home">Buy Now</NavLink>
                </li>
                <li>
                  <NavLink to="/products">News</NavLink>
                </li>
                <li>
                  <NavLink to="/order">Career</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Bike Financing</NavLink>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-4 item">
              <h3>Stay Connected</h3>
              <ul>
                <li>
                  <NavLink to="/"><FontAwesomeIcon icon={faFacebook} size = '2x'></FontAwesomeIcon></NavLink>
                </li>
                <li>
                  <NavLink to="/products"><FontAwesomeIcon icon={faTwitter} size = '2x'></FontAwesomeIcon></NavLink>
                </li>
                <li>
                  <NavLink to="/order"><FontAwesomeIcon icon={faDribbble} size = '2x'></FontAwesomeIcon></NavLink>
                </li>
               
              </ul>
            </div>            
          </div>
          <p class="copyright">Bike Valley © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
