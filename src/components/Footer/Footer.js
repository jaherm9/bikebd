import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faDribbble } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer-dark mt-5">
      <footer>
      
        <div class="container">
          <div class="row">
          <div>
              <div>
                <img src="/src/Image/logo.png" alt="" />
              </div>
              <p>
                BikeValley.com is the first and largest website about motor bike
                in Bangladesh. We have started our journey since 25th January
                2012. We have experienced and hard working team and our prime
                goal is to provide motorcycle related necessary information to
                the visitors in easy way
              </p>
            </div>
            <div class="col-sm-6 col-md-3 item">
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
            <div class="col-sm-6 col-md-3 item">
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
            <div class="col-sm-6 col-md-3 item">
              <h3>Stay Connected</h3>
              <ul>
                <li>
                  <NavLink to="/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></NavLink>
                </li>
                <li>
                  <NavLink to="/products"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></NavLink>
                </li>
                <li>
                  <NavLink to="/order"><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></NavLink>
                </li>
                <li>
                  <NavLink to="/contact"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></NavLink>
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
