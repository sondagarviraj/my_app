import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Login extends Component {
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
                                    <h2>Login</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Login</li>
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
                                                <h3>Login To Your Account</h3>
                                            </div>
                                            <div class="login-form">
                                                <div class="login-body">
                                                    <form class="form-wrap" action="#">
                                                        <div class="row">
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
                                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                                <div class="checkbox">
                                                                    <input type="checkbox" id="test_1" />
                                                                    <label for="test_1">Remember Me</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-end mb-20">
                                                                <a href="recover-password.html" class="link style1">Forgot
                                                                    Password?</a>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="form-group">
                                                                    <button class="btn style2">
                                                                        Login
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div class="or-text">
                                                                    <p>Or</p>
                                                                    <a href="login.html" class="btn style1 fb mb-15"><i
                                                                        class="ri-facebook-fill"></i> Login With Facebook</a>
                                                                    <a href="login.html" class="btn style1 google"><i
                                                                        class="ri-google-fill"></i> Login With Google</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 text-center">
                                                                <p class="mb-0">Don't Have an Account? <a class="link style1"
                                                                    href="register.html">Create One</a></p>
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
