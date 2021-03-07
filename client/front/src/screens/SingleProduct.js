import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Reviews from '../components/Reviews';

export default function SingleProduct({id}) {
  const [qty, setQty] = useState(1);
  const [productDetails, setProductsDetails] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {        
    

  //   fetch('http://localhost:5000/api/products/'+id)
  //   .then((response) => response.json())
  //   .then((data) => setProductsDetails(data)); }, );

  
  useEffect(() => {
    const index = window.location.toString().lastIndexOf('/')+1;
    const id = window.location.toString().substring(index);
      const fetchData = async () => {
        try {
          setLoading(true);
          const {data} = await axios.get('/api/products/'+id);
          setLoading(false);
          setProductsDetails(data);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    
        // if (productDetails==null){
        //     return "";}


       return ( 
        <div>
                  <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <h2 className="sidebar-title">Search Products</h2>
                <form action>
                  <input type="text" placeholder="Search products..." />
                  <input type="submit" defaultValue="Search" />
                </form>
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Products</h2>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href>Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href>Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href>Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href>Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Recent Posts</h2>
                <ul>
                  <li><a href>Sony Smart TV - 2015</a></li>
                  <li><a href>Sony Smart TV - 2015</a></li>
                  <li><a href>Sony Smart TV - 2015</a></li>
                  <li><a href>Sony Smart TV - 2015</a></li>
                  <li><a href>Sony Smart TV - 2015</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                  <a href>Home</a>
                  <a href>{productDetails.category}</a>
                  <a href>{productDetails.name}</a>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <img src={productDetails.imageUrl} alt="" />
                      </div>
                      <div className="product-gallery">
                        <img src="img/product-thumb-1.jpg" alt="" />
                        <img src="img/product-thumb-2.jpg" alt="" />
                        <img src="img/product-thumb-3.jpg" alt="" />
                        <img src="img/product-thumb-4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-inner">
                      <h2 className="product-name">{productDetails.name}</h2>
                      <div className="product-inner-price">
                        <ins>${productDetails.price}</ins> <del>$800.00</del>
                      </div>    
                      <form action className="cart">
                          <span>Qty</span>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(productDetails.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        
                      
                        <button className="add_to_cart_button" type="submit">Add to cart</button>
                      </form>   
                      <div className="product-inner-category">
                      <p>Category: <a href>{productDetails.category}</a>.</p>
                      </div> 
                      <div role="tabpanel">
                        <ul className="product-tab" role="tablist">
                          <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                          <Reviews />
                        </ul>
                        <div className="tab-content">
                          <div role="tabpanel" className="tab-pane fade in active" id="home">
                            <h2>Product Description</h2>  
                            <p>{productDetails.description}</p>
                          </div>
                          <div role="tabpanel" className="tab-pane fade" id="profile">
                            <h2>Reviews</h2>
                            <div className="submit-review">
                              <p><label htmlFor="name">Name</label> <input name="name" type="text" /></p>
                              <p><label htmlFor="email">Email</label> <input name="email" type="email" /></p>
                              <div className="rating-chooser">
                                <p>Your rating</p>
                                <div className="rating-wrap-post">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                              </div>
                              <p><label htmlFor="review">Your review</label> <textarea name="review" id cols={30} rows={10} defaultValue={""} /></p>
                              <p><input type="submit" defaultValue="Submit" /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related-products-wrapper">
                  <h2 className="related-products-title">Related Products</h2>
                  <div className="related-products-carousel">
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-1.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Sony Smart TV - 2015</a></h2>
                      <div className="product-carousel-price">
                        <ins>$700.00</ins> <del>$800.00</del>
                      </div> 
                    </div>
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-2.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Apple new mac book 2015 March :P</a></h2>
                      <div className="product-carousel-price">
                        <ins>$899.00</ins> <del>$999.00</del>
                      </div> 
                    </div>
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-3.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Apple new i phone 6</a></h2>
                      <div className="product-carousel-price">
                        <ins>$400.00</ins> <del>$425.00</del>
                      </div>                                 
                    </div>
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-4.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Sony playstation microsoft</a></h2>
                      <div className="product-carousel-price">
                        <ins>$200.00</ins> <del>$225.00</del>
                      </div>                            
                    </div>
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-5.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Sony Smart Air Condtion</a></h2>
                      <div className="product-carousel-price">
                        <ins>$1200.00</ins> <del>$1355.00</del>
                      </div>                                 
                    </div>
                    <div className="single-product">
                      <div className="product-f-image">
                        <img src="img/product-6.jpg" alt="" />
                        <div className="product-hover">
                          <a href className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</a>
                          <a href className="view-details-link"><i className="fa fa-link" /> See details</a>
                        </div>
                      </div>
                      <h2><a href>Samsung gallaxy note 4</a></h2>
                      <div className="product-carousel-price">
                        <ins>$400.00</ins>
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