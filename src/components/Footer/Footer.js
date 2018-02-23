import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="footer-top-container">
            <div className="row">
              <div className="col-lg-3">
                <div className="widget-footer-container">
                  <h3 className="transform-green">ClubSP Company Limited</h3>
                  <ul className="address-store">
                    <li>
                      <em className="fa fa-map-marker" />Lorem bulding, number
                      02 Ipsum Dolor stress, Consectetur town, Lang Son Province
                    </li>
                    <li>
                      <em className="fa fa-phone" />0123 456 7893
                    </li>
                    <li>
                      <em className="fa fa-fax" />0643 6543 898
                    </li>
                    <li>
                      <em className="fa fa-envelope" />contact@clubsp.com.vn
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <div className="col-lg-1">&nbsp;</div>
              <div className="col-lg-8">
                <div className="row col-footer-row">
                  <div className="col-footer-item col-4">
                    <div className="widget-footer-container">
                      <h3>About ClubSP</h3>
                      <ul>
                        <li>
                          <a href="http://192.168.1.54/cbs655/about-us">
                            About us
                          </a>
                        </li>
                        <li>
                          <a href="http://192.168.1.54/cbs655/#">
                            ClubSP's shop list
                          </a>
                        </li>
                        <li>
                          <a href="http://192.168.1.54/cbs655/chinh-sach-doi-tra">
                            Customer service
                          </a>
                        </li>
                        <li>
                          <a href="http://192.168.1.54/cbs655/terms-and-policy">
                            Privacy policy
                          </a>
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                  <div className="col-footer-item col-4">
                    <div className="widget-footer-container">
                      <h3>Corporate with Club SP</h3>
                      <ul className="link-cbs-footer">
                        <li>
                          <span>Register as collaborator</span>
                        </li>
                        <li>
                          <span>Register as provider</span>
                        </li>
                        <li>
                          <span>Register as local shop</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-footer-item col-4">
                    <div className="widget-footer-container">
                      <h3>Helps</h3>
                      <ul>
                        <li>
                          <a href="http://192.168.1.54/cbs655/contacts/">
                            Contact US
                          </a>
                        </li>
                        <li>
                          <a href="#">FAQs</a>
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
