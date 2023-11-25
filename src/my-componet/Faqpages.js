import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Faqpages extends Component {
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
                                    <h2>Frequently Asked Questions</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>FAQ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="faq-wrap style1 ptb-100">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 offset-lg-2">
                                        <div class="faq-content">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                            <span>
                                                                <i class="flaticon-plus-positive-add-mathematical-symbol plus"></i>
                                                                <i class="flaticon-minus-sign minus"></i>
                                                            </span>
                                                            Do You Offer A Discount For Couple Watch?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="single-product-text">
                                                                <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.
                                                                    Quisquam sit laborum est aliquam. Dicta fuga soluta eius
                                                                    exercitationem porro modi. Exercitationem eveniet aliquam
                                                                    repudiandae non, sequi mollitia at iusto</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            <span>
                                                                <i class="flaticon-plus-positive-add-mathematical-symbol plus"></i>
                                                                <i class="flaticon-minus-sign minus"></i>
                                                            </span>
                                                            What Offer Does ekom Provide?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse "
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Quisquam
                                                                sit laborum est aliquam. Dicta fuga soluta eius exercitationem porro
                                                                modi. Exercitationem eveniet aliquam repudiandae non, sequi mollitia
                                                                at iusto</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            <span>
                                                                <i class="flaticon-plus-positive-add-mathematical-symbol plus"></i>
                                                                <i class="flaticon-minus-sign minus"></i>
                                                            </span>
                                                            What Is The Refund Policy
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Quisquam
                                                                sit laborum est aliquam. Dicta fuga soluta eius exercitationem porro
                                                                modi. Exercitationem eveniet aliquam repudiandae non, sequi mollitia
                                                                at iusto</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingfour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                                            aria-expanded="true" aria-controls="collapsefour">
                                                            <span>
                                                                <i class="flaticon-plus-positive-add-mathematical-symbol plus"></i>
                                                                <i class="flaticon-minus-sign minus"></i>
                                                            </span>
                                                            How To Find The Trendy Collection From This Winter?
                                                        </button>
                                                    </h2>
                                                    <div id="collapsefour" class="accordion-collapse collapse "
                                                        aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <div class="single-product-text">
                                                                <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.
                                                                    Quisquam sit laborum est aliquam. Dicta fuga soluta eius
                                                                    exercitationem porro modi. Exercitationem eveniet aliquam
                                                                    repudiandae non, sequi mollitia at iusto</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
