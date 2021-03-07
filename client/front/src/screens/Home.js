import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LatestProd from '../components/LatestProd'
export default function Home() {

       return (
           <div>
        <div className="slider-area">
          <div className="zigzag-bottom" />
          <div id="slide-list" className="carousel carousel-fade slide" data-ride="carousel">
            <div className="slide-bulletz">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ol className="carousel-indicators slide-indicators">
                      <li data-target="#slide-list" data-slide-to={0} className="active" />
                      <li data-target="#slide-list" data-slide-to={1} />
                      <li data-target="#slide-list" data-slide-to={2} />
                    </ol>                            
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide">
                  <div className="slide-bg slide-one" />
                  <div className="slide-text-wrapper">
                    <div className="slide-text">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-6">
                            <div className="slide-content">
                              <h2>We are awesome</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae iure vero exercitationem ratione!</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ab molestiae minus reiciendis! Pariatur ab rerum, sapiente ex nostrum laudantium.</p>
                              <a className="readmore">Learn more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-slide">
                  <div className="slide-bg slide-two" />
                  <div className="slide-text-wrapper">
                    <div className="slide-text">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-6">
                            <div className="slide-content">
                              <h2>We are great</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur, dolorum harum molestias tempora deserunt voluptas possimus quos eveniet, vitae voluptatem accusantium atque deleniti inventore. Enim quam placeat expedita! Quibusdam!</p>
                              <a className="readmore">Learn more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-slide">
                  <div className="slide-bg slide-three" />
                  <div className="slide-text-wrapper">
                    <div className="slide-text">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 col-md-offset-6">
                            <div className="slide-content">
                              <h2>We are superb</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eius?</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptates necessitatibus dicta recusandae quae amet nobis sapiente explicabo voluptatibus rerum nihil quas saepe, tempore error odio quam obcaecati suscipit sequi.</p>
                              <a className="readmore">Learn more</a>
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
        </div> {/* End slider area */}
        <div className="promo-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-promo">
                  <i className="fa fa-refresh" />
                  <p>30 Days return</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo">
                  <i className="fa fa-truck" />
                  <p>Free shipping</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo">
                  <i className="fa fa-lock" />
                  <p>Secure payments</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo">
                  <i className="fa fa-gift" />
                  <p>New products</p>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End promo area */}
        <div className="maincontent-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="latest-product">
                  <h2 className="section-title">Latest Products</h2>
                  <div className="product-carousel active">
                    <LatestProd />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End main content area */}
        <div className="brands-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brand-wrapper">
                  <h2 className="section-title">Brands</h2>
                  <div className="brand-list">
                    <img src="img/services_logo__1.jpg" alt="" />
                    <img src="img/services_logo__2.jpg" alt="" />
                    <img src="img/services_logo__3.jpg" alt="" />
                    <img src="img/services_logo__4.jpg" alt="" />
                    <img src="img/services_logo__1.jpg" alt="" />
                    <img src="img/services_logo__2.jpg" alt="" />
                    <img src="img/services_logo__3.jpg" alt="" />
                    <img src="img/services_logo__4.jpg" alt="" />                            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End brands area */}
        <div className="product-widget-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Top Sellers</h2>
                  <a className="wid-view-more">View All</a>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Apple new mac book 2015</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Recently Viewed</h2>
                  <a href="#" className="wid-view-more">View All</a>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Sony Smart Air Condtion</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Top New</h2>
                  <a href="#" className="wid-view-more">View All</a>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Apple new i phone 6</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                  <div className="single-wid-product">
                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                    <h2><a href="single-product.html">Sony playstation microsoft</a></h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins> <del>$425.00</del>
                    </div>                            
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* End product widget area */}
           </div> 
       )
    }