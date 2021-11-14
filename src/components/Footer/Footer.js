import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer-dark mt-5">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/products">Products</NavLink></li>
                            <li><NavLink to="/order">Order Now</NavLink></li>
                            <li><NavLink to="/contact">Contact US</NavLink></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink to="/home">Buy Now</NavLink></li>
                            <li><NavLink to="/products">News</NavLink></li>
                            <li><NavLink to="/order">Career</NavLink></li>
                            <li><NavLink to="/contact">Bike Financing</NavLink></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <div><img src="/src/Image/logo.png" alt=""/></div>
                        <p>BikeValley.com is the first and largest website about motor bike in Bangladesh. We have started our journey since 25th January 2012. We have experienced and hard working team and our prime goal is to provide motorcycle related necessary information to the visitors in easy way</p>
                    </div>
                    <div class="col item social"><i class="icon ion-social-facebook"></i><i class="icon ion-social-twitter"></i><i class="icon ion-social-snapchat"></i><i class="icon ion-social-instagram"></i></div>
                </div>
                <p class="copyright">Bike Valley © 2021</p>
            </div>
        </footer>
    </div>
    );
};

export default Footer;