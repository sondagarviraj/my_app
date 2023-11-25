/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Home extends Component {
    render() {
        return (
            <>

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

                    <Navbar />


                    <section class="hero-wrap style1">
                        <div class="hero-slider-one">
                            <div class="hero-slide-item">
                                <div class="container-fluid">
                                    <span class="hero-promotext">HEADPHONES</span>
                                    <div class="row align-items-center">
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="hero-content">
                                                <span data-aos="" data-aos-duration="1200" data-aos-delay="100">PXC 550
                                                    WIRELESS</span>
                                                <h1 data-aos="" data-aos-duration="1200" data-aos-delay="300">Superior
                                                    Sound With Tengible Quality</h1>
                                                <p data-aos="" data-aos-duration="1200" data-aos-delay="500">Lorem ipsum
                                                    dolor sit amet consectetur adipisicing elit. Cum verit atis assum enda maiores
                                                    eos ducimus ullam accusamus vitae beatae quas in.</p>
                                                <a href="shop-left-sidebar.html" class="btn style1" data-aos=""
                                                    data-aos-duration="1200" data-aos-delay="700"> Shop Now</a>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6">
                                            <div class="hero-img-wrap" data-speed="0.10" data-revert="true">
                                                <img src="./theme/assets/img/hero/hero-slider-1.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div class="feature-wrap pt-100 pb-75">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="100">
                                    <div class="feature-card style1">
                                        <span class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-volume"></i>
                                        </span>
                                        <div class="feature-text">
                                            <h3>Clear Sound Performance</h3>
                                            <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                                sit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div class="feature-card style1">
                                        <span class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-touch-screen"></i>
                                        </span>
                                        <div class="feature-text">
                                            <h3>Touch Sensitive Trackpad</h3>
                                            <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                                sit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="300">
                                    <div class="feature-card style1">
                                        <span class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-headphones"></i>
                                        </span>
                                        <div class="feature-text">
                                            <h3>Comfortable To Wear</h3>
                                            <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend
                                                sit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section class="about-wrap style1 pb-100">
                        <span class="section-text">ABOUT US</span>
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
                                    <div class="about-img-wrap" data-aos="" data-aos-duration="1200" data-aos-delay="200">
                                        <img src="./theme/assets/img/about/about-img-5.png" alt="Image" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
                                    <div class="about-content" data-aos="" data-aos-duration="1200" data-aos-delay="200">
                                        <div class="content-title style1">
                                            <span>ABOUT US</span>
                                            <h2>Weve Best Quality Products With Best Colections</h2>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuse antium lorem
                                                sit totam rem aperiam, eaque ipsa quae ab illution inventore veritatis quasi archi.
                                            </p>
                                        </div>
                                        <div class="feature-item-wrap style1">
                                            <div class="feature-item">
                                                <div class="feature-icon">
                                                    <i class="flaticon-audio-waves"></i>
                                                </div>
                                                <div class="feature-text">
                                                    <h3>Enjoy Your Own Audio Language</h3>
                                                    <p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui
                                                        praesent sapien pellen tesque .</p>
                                                </div>
                                            </div>
                                            <div class="feature-item">
                                                <div class="feature-icon">
                                                    <i class="flaticon-volume-1"></i>
                                                </div>
                                                <div class="feature-text">
                                                    <h3>Feel The Shape Of Comfort</h3>
                                                    <p>Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui
                                                        praesent sapien pellen tesque.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="about.html" class="btn style1">More About Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>







                    <section class="product-wrap bg-athens pt-100 pb-75">
                        <div class="container">
                            <div class="section-title style1 text-center mb-40">
                                <span>HOT COLLECTION</span>
                                <h2>Browse Our Top Products</h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <img src="./theme/assets/img/products/product-1.png" alt="image" />
                                            <span class="promo-text">Sale</span>
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><a href="cart.html"><i class="ri-shopping-cart-2-line"></i></a></li>
                                                <li><a href="wishlist.html"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">Over-ear Headphones</a></h3>
                                            <p class="product-price">$28.00 <span class="discount">$50.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <img src="./theme/assets/img/products/product-2.png" alt="image" />
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><button type="button" data-bs-toggle="model" data-bs-target="#product-model"><i class="ri-shopping-cart-2-line"></i></button></li>
                                                <li><a href="/Wishlist"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">Wireless Headphones</a></h3>
                                            <p class="product-price">$38.00 <span class="discount">$40.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <span class="promo-text">30% off</span>
                                            <img src="./theme/assets/img/products/product-3.png" alt="image" />
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><a href="cart.html"><i class="ri-shopping-cart-2-line"></i></a></li>
                                                <li><a href="wishlist.html"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">In-ear Headphones</a></h3>
                                            <p class="product-price">$48.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <span class="promo-text">30% off</span>
                                            <img src="./theme/assets/img/products/product-4.png" alt="image" />
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><a href="cart.html"><i class="ri-shopping-cart-2-line"></i></a></li>
                                                <li><a href="wishlist.html"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">JBL Headphones</a></h3>
                                            <p class="product-price">$58.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <span class="promo-text">30% off</span>
                                            <img src="./theme/assets/img/products/product-5.png" alt="image" />
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><a href="cart.html"><i class="ri-shopping-cart-2-line"></i></a></li>
                                                <li><a href="wishlist.html"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">Vivo YH-10</a></h3>
                                            <p class="product-price">$48.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="product-card style1">
                                        <div class="product-img bg-athens">
                                            <span class="promo-text">30% off</span>
                                            <img src="./theme/assets/img/products/product-3.png" alt="image" />
                                            <ul class="product-option list-style">
                                                <li><button type="button" data-bs-toggle="modal" data-bs-target="#product-modal"><i
                                                    class="ri-eye-line"></i></button></li>
                                                <li><a href="cart.html"><i class="ri-shopping-cart-2-line"></i></a></li>
                                                <li><a href="wishlist.html"><i class="ri-heart-line"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product-info">
                                            <ul class="ratings list-style">
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                                <li><i class="flaticon-star-2"></i></li>
                                            </ul>
                                            <h3><a href="shop-details.html">Sunshine XLX</a></h3>
                                            <p class="product-price">$58.00 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="testimonial-wrap pt-100 pb-75">
                        <div class="container">
                            <div class="section-title style1 text-center mb-40">
                                <span>TESTIMONIALS</span>
                                <h2>What People Say About Us</h2>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">Full Enjoyable!</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">In Love With This!</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">Can't Stop Listening!</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">Everything Available!</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">Looking Good!</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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
                                <div class="col-lg-4 col-md-6">
                                    <div class="testimonial-card style1">
                                        <ul class="ratings list-style">
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                            <li><i class="flaticon-star"></i></li>
                                        </ul>
                                        <h3 class="promo-text">Awesome Features</h3>
                                        <p class="client-quote">Lorem ipsum dolor sit amet adip elitionus repellus ata tetur delni vel
                                            quam aliqous earadi umiotion sit explibom dolor eme.</p>
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



                    <section class="promo-wrap  pb-75">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="100">
                                    <div class="feature-card style3">
                                        <div class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-delivery"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h3>Free Shipping</h3>
                                            <p>There are many variations of lorem Ipsum available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div class="feature-card style3">
                                        <div class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-24-hour-clock"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h3>Support 24/7</h3>
                                            <p>There are many variations of lorem Ipsum available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="300">
                                    <div class="feature-card style3">
                                        <div class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-return"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h3>7 Days Return</h3>
                                            <p>There are many variations of lorem Ipsum available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="400">
                                    <div class="feature-card style3">
                                        <div class="feature-icon">
                                            <img src="./theme/assets/img/shape/feature-shape.png" alt="Image" />
                                            <i class="flaticon-credit-card"></i>
                                        </div>
                                        <div class="feature-text">
                                            <h3>Secured Payment</h3>
                                            <p>There are many variations of lorem Ipsum available.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="offer-wrap style1 bg-albastor ptb-100">
                        <span class="offer-promo-text">OFFER</span>
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-lg-6">
                                    <div class="offer-content">
                                        <div class="content-title style1 mb-25">
                                            <span>SPECIAL OFFER</span>
                                            <h2>Discount 50% On All Wireless Model Product</h2>
                                        </div>
                                        <a href="shop-left-sidebar.html" class="btn style1">Shop Now</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="offer-img-wrap" data-aos="" data-aos-duration="1200" data-aos-delay="400">
                                        <img src="./theme/assets/img/offer-img-1.png" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="product-feature-wrap ptb-100 td-aztech">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                    <div class="section-title style1 text-center mb-40">
                                        <span>SPECIFICATION</span>
                                        <h2>Product Specification</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-xl-4">
                                    <div class="feature-item-wrap style4">
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-wifi"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Wireless</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-headphone"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Perfect Sound Quality</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-microphone"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Awsome Microphone</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="featured-product-img bg-athens">
                                        <img src="./theme/assets/img/products/single-product-1.png" alt="Image" />
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="feature-item-wrap style4">
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-sound"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Noise Cancelling</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-bluetooth"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Bluetooth</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                        <div class="feature-item">
                                            <div class="feature-icon">
                                                <i class="flaticon-sound-control"></i>
                                            </div>
                                            <div class="feature-text">
                                                <h3>Easy To Control</h3>
                                                <p>Nisl suscipit adipiscing bibendum est tempus imperdiet nulla malesuada.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section class="blog-wrap  pb-75 dpt-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                    <div class="section-title style1 text-center mb-40">
                                        <span>LATEST NEWS</span>
                                        <h2>Reading Our Blog Content</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="100">
                                    <div class="blog-card style1">
                                        <div class="blog-img">
                                            <img src="./theme/assets/img/blog/blog-1.jpg" alt="Image" />
                                        </div>
                                        <div class="blog-info">
                                            <ul class="blog-metainfo  list-style">
                                                <li><i class="flaticon-user"></i><a href="posts-by-author.html">Admin</a></li>
                                                <li><i class="flaticon-bubble-chat"></i>No Comment</li>
                                                <li><i class="flaticon-calendar"></i><a href="posts-by-date.html">01 Nov, 2021</a>
                                                </li>
                                            </ul>
                                            <h3><a href="blog-details-right-sidebar.html">Augmented Headphones</a></h3>
                                            <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                            <a href="blog-details-right-sidebar.html" class="link style1">Read More
                                                <i class="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div class="blog-card style1">
                                        <div class="blog-img">
                                            <img src="./theme/assets/img/blog/blog-2.jpg" alt="Image" />
                                        </div>
                                        <div class="blog-info">
                                            <ul class="blog-metainfo  list-style">
                                                <li><i class="flaticon-user"></i><a href="posts-by-author.html">Admin</a></li>
                                                <li><i class="flaticon-bubble-chat"></i>No Comment</li>
                                                <li><i class="flaticon-calendar"></i><a href="posts-by-date.html">22 Oct, 2021</a>
                                                </li>
                                            </ul>
                                            <h3><a href="blog-details-right-sidebar.html">Authentic, Engaging Sound</a></h3>
                                            <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                            <a href="blog-details-right-sidebar.html" class="link style1">Read More
                                                <i class="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-md-6" data-aos="" data-aos-duration="1200"
                                    data-aos-delay="300">
                                    <div class="blog-card style1">
                                        <div class="blog-img">
                                            <img src="./theme/assets/img/blog/blog-3.jpg" alt="Image" />
                                        </div>
                                        <div class="blog-info">
                                            <ul class="blog-metainfo  list-style">
                                                <li><i class="flaticon-user"></i><a href="posts-by-author.html">Admin</a></li>
                                                <li><i class="flaticon-bubble-chat"></i>No Comment</li>
                                                <li><i class="flaticon-calendar"></i><a href="posts-by-date.html">12 Sep, 2021</a>
                                                </li>
                                            </ul>
                                            <h3><a href="blog-details-right-sidebar.html">User Ratings Confirmation</a></h3>
                                            <p>White in eu mi bibendum neque egestas set cong tincidunt nunc pulvinar sapien</p>
                                            <a href="blog-details-right-sidebar.html" class="link style1">Read More
                                                <i class="flaticon-right-arrow"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <Footer />

                </div>

                <div class="modal fade" id="product-modal" tabindex="-1" role="dialog" aria-labelledby="product-modal"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header border-0">
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="ri-close-line"></i>
                                </button>
                            </div>
                            <div class="product-details-wrap">
                                <div class="container">
                                    <div class="row gx-5 ">
                                        <div class="col-xl-7 col-lg-7">
                                            <div class="single-product-gallery">
                                                <div class="swiper-container single-product-thumbs">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide single-product-thumb bg-albastor">
                                                            <img src="./theme/assets/img/products/product-1.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-thumb bg-albastor">
                                                            <img src="./theme/assets/img/products/product-2.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-thumb bg-albastor">
                                                            <img src="./theme/assets/aimg/products/product-3.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-thumb bg-albastor">
                                                            <img src="./theme/assets/img/products/product-4.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-container single-product-slider">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets//img/products/product-1.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets//img/products/product-2.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets/img/products/product-3.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets/img/products/product-4.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                    <div class="swiper-button-next"> <i class="flaticon-right-arrow"></i></div>
                                                    <div class="swiper-button-prev"><i class="flaticon-left-arrow-1"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-5 col-lg-5">
                                            <div class="single-product-details">
                                                <div class="single-product-title">
                                                    <h2>Over-Ear Headphone</h2>
                                                    <h3><span>$120</span> <span class="discount">$200</span></h3>
                                                    <div class="ratings">
                                                        <ul class="list-style">
                                                            <li><i class="ri-star-fill"></i></li>
                                                            <li><i class="ri-star-fill"></i></li>
                                                            <li><i class="ri-star-fill"></i></li>
                                                            <li><i class="ri-star-fill"></i></li>
                                                            <li><i class="ri-star-fill"></i></li>
                                                        </ul>
                                                        <span>(12 rating)</span>
                                                    </div>
                                                </div>
                                                <p class="single-product-desc">
                                                    Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ipsum non facilis
                                                    corporis modi consequatur. Iure perferendis dicta illum deleniti veritatis vero
                                                    tempora maxime ducimus quaerat, iusto omnis magni doloribus. Repellat
                                                    exercitationem odio amet sit.
                                                </p>
                                                <div class="product-more-option">
                                                    <div class="product-more-option-item">
                                                        <h5>Category :</h5>
                                                        <a href="shop-left-sidebar.html">Earrings</a>
                                                    </div>
                                                    <div class="product-more-option-item">
                                                        <h5>Product Code :</h5>
                                                        <span>AE-009</span>
                                                    </div>
                                                    <div class="product-more-option-item">
                                                        <h5>Quantity:</h5>
                                                        <div class="product-quantity">
                                                            <div class="qtySelector">
                                                                <span class="decreaseQty">
                                                                    <i class="ri-subtract-line"></i>
                                                                </span>
                                                                <input type="text" class="qtyValue" value="1" />
                                                                <span class="increaseQty">
                                                                    <i class="ri-add-line"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product-more-option-item">
                                                        <h5>Availability :</h5>
                                                        <span>In Stock</span>
                                                    </div>
                                                </div>
                                                <div class="single-product-option">
                                                    <a href="cart.html" class="btn style1">Add To Cart </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
