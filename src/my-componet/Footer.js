/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
             <div class="container">
                        <div class="newsletter-wrap">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6">
                                    <div class="newsletter-title style1">
                                        <h2>Subscribe Our Newsletter</h2>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <form action="#" class="newsletter-form">
                                        <input type="email" placeholder="Enter Your Email Address" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footer class="footer-wrap bg-mine-shaft">
                        <div class="container">
                            <div class="row pt-100 pb-75">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                                    <div class="footer-widget">
                                        <Link to="index.html" class="footer-logo">
                                            <img src="./theme/assets/img/logo-white.png" alt="Image" />
                                        </Link>
                                        <p class="comp-desc">
                                            Lorem ipsum dolor sit amet consec tetur adisoom isotope elit eiusmod temporum incidunt
                                            labore dolore magna aliqu core tetur adip iscing eliteous sedun amet adisoom isotope.
                                        </p>
                                        <div class="social-link">
                                            <h6>Follow Us:</h6>
                                            <ul class="social-profile list-style style3">
                                                <li>
                                                    <Link target="_blank" to="https://facebook.com/" rel="noreferrer">
                                                        <i class="ri-facebook-fill"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" to="https://twitter.com/" rel="noreferrer">
                                                        <i class="ri-twitter-fill"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" to="https://linkedin.com/" rel="noreferrer">
                                                        <i class="ri-linkedin-fill"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" to="https://instagram.com/" rel="noreferrer">
                                                        <i class="ri-pinterest-fill"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-2 col-md-6 col-sm-6">
                                    <div class="footer-widget">
                                        <h3 class="footer-widget-title">Information</h3>
                                        <ul class="footer-menu list-style">
                                            <li>
                                                <Link to="about.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="shop-left-sidebar.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Our Shop
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="contact.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="refund-policy.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Refund Policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="privacy-policy.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 ps-xl-4">
                                    <div class="footer-widget">
                                        <h3 class="footer-widget-title">Account</h3>
                                        <ul class="footer-menu list-style">
                                            <li>
                                                <Link to="my-account.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    My Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="my-account.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    My Orders
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="my-account.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Returns
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="my-account.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Wishlist
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="my-account.html" target="_blank">
                                                    <i class="ri-arrow-right-s-line"></i>
                                                    Shipping
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div class="footer-widget">
                                        <h3 class="footer-widget-title">Get In Touch</h3>
                                        <ul class="contact-info list-style">
                                            <li>
                                                <i class="flaticon-pin"></i>
                                                <h6>Location</h6>
                                                <p>2967 Sunrise Street, New York</p>
                                            </li>
                                            <li>
                                                <i class="flaticon-email-1"></i>
                                                <h6>Email</h6>
                                                <Link
                                                    to="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#ea828f868685aa8fa18587c4898587"><span
                                                        class="__cf_email__"
                                                        data-cfemail="462e232a2a2906230d292b6825292b">[email&#160;protected]</span></Link>
                                            </li>
                                            <li>
                                                <i class="flaticon-call"></i>
                                                <h6>Phone</h6>
                                                <Link to="tel:13454567877">+1-3454-5678-77</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="copyright-text">
                            <i class="ri-copyright-line"></i>
                            <script data-cfasync="false"
                                src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                            <script>document.write(new Date().getFullYear())</script> <span>SV</span>. Created By <Link
                                to="https://hibootstrap.com/" target="_blank" rel="noreferrer">Viraj Sondagar</Link>
                        </p>
                    </footer>
                    <Outlet/>
      </>
    )
  }
}
