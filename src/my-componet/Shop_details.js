import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Shop_details extends Component {
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
                                    <h2>Shop Details</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li><a href="shop-left-sidebar.html">Shop</a></li>
                                        <li>Shop Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <section class="product-details-wrap pt-100">
                            <div class="container">
                                <div class="row gx-5 ">
                                    <div class="col-lg-6">
                                        <div class="single-product-gallery">
                                            <div class="swiper-container single-product_slider">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide single-product-item">
                                                        <img src="./theme/assets/img/products/single-product-1.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-item">
                                                        <img src="./theme/assets/img/products/single-product-2.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-item">
                                                        <img src="./theme/assets/img/products/single-product-3.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-item">
                                                        <img src="./theme/assets/img/products/single-product-4.png" img="Image" />
                                                    </div>
                                                </div>
                                                <div class="swiper-button-next"> <i class="flaticon-right-arrow"></i></div>
                                                <div class="swiper-button-prev"><i class="flaticon-left-arrow-1"></i></div>
                                            </div>
                                            <div thumbsSlider class="swiper-container single-product_thumbs">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="./theme/assets/img/products/single-product-1.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="./theme/assets/img/products/single-product-2.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="./theme/assets/img/products/single-product-3.png" img="Image" />
                                                    </div>
                                                    <div class="swiper-slide single-product-thumb bg-albastor">
                                                        <img src="./theme/assets/img/products/single-product-4.png" img="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="single-product-details">
                                            <div class="single-product-title">
                                                <h2>Over-Ear Headphone</h2>
                                                <h3><span>$38</span> <span class="discount">$50</span></h3>
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
                                                exercitationem odio rerum.
                                            </p>
                                            <div class="product-more-option">
                                                <div class="product-more-option-item">
                                                    <h5>Sku :</h5>
                                                    <span>001</span>
                                                </div>
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
                                                <a href="cart.html" class="btn style1">Add To Cart</a>
                                                <a href="wishlist.html" class="btn style2">Add To Wishlist</a>
                                            </div>
                                            <div class="product-more-option">
                                                <div class="product-more-option-item">
                                                    <h5>Share On :</h5>
                                                    <ul class="social-profile style1 list-style">
                                                        <li>
                                                            <a target="_blank" href="https://facebook.com/">
                                                                <i class="ri-facebook-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank" href="https://twitter.com/">
                                                                <i class="ri-twitter-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank" href="https://linkedin.com/">
                                                                <i class="ri-linkedin-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a target="_blank" href="https://instagram.com/">
                                                                <i class="ri-pinterest-fill"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row pt-100">
                                    <div class="col-lg-12">
                                        <div class="product-description-wrap">
                                            <div class="product-description">
                                                <div class="desc-title">
                                                    <h2>Description</h2>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis quo
                                                    fugiat magni accusamus exercitationem! Voluptate, deleniti quae. Libero iusto
                                                    minus, nulla excepturi quidem reprehenderit blanditiis eligendi exercitationem
                                                    nesciunt ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                                                    temporibus deserunt mollitia natus esse, sunt fuga quos. error quisquam
                                                    architecto fuga suscipit atque voluptatibus nobis impedit. Officia
                                                    exercitationem.</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat
                                                    tempora aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam,
                                                    distinctio atque aperiam inventore consectetur laudantium repellat tempora
                                                    aliquid exercitationem. Vel, dicta quos. Velit magnam, eius unde ullam.</p>
                                                <ul class="content-feature-list style2 list-style mb-0">
                                                    <li>
                                                        <i class="flaticon-checkbox"></i>
                                                        It has survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged.
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-checkbox"></i>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-checkbox"></i>
                                                        The point of using Lorem Ipsum is that it has a more-or-less normal
                                                        distribution of letters.
                                                    </li>
                                                    <li>
                                                        <i class="flaticon-checkbox"></i>
                                                        Various versions have evolved over the years, sometimes by accident
                                                        sometimes on purpose.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-description">
                                                <div class="desc-title">
                                                    <h2>Review</h2>
                                                </div>
                                                <div class="row gx-5">
                                                    <div class="col-lg-6">
                                                        <div class="progressbar-wrap">
                                                            <div class="progress-bar" data-percentage="95%">
                                                                <h4 class="progress-title-holder clearfix">
                                                                    <span class="progress-title">5 Star</span>
                                                                    <span class="progress-number-wrapper">
                                                                        <span class="progress-number-mark">
                                                                            <span class="percent"></span>
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                                <div class="progress-content-outter">
                                                                    <div class="progress-content"></div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar" data-percentage="85%">
                                                                <h4 class="progress-title-holder clearfix">
                                                                    <span class="progress-title">4 Star</span>
                                                                    <span class="progress-number-wrapper">
                                                                        <span class="progress-number-mark">
                                                                            <span class="percent"></span>
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                                <div class="progress-content-outter">
                                                                    <div class="progress-content"></div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar style3" data-percentage="88%">
                                                                <h4 class="progress-title-holder clearfix">
                                                                    <span class="progress-title">3 Star</span>
                                                                    <span class="progress-number-wrapper">
                                                                        <span class="progress-number-mark">
                                                                            <span class="percent"></span>
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                                <div class="progress-content-outter">
                                                                    <div class="progress-content"></div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar style3" data-percentage="88%">
                                                                <h4 class="progress-title-holder clearfix">
                                                                    <span class="progress-title">2 Star</span>
                                                                    <span class="progress-number-wrapper">
                                                                        <span class="progress-number-mark">
                                                                            <span class="percent"></span>
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                                <div class="progress-content-outter">
                                                                    <div class="progress-content"></div>
                                                                </div>
                                                            </div>
                                                            <div class="progress-bar style3" data-percentage="88%">
                                                                <h4 class="progress-title-holder clearfix">
                                                                    <span class="progress-title">1 Star</span>
                                                                    <span class="progress-number-wrapper">
                                                                        <span class="progress-number-mark">
                                                                            <span class="percent"></span>
                                                                        </span>
                                                                    </span>
                                                                </h4>
                                                                <div class="progress-content-outter">
                                                                    <div class="progress-content"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="client-review-form">
                                                            <div class="comment-form-title">
                                                                <h5>Submit Your Review</h5>
                                                            </div>
                                                            <form action="#" class="comment-form">
                                                                <div class="row gx-3">
                                                                    <div class="col-lg-6">
                                                                        <div class="form-group s1">
                                                                            <input type="text" placeholder="Your  Full Name*" />
                                                                        </div>
                                                                        <div class="form-group s2">
                                                                            <input type="email" placeholder="Email Address*" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6">
                                                                        <div class="form-group">
                                                                            <textarea name="review-msg" id="review-msg" cols="30"
                                                                                rows="10" placeholder="Your comments..."></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-12">
                                                                        <div class="checkbox">
                                                                            <input type="checkbox" id="test_1" />
                                                                            <label for="test_1">
                                                                                I Agree with the <a class="link style1"
                                                                                    href="terms-of-service.html">Terms &amp;
                                                                                    conditions</a>
                                                                            </label>
                                                                        </div>
                                                                        <button class="btn style1 mt-25">Submit Review </button>
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
                        </section>


                        <section class="product-wrap pt-100 pb-75">
                            <div class="container">
                                <div class="section-title style1 text-center mb-40">
                                    <span>CHECK OUT</span>
                                    <h2>More Related Products</h2>
                                </div>
                                <div class="product-slider-one owl-carousel">
                                    <div class="product-card style4">
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
                                    <div class="product-card style4">
                                        <div class="product-img bg-athens">
                                            <img src="./theme/assets/img/products/product-2.png" alt="image" />
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
                                            <h3><a href="shop-details.html">Wireless Headphones</a></h3>
                                            <p class="product-price">$38.00 <span class="discount">$40.00</span></p>
                                        </div>
                                    </div>
                                    <div class="product-card style4">
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
                                    <div class="product-card style4">
                                        <div class="product-img bg-athens">
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
                                            <p class="product-price">$58.00 <span class="discount">$80.00</span></p>
                                        </div>
                                    </div>
                                    <div class="product-card style4">
                                        <div class="product-img bg-athens">
                                            <span class="promo-text">New</span>
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
                                    <div class="product-card style4">
                                        <div class="product-img bg-athens">
                                            <img src="./theme/assets/img/products/product-6.png" alt="image" />
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
                                            <p class="product-price">$58.00 <span class="discount">$80.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>


                    <Footer/>

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
                                        <div class="col-xl-7 col-lg-6">
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
                                                            <img src="./theme/assets/img/products/product-3.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-thumb bg-albastor">
                                                            <img src="./theme/assets/img/products/product-4.png" alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-container single-product-slider">
                                                    <div class="swiper-wrapper">
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets/img/products/product-1.png" alt="Image" />
                                                        </div>
                                                        <div class="swiper-slide single-product-item">
                                                            <img src="./theme/assets/img/products/product-2.png" alt="Image" />
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
                                        <div class="col-xl-5 col-lg-6">
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
                                                    exercitationem odio rerum doloremque quod, enim iste.
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


            </div>
        )
    }
}
