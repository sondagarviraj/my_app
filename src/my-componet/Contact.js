import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Contact extends Component {
    render() {
        return (
            <div>

                {/* <div class="loader js-preloader">
        <div></div>
        <div></div>
        <div></div>
    </div> */}


                <div class="switch-theme-mode">
                    <label id="switch" class="switch">
                        <input type="checkbox" onchange="toggleTheme()" id="slider" />
                        <span class="slider round"></span>
                    </label>
                </div>

                <div class="page-wrapper">

                 <Navbar/>


                    <div class="content-wrapper">

                        <div class="breadcrumb-wrap bg-f br-1">
                            <div class="overlay op-8 bg-black"></div>
                            <div class="container">
                                <div class="breadcrumb-title">
                                    <h2>Contact Us</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <section class="contact-us-wrap pt-100">
                            <div class="container">
                                <div class="section-title text-center style1 mb-40">
                                    <span>SEND MESSAGE</span>
                                    <h2>We Are Here To Help You</h2>
                                </div>
                                <div class="row justify-content-center contact-box-wrap mb-0">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-item">
                                            <span class="contact-icon">
                                                <i class="flaticon-pin"></i>
                                            </span>
                                            <div class="contact-info">
                                                <h3>Our Location</h3>
                                                <p>2767 Sunrise Street, 10th Avenue, New York, USA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-item">
                                            <span class="contact-icon">
                                                <i class="flaticon-email"></i>
                                            </span>
                                            <div class="contact-info">
                                                <h3>Email Us</h3>
                                                <a
                                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#b1d9d4dddddef1d4dadedc9fd2dedc"><span
                                                        class="__cf_email__"
                                                        data-cfemail="5f373a3333301f3a343032713c3032">[email&#160;protected]</span></a>
                                                <a
                                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#c8bbbdb8b8a7babc88ada3a7a5e6aba7a5"><span
                                                        class="__cf_email__"
                                                        data-cfemail="d0a3a5a0a0bfa2a490b5bbbfbdfeb3bfbd">[email&#160;protected]</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="contact-item">
                                            <span class="contact-icon">
                                                <i class="flaticon-call"></i>
                                            </span>
                                            <div class="contact-info">
                                                <h3>Call us</h3>
                                                <a href="tel:88098787868">+44 587 154765</a>
                                                <a href="tel:88098787869">+55 576 234532</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row  pb-100 align-items-end">
                                    <div class="col-xl-4 col-lg-5">
                                        <div class="comp-map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
                                        </div>
                                    </div>
                                    <div class="col-xl-8 col-lg-7">
                                        <div class="contact-form">
                                            <form class="form-wrap" id="contactForm">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="name" placeholder="Your Full Name*" id="name"
                                                                required data-error="Please enter your name" />
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="email" name="email" id="email" required
                                                                placeholder="Email Address*" data-error="Please enter your email" />
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="phone_number" placeholder="Phone Number"
                                                                id="phone_number" required
                                                                data-error="Please enter your phone number" />
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="msg_subject" placeholder="Subject"
                                                                id="msg_subject" required data-error="Please enter your subject" />
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group v1">
                                                            <textarea name="message" id="message" placeholder="Your Messages.."
                                                                cols="30" rows="10" required
                                                                data-error="Please enter your message"></textarea>
                                                            <div class="help-block with-errors"></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <button type="submit" class="btn style1">Send Message</button>
                                                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                


                    <Footer/>

                </div>

                <div class="modal fade" id="modal-subscribe" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header border-0">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="ri-close-line"></i>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row align-items-center gx-5">
                                    <div class="col-sm-6 col-lg-6">
                                        <div class="subscribe-bg bg-f">
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-6">
                                        <div class="subscribe-content">
                                            <h2>Subscribe Newsletter</h2>
                                            <p>Subscribe our newsletter to get our updated news</p>
                                            <form class="newsletter-form" data-toggle="validator">
                                                <input type="email" class="form-control" placeholder="Enter Your Email" name="EMAIL"
                                                    required autocomplete="off" />
                                                <button class="btn style1" type="submit">
                                                    Subscribe
                                                </button>
                                                <div class="inner-check mt-30">
                                                    <div class="checkbox style2">
                                                        <input type="checkbox" id="test_3" />
                                                        <label for="test_3">Dont' show this popup again.</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
