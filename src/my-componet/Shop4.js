import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Shop4 extends Component {
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
                                    <h2>Shop</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="shop-wrap ptb-100">
                            <div class="container">
                                <div class="row align-items-center mb-25">
                                    <div class="col-xl-9 col-lg-8 col-md-12">
                                        <div class="product-search-box">
                                            <div class="form-group">
                                                <input type="search" placeholder="Search" />
                                                <button type="submit">
                                                    <i class="flaticon-search"></i>
                                                </button>
                                            </div>
                                            <div class="product-result">
                                                <p>Showing 10 of 120 Products</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4  col-md-12">
                                        <div class="filter-item-cat">
                                            <select>
                                                <option>Default Sorting</option>
                                                <option value="1">Sort By Most Popular</option>
                                                <option value="2">Sort By High To Low</option>
                                                <option value="3">Sort By Low To High</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <img src="./theme/assets/img/products/product-1.png" alt="image" />
                                                <span class="promo-text">Sale</span>
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <img src="./theme/assets/img/products/product-2.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <img src="./theme/assets/img/products/product-4.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <span class="promo-text">30% off</span>
                                                <img src="./theme/assets/img/products/product-3.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <span class="promo-text">New</span>
                                                <img src="./theme/assets/img/products/product-5.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <img src="./theme/assets/img/products/product-6.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <span class="promo-text">New</span>
                                                <img src="./theme/assets/img/products/product-7.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                                <h3><a href="shop-details.html">Xnova MH-2</a></h3>
                                                <p class="product-price">$78.00 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-4 col-md-6">
                                        <div class="product-card style4">
                                            <div class="product-img bg-athens">
                                                <img src="./theme/assets/img/products/product-8.png" alt="image" />
                                                <ul class="product-option list-style">
                                                    <li><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#product-modal"><i class="ri-eye-line"></i></button>
                                                    </li>
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
                                                <h3><a href="shop-details.html">Winlux ART</a></h3>
                                                <p class="product-price">$30.00 <span class="discount">$50.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="page-navigation mt-30">
                                    <ul class="page-nav list-style justify-content-center">
                                        <li><a href="shop-right-sidebar.html"><i class="flaticon-left-arrow-2"></i></a></li>
                                        <li><a class="active" href="shop-right-sidebar.html">1</a></li>
                                        <li><a href="shop-right-sidebar.html">2</a></li>
                                        <li><a href="shop-right-sidebar.html">3</a></li>
                                        <li><a href="shop-right-sidebar.html"><i class="flaticon-next"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

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
                                                    required autocomplete="off"/>
                                                    <button class="btn style1" type="submit">
                                                        Subscribe
                                                    </button>
                                                    <div class="inner-check mt-30">
                                                        <div class="checkbox style2">
                                                            <input type="checkbox" id="test_3"/>
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
