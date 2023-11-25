import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                {/*         
        <div class="loader js-preloader">
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
                                    <h2>Testimonials</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Testimonials</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <section class="testimonial-wrap pt-100 pb-75">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">Full Enjoyable!</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-4.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Harry Jackson</h4>
                                                    <span>Enterpreneur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">In Love With This!</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-5.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Chris Haris</h4>
                                                    <span>MD, ITec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">Can't Stop Listening!</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-6.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Anthony Mascar</h4>
                                                    <span>Enterpreneur</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">Everything Available!</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-1.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Jim Morison</h4>
                                                    <span>Director, BAT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">Looking Good!</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-2.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Alex Cruis</h4>
                                                    <span>CEO, IBAC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-6 col-md-6">
                                        <div class="testimonial-card style1">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                            </ul>
                                            <h3 class="promo-text">Awesome Features</h3>
                                            <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur
                                                delni vel quam aliqous earadi umiotion sit explibom dolor eme.</p>
                                            <div class="client-info-wrap">
                                                <div class="client-img">
                                                    <img src="./theme/assets/img/testimonials/client-3.jpg" alt="Image" />
                                                </div>
                                                <div class="client-info">
                                                    <h4>Tom Haris</h4>
                                                    <span>Engineer, Olleo</span>
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
