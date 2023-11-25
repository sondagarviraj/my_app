/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Cart extends Component {
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
                                    <h2>Cart</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Cart</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="cart-wrap ptb-100">
                            <div class="container">
                                <div class="row gx-5">
                                    <div class="col-xl-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="cart-table ">
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Trash</th>
                                                                <th scope="col">Image</th>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">In Stock</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <button class="cart-action" type="button">
                                                                        <i class="ri-delete-bin-6-line"></i>
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <div class="product-img">
                                                                        <img src="/theme/assets/img/products/product-thumb-1.png"
                                                                            alt="image" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a class="cart-item" href="shop-details.html">
                                                                        <span>Over-ear Headphones</span>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$58.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Available</p>
                                                                </td>
                                                                <td>
                                                                    <div class="cart-qty">
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
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$120.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <button class="cart-action" type="button">
                                                                        <i class="ri-delete-bin-6-line"></i>
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <div class="product-img">
                                                                        <img src="/theme/assets/img/products/product-thumb-2.png"
                                                                            alt="image" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a class="cart-item" href="shop-details.html">
                                                                        <span>Wireless Headphone</span>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$30.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Available</p>
                                                                </td>
                                                                <td>
                                                                    <div class="cart-qty">
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
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$45.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <button class="cart-action" type="button">
                                                                        <i class="ri-delete-bin-6-line"></i>
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <div class="product-img">
                                                                        <img src="/theme/assets/img/products/product-thumb-3.png"
                                                                            alt="image" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a class="cart-item" href="shop-details.html">
                                                                        <span>Base Headphones</span>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$140.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Available</p>
                                                                </td>
                                                                <td>
                                                                    <div class="cart-qty">
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
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$140.00</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <button class="cart-action" type="button">
                                                                        <i class="ri-delete-bin-6-line"></i>
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <div class="product-img">
                                                                        <img src="/theme/assets/img/products/product-thumb-4.png"
                                                                            alt="image" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <a class="cart-item" href="shop-details.html">
                                                                        <span>In-ear Headphones</span>
                                                                    </a>
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$90.00</p>
                                                                </td>
                                                                <td>
                                                                    <p>Available</p>
                                                                </td>
                                                                <td>
                                                                    <div class="cart-qty">
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
                                                                </td>
                                                                <td>
                                                                    <p class="cart-item-price">$140.00</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="coupon-wrap">
                                                    <div class="row">
                                                        <div class="col-lg-5 col-md-6 col-sm-8">
                                                            <div class="coupon-code">
                                                                <input type="text" placeholder="Coupon Code" />
                                                                <button type="button">Apply Coupon</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-7 col-md-6 col-sm-4 text-sm-end">
                                                            <button class="btn style1" type="button">Update Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-30">
                                            <div class="col-xl-6 offset-xl-3">
                                                <div class="cart-total">
                                                    <h3 class="cart-box-title">Checkout Summary</h3>
                                                    <div class="cart-total-item">
                                                        <p>Subtotal</p>
                                                        <span>$463</span>
                                                    </div>
                                                    <div class="cart-total-item">
                                                        <p>Shipping</p>
                                                        <span>$30</span>
                                                    </div>
                                                    <div class="cart-total-item">
                                                        <p>Discount</p>
                                                        <span>$43</span>
                                                    </div>
                                                    <div class="cart-total-item">
                                                        <p>Total</p>
                                                        <span>$450</span>
                                                    </div>
                                                    <a href="checkout.html" class="btn style1 d-block w-100">Proceed To Checkout</a>
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
