import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Privacy_Policy extends Component {
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
                                    <h2>Privacy Policy</h2>
                                    <ul class="breadcrumb-menu list-style">
                                        <li><a href="index.html">Home </a></li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <section class="terms-wrap pt-100 pb-75">
                            <div class="container">
                                <div class="row gx-5">
                                    <div class="col-lg-6 mb-25">
                                        <div class="single-terms">
                                            <h3>Information Collection</h3>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                                                Voluptatem, <a href="index.html">company name</a> saepe ullam autem magni quod sint
                                                tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                                dignissimos <strong>activities</strong> ea pariatur corrupti rerum deserunt, ipsum,
                                                ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate
                                                dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                                            </p>
                                        </div>
                                        <div class="single-terms">
                                            <h3>How We Use Cookies</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                                dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam
                                                aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum
                                                eius similique sapiente. Iure, sit non. At fuga ipsam veniam.</p>
                                            <ul class="content-feature-list style2 list-style mb-0">
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Lorem ipsum dolor, sit amet.
                                                </li>
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Amet consectetur adipisicing elit Officia, odit!
                                                </li>
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Aquaerat ipsa quis possimus.
                                                </li>
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Lorem, ipsum dolor sit amet consectetur adipi.
                                                </li>
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Consectetur adipisicing elit Voluptatibus, dignissimos.
                                                </li>
                                                <li>
                                                    <i class="flaticon-checkbox"></i>
                                                    Highly professional administration.
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="single-terms">
                                            <h3>The Collection and Use of Personal Data</h3>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                                                Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias
                                                aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-25">
                                        <div class="single-terms">
                                            <h3>Data Protection</h3>
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                                                Voluptatem, company name saepe ullam autem magni quod sint tempore, eius molestias
                                                aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                                dignissimos <strong>aspernatur</strong> ea pariatur corrupti rerum deserunt, ipsum,
                                                ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate
                                                dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                                            </p>
                                        </div>
                                        <div class="single-terms">
                                            <h3>The Collection and Use of Personal Data</h3>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quod. Ratione ex
                                                delectus quis tenetur odio non alias numquam official ipsum dolor sit, amet
                                                consectetur adipisicing elit. Accusamus, laborum.</p>
                                            <ol>
                                                <li>Mauris ut in vestibulum hasellus ultrices fusce nibh justo, venenatis, amet.
                                                    Lectus quam in lobortis.</li>
                                                <li>Consectetur phasellus <strong>ultrices</strong> fusce nibh justo, venenatis,
                                                    amet. Lectus quam in lobortis justo venenatis amet.</li>
                                                <li>Lectus quam there are two thing is very important in Consectetur phasellus
                                                    ultrices fusce nibh justo, venenatis, amet in lobortis.</li>
                                                <li>Web Development very creative to do something , mauris ut in vestibulum.</li>
                                            </ol>
                                        </div>
                                        <div class="single-terms">
                                            <h3>Our Policy For Age Under 18</h3>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                                                Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias
                                                aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
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
