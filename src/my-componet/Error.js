import React, { Component } from 'react'
import Navbar from './navbar'
import Footer from './Footer'

export default class Error extends Component {
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

            <div class="error-wrap pt-100 pb-100 mt-100">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="error-content">
                      <img src="./theme/assets/img/404.png" alt="Iamge" />
                      <h2>Oops! Page Not Found</h2>
                      <p>The page you are looking for might have been removed had its name changed or is
                        temporarily unavailable.</p>
                      <a href="index.html" class="btn style1">Back To Home</a>
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
