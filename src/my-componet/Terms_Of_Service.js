import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Terms_Of_Service extends Component {
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
                  <h2>Terms Of Service</h2>
                  <ul class="breadcrumb-menu list-style">
                    <li><a href="index.html">Home </a></li>
                    <li>Terms Of Service</li>
                  </ul>
                </div>
              </div>
            </div>


            <section class="terms-wrap ptb-100">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="single-terms">
                      <h3>Legal Disclaimer: </h3>
                      <p>We may collect personal identification information from Users in a variety of ways,
                        including, but not limited to, when Users visit our site, subscribe to the
                        newsletter, fill out a form, and in connection with other
                        <strong>activities</strong>, services, features or resources we make available on
                        our Site. Users may be asked for, as appropriate, name, email address, mailing
                        address, phone number, <a href="index.html">company name</a>. We will collect
                        personal identification information from Users only if they voluntarily consent such
                        information to us. Users can always refuse to supply personally identification
                        information, except that it may prevent them from engaging in certain Site related
                        activities.</p>
                    </div>
                    <div class="single-terms">
                      <h3>Credit Reporting Terms of Service</h3>
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
                        <li>Web Development very creative to do something , mauris ut in vestibulum.
                          Consectetur phasellus ultrices fusce nibh justo, venenatis, amet to all design.
                        </li>
                      </ol>
                    </div>
                    <div class="single-terms">
                      <h3>Ownership of Site Agreement to Terms of Use</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                        Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias
                        aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                        dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam
                        aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum
                        eius similique sapiente. Iure, sit non. At fuga ipsam veniam.</p>
                    </div>
                    <div class="single-terms">
                      <h3>Provision of Services</h3>
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
                      <h3>Limitation of Liability</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                        Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias
                        aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                    </div>
                    <div class="single-terms">
                      <h3> Accounts, Passwords and Security</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi.
                        Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias
                        aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                        dignissimos doloribus ea pariatur corrupti ullam autem magni quod sint tempore saepe
                        ullam autem magni amet consectetur adipisicing elit.</p>
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
