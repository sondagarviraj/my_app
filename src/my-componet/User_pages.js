import React, { Component } from 'react'
import Navbar from './navbar'

export default class User_pages extends Component {
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

                        <div class="breadcrumb-wrap bg-f br-2">
                            <div class="overlay op-8 bg-black"></div>
                            <div class="container">
                                <div class="breadcrumb-title">
                                    <h2>Register</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <section class="Login-wrap pt-100 pb-75">
                            <div class="container">
                                <div class="row gx-5">
                                    <div class="col-lg-6 offset-lg-3">
                                        <div class="login-form-wrap">
                                            <div class="login-header">
                                                <h3>Create New Account</h3>
                                            </div>
                                            <div class="login-form">
                                                <div class="login-body">
                                                    <form class="form-wrap" action="#">
                                                        <div class="row">
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input id="text" name="fname" type="text" required
                                                                        placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input id="email" name="email" type="email" required
                                                                        placeholder="Email" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input id="pwd" name="pwd" type="password" required
                                                                        placeholder="Password" />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <input id="pwd_2" name="pwd_2" type="password" required
                                                                        placeholder="Confirm Password" />
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-12 col-12 mb-20">
                                                                <div class="checkbox style2">
                                                                    <input type="checkbox" id="test_1" />
                                                                    <label for="test_1">
                                                                        I Agree with the <a class="link style1"
                                                                            href="terms-of-service.html">Terms &amp; conditions</a>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <button class="btn style1">
                                                                        Registre Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 text-center">
                                                                <p class="mb-0">Have an Account? <a class="link style1"
                                                                    href="login.html">Sign In</a></p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                    <footer/>

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
