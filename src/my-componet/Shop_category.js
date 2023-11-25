import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Shop_category extends Component {
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
                  <h2>Shop Left Sidebar</h2>
                  <ul class="breadcrumb-menu list-style">
                    <li><a href="index.html">Home </a></li>
                    <li>Shop</li>
                  </ul>
                </div>
              </div>
            </div>


            <div class="shop-wrap ptb-100">
              <div class="container">
                <div class="row gx-5">
                  <div class="col-xl-4 col-lg-12 order-xl-1 order-lg-2 order-md-2 order-2">
                    <div class="sidebar">
                      <div class="sidebar-widget search-box">
                        <div class="form-group">
                          <input type="search" placeholder="Search" />
                          <button type="submit">
                            <i class="flaticon-search"></i>
                          </button>
                        </div>
                      </div>
                      <div class="sidebar-widget categories">
                        <h4>Categories</h4>
                        <div class="category-box">
                          <ul class="list-style">
                            <li>
                              <a href="shop-category.html">
                                <i class="ri-arrow-right-s-line"></i>
                                Trending
                                <span>(3)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-category.html">
                                <i class="ri-arrow-right-s-line"></i>
                                Sennheiser CX
                                <span>(6)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-category.html">
                                <i class="ri-arrow-right-s-line"></i>
                                New Arrival
                                <span>(5)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-category.html">
                                <i class="ri-arrow-right-s-line"></i>
                                JBL Earphone
                                <span>(9)</span>
                              </a>
                            </li>
                            <li>
                              <a href="shop-category.html">
                                <i class="ri-arrow-right-s-line"></i>
                                Sony WF
                                <span>(1)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="sidebar-widget price-range-widget">
                        <h4>Price Filter</h4>
                        <div class="checkbox-item-wrap">
                          <div class="checkbox-item">
                            <div class="checkbox">
                              <input type="checkbox" id="check_1" />
                              <label for="check_1">$100-$120</label>
                            </div>
                            <span>(11)</span>
                          </div>
                          <div class="checkbox-item">
                            <div class="checkbox">
                              <input type="checkbox" id="check_2" />
                              <label for="check_2">$120-$140</label>
                            </div>
                            <span>(6)</span>
                          </div>
                          <div class="checkbox-item">
                            <div class="checkbox">
                              <input type="checkbox" id="check_3" />
                              <label for="check_3">$140-$180</label>
                            </div>
                            <span>(15)</span>
                          </div>
                          <div class="checkbox-item">
                            <div class="checkbox">
                              <input type="checkbox" id="check_4" />
                              <label for="check_4">$180-$240</label>
                            </div>
                            <span>(12)</span>
                          </div>
                          <div class="checkbox-item">
                            <div class="checkbox">
                              <input type="checkbox" id="check_5" />
                              <label for="check_5">$240-$300</label>
                            </div>
                            <span>(9)</span>
                          </div>
                        </div>
                      </div>
                      <div class="sidebar-widget new-product">
                        <h4>New Arrivals</h4>
                        <div class="new-product-wrap">
                          <div class="new-product-item">
                            <div class="new-product-img">
                              <img src="./theme/assets/img/products/product-thumb-2.png" alt="Iamge" />
                            </div>
                            <div class="new-product-info">
                              <h6><a href="shop-details.html">Xomo XL-2</a></h6>
                              <span>$58.00</span>
                              <span class="discount">$80</span>
                            </div>
                          </div>
                          <div class="new-product-item">
                            <div class="new-product-img">
                              <img src="./theme/assets/img/products/product-thumb-1.png" alt="Iamge" />
                            </div>
                            <div class="new-product-info">
                              <h6><a href="shop-details.html">Sony Y2S</a></h6>
                              <span>$98.00</span>
                            </div>
                          </div>
                          <div class="new-product-item">
                            <div class="new-product-img">
                              <img src="./theme/assets/img/products/product-thumb-3.png" alt="Iamge" />
                            </div>
                            <div class="new-product-info">
                              <h6><a href="shop-details.html">In-Ear Earphone</a></h6>
                              <span>$98.00</span>
                              <span class="discount">$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8 col-lg-12 order-xl-2 order-lg-1 order-md-1 order-1">
                    <div class="row align-items-center mb-25">
                      <div class="col-xl-5 col-lg-5 col-md-6">
                        <div class="product-result">
                          <p>Showing 10 of 120 Products</p>
                        </div>
                      </div>
                      <div class="col-xl-4 offset-xl-3 col-lg-4 offset-lg-3 col-md-6">
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
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <img src="./theme/assets/img/products/product-1.png" alt="image" />
                            <span class="promo-text">Sale</span>
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <img src="./theme/assets/img/products/product-2.png" alt="image" />
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <img src="./theme/assets/img/products/product-4.png" alt="image" />
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <span class="promo-text">30% off</span>
                            <img src="./theme/assets/img/products/product-3.png" alt="image" />
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <span class="promo-text">New</span>
                            <img src="./theme/assets/img/products/product-5.png" alt="image" />
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                      <div class="col-lg-6 col-md-6">
                        <div class="product-card style4">
                          <div class="product-img bg-athens">
                            <img src="./theme/assets/img/products/product-6.png" alt="image" />
                            <ul class="product-option list-style">
                              <li><button type="button" data-bs-toggle="modal"
                                data-bs-target="#product-modal"><i
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
                    <div class="page-navigation mt-30">
                      <ul class="page-nav list-style">
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
                    <div class="col-lg-6">
                      <div class="single-product-gallery">
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
                      </div>
                    </div>
                    <div class="col-lg-6">
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
                          <a href="cart.html" class="btn style1">Add To Cart <i
                            class="flaticon-shopping-cart"></i></a>
                          <a href="wishlist.html" class="btn style2">Add To Wishlist <i
                            class="flaticon-heart"></i></a>
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
