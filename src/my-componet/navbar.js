/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <header class="header-wrap style1">

                    <div class="header-bottom">
                        <div class="container">
                            <nav class="navbar navbar-expand-md navbar-light">
                                <Link class="navbar-brand" href="index.html">
                                    <img class="logo-light" src="./theme/assets/img/logo.png" alt="logo" />
                                    <img class="logo-dark" src="./theme/assets/img/logo-white.png" alt="logo" />
                                </Link>
                                <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                                    <div class="menu-close xl-none">
                                        <Link to="javascript:void(0)"> <i class="ri-close-line"></i></Link>
                                    </div>
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <Link to="/home" class="nav-link active">
                                                Home
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/About" class="nav-link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="#" class="nav-link nav-link-active">
                                                Shop
                                                <i class="ri-arrow-down-s-line"></i>
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <Link to="" class="nav-link">
                                                        Shop Layout
                                                        <i class="ri-arrow-right-s-line"></i>
                                                    </Link>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item">
                                                            <Link to="/ShopCat" class="nav-link">Shop Left
                                                                Sidebar</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/Shopright" class="nav-link">Shop Right
                                                                Sidebar</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/Shop3" class="nav-link">Shop 3 Column</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/Shop4" class="nav-link">Shop 4 Column</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Shopdetails" class="nav-link">Shop Details</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Wishlist" class="nav-link">Wishlist</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="Cart" class="nav-link">Cart</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Checkout" class="nav-link">Checkout</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="/Trackorder" class="nav-link">Track Order</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="#" class="nav-link">
                                                        User Pages
                                                        <i class="ri-arrow-right-s-line"></i>
                                                    </Link>
                                                    <ul class="dropdown-menu">
                                                        <li class="nav-item">
                                                            <Link to="/Userpage" class="nav-link">Register</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/Login" class="nav-link">Login</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="/Account" class="nav-link">My Account</Link>
                                                        </li>
                                                        <li class="nav-item">
                                                            <Link to="Password" class="nav-link">Recover
                                                                Password</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>


                                        <li class="nav-item">
                                            <Link to="/contact" class="nav-link">Contact Us</Link>
                                        </li>
                                        <li class="nav-item xl-none  mt-3">
                                            <Link to="/Login" class="nav-Link">Login</Link>
                                        </li>
                                    </ul>
                                    <div class="others-options lg">
                                        <Link to="/Login" class="btn style1">Login</Link>
                                    </div>
                                    <div class="others-options lg-none">
                                        <button class="searchbtn" type="button">
                                            <i class="flaticon-search"></i>
                                        </button>
                                    </div>
                                    <div class="others-options lg-none">
                                        <div class="shopcart">
                                            <i class="flaticon-shopping-cart"></i>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div class="mobile-bar-wrap">
                                <button class="searchbtn xl-none" type="button">
                                    <i class="flaticon-search"></i>
                                </button>
                                <div class="shopcart d-xl-none">
                                    <i class="flaticon-shopping-cart"></i>
                                    <span>1</span>
                                </div>
                                <div class="mobile-menu xl-none">
                                    <Link to="javascript:void(0)"><i class="ri-menu-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-area">
                        <div class="container">
                            <button type="button" class="close-searchbox">
                                <i class="ri-close-line"></i>
                            </button>
                            <form action="#">
                                <div class="form-group">
                                    <input type="search" placeholder="Search Here" autofocus />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="cart-popup">
                        <button type="button" class="close-cart-popup"><i class="ri-close-fill"></i></button>
                        <div class="cart-popup-body">
                            <div class="cart-item">
                                <div class="cart-item-action">
                                    <button class="delete-cart-item">
                                        <i class="ri-close-circle-fill"></i>
                                    </button>
                                </div>
                                <div class="cart-item-img">
                                    <img src="./theme/assets/img/products/product-thumb-1.png" alt="Image" />
                                </div>
                                <div class="cart-item-info">
                                    <h5><Link to="shop-details.html">Over-Ear Headphone</Link></h5>
                                    <p>$28.00</p>
                                </div>
                            </div>
                            <div class="cart-item">
                                <div class="cart-item-action">
                                    <button class="delete-cart-item">
                                        <i class="ri-close-circle-fill"></i>
                                    </button>
                                </div>
                                <div class="cart-item-img">
                                    <img src="./theme/assets/img/products/product-thumb-2.png" alt="Image" />
                                </div>
                                <div class="cart-item-info">
                                    <h5><Link to="shop-details.html">JLB Base Earphone</Link></h5>
                                    <p>$40.00</p>
                                </div>
                            </div>
                            <div class="cart-item">
                                <div class="cart-item-action">
                                    <button class="delete-cart-item">
                                        <i class="ri-close-circle-fill"></i>
                                    </button>
                                </div>
                                <div class="cart-item-img">
                                    <img src="./theme/assets/img/products/product-thumb-3.png" alt="Image" />
                                </div>
                                <div class="cart-item-info">
                                    <h5><Link to="shop-details.html">Wireless Headphone</Link></h5>
                                    <p>$35.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="cart-popup-footer">
                            <div class="total-amt">
                                <h5>Total Payable</h5>
                                <h5>$178.00</h5>
                            </div>
                            <div class="cart-popup-btn">
                                <Link to="cart.html" class="btn style1">View Cart</Link>
                                <Link to="checkout.html" class="btn style2">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <Outlet />
            </>
        )
    }
}
