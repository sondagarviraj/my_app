/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Checkout extends Component {
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
                                    <h2>Checkout</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Checkout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="checkout-wrap pt-100 pb-75">
                            <div class="container">
                                <div class="row gx-5">
                                    <div class="col-xl-7 col-lg-7">
                                        <div class="checkout-promobox">
                                            <div class="checkbox style2">
                                                <input type="checkbox" id="test_1" />
                                                <label for="test_1">Returning Customer? <a class="link style1"
                                                    href="my-account.html"> Click Here To Login</a></label>
                                            </div>
                                        </div>
                                        <div class="checkout-promobox">
                                            <div class="checkbox style2">
                                                <input type="checkbox" id="test_2" />
                                                <label for="test_2">Have A Coupon Code? <a class="link style1"
                                                    href="my-account.html"> Click Here To Apply</a></label>
                                            </div>
                                        </div>
                                        <form action="#" class="checkout-form">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h3 class="checkout-box-title">Billing Details</h3>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <input type="text" name="fname" id="fname" required
                                                            placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <input type="text" name="lname" id="lname" required placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="email" name="email" id="email" required
                                                            placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="number" name="phone" id="phone" required
                                                            placeholder="Phone Numnber" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="text" name="company_name" id="company_name"
                                                            placeholder="Company Name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <select name="select_country" id="select_country">
                                                            <option>Country</option>
                                                            <option value="1">United States</option>
                                                            <option value="1">Germany</option>
                                                            <option value="1">Russia</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <select name="select_country2" id="select_country2">
                                                            <option>State</option>
                                                            <option value="1">New York</option>
                                                            <option value="1">Florida</option>
                                                            <option value="1">Los Angels</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <select name="select_country3" id="select_country3">
                                                            <option>City</option>
                                                            <option value="1">New York</option>
                                                            <option value="1">Florida</option>
                                                            <option value="1">Los Angels</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="text" name="street" id="street" placeholder="Street" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <input type="text" name="zip" id="zip" required placeholder="ZIP Code" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-10 mb-20">
                                                    <div class="checkbox style2">
                                                        <input type="checkbox" id="test_10" />
                                                        <label for="test_10">Ship To A Different Address?</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <textarea name="msg" id="msg" cols="30" rows="10"
                                                            placeholder="Order Note"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="checkbox style2">
                                                        <input type="checkbox" id="test_10" />
                                                        <label for="test_10">I have read and accept the <a class="link style1"
                                                            href="terms-of-service.html"> Terms &amp; Conditions</a></label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 mt-25">
                                                    <div class="form-group mb-0">
                                                        <button type="button" class="btn style1">Place Order </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-xl-5 col-lg-5">
                                        <div class="checkout-details bg-albastor">
                                            <h3 class="checkout-box-title">Checkout Summary</h3>
                                            <div class="bill-details">
                                                <div class="bill-item-wrap">
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">Base Headphone</p>
                                                        <span class="bill-item-price">$100.00</span>
                                                    </div>
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">In-Ear Headphone</p>
                                                        <span class="bill-item-price">$240.00</span>
                                                    </div>
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">Wireless Headphone</p>
                                                        <span class="bill-item-price">$20.00</span>
                                                    </div>
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">Over-Ear Headphone</p>
                                                        <span class="bill-item-price">$60.00</span>
                                                    </div>
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">Subtotal</p>
                                                        <span class="bill-item-price">$300.00</span>
                                                    </div>
                                                    <div class="coupon-item mt-20">
                                                        <h5 class="checkout-box-subtitle">Have A Coupon Code?</h5>
                                                        <div class="form-group">
                                                            <input class="w-100" type="text" placeholder="Enter Coupon Code" />
                                                            <button type="submit">Apply</button>
                                                        </div>
                                                    </div>
                                                    <div class="bill-item">
                                                        <p class="bill-item-name">Total Amount</p>
                                                        <span class="bill-item-price">$300.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkout-details bg-albastor">
                                            <h3 class="checkout-box-title">Payment Method</h3>
                                            <div class="bill-details">
                                                <div class="bill-item-wrap">
                                                    <div class="select-payment-method mt-20">
                                                        <div>
                                                            <input type="radio" id="test1" name="radio-group" />
                                                            <label for="test1">Direct Bank Transfer</label>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipi consec sicing elit
                                                                similique veniam.</p>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="test3" name="radio-group" />
                                                            <label for="test3">Check Payment</label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="test2" name="radio-group" />
                                                            <label for="test2">Cash On Delivery</label>
                                                        </div>
                                                    </div>
                                                    <div class="checkout-footer mt-20">
                                                        <div class="checkbox">
                                                            <input type="checkbox style2" id="test_20" />
                                                            <label for="test_20">I have accept the <a class="link style1"
                                                                href="terms-of-service.html">terms &amp; conditions</a></label>
                                                        </div>
                                                        <button type="button" class="btn style1 d-block w-100 mt-25">Place Order
                                                        </button>
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
