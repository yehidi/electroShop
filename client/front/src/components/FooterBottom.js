import React, { Component } from "react"

class FooterBottom extends React.Component{
    render() {
        return (
            <div>
                    <div className="footer-bottom-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright">
              <p>© 2021 ElectroShop. All Rights Reserved. Coded with <i className="fa fa-heart" /> by <a href="http://wpexpand.com" target="_blank">WP Expand</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-card-icon">
              <i className="fa fa-cc-discover" />
              <i className="fa fa-cc-mastercard" />
              <i className="fa fa-cc-paypal" />
              <i className="fa fa-cc-visa" />
            </div>
          </div>
        </div>
      </div>
    </div> {/* End footer bottom area */}
            </div>
        )
    }
}

export default FooterBottom