"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function ContactPage() {
  return (
      <div className="content">
        {/* Breadcrumb Start */}
        <div className="breadcrumb-wrap bg-f br-1">
          <div className="container text-center">
            <div className="breadcrumb-title">
              <h2>Contact Us</h2>
              <ul className="breadcrumb-menu list-style">
                <li><a href="index.html">Home </a></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Contact Us section Start */}
        <section className="contact-us-wrap ptb-100">
          <div className="container">
            <div className="section-title style1 text-center mb-40">
              <span>Contact Us<img src="assets/img/section-shape.png" alt="Image" /></span>
              <h2>Get In Touch With Us</h2>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8">
                <div className="contact-form">
                  <form className="form-wrap" id="contactForm">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name*" id="name" required data-error="Please enter your name" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input type="email" name="email" id="email" required placeholder="Email*" data-error="Please enter your email" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input type="email" name="phone" id="phone" required placeholder="Phone*" data-error="Please enter your phone" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="msg_subject" placeholder="Subject*" id="msg_subject" required data-error="Please enter your subject" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group v1">
                          <textarea name="message" id="message" placeholder="Your Messages.." cols={30} rows={10} required data-error="Please enter your message" defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <div className="form-check checkbox">
                            <input name="gridCheck" defaultValue="I agree to the terms and privacy policy." className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label" htmlFor="gridCheck">
                              I agree to the <a className="link style1" href="terms-of-service.html">Terms &amp; Conditions</a> and <a className="link style1" href="privacy-policy.html">Privacy Policy</a>
                            </label>
                            <div className="help-block with-errors gridCheck-error" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn style1 w-100 d-block">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-item-wrap">
                  <div className="contact-item">
                    <h3>Our Address</h3>
                    <p>2767 Sunrise Street, 127 St. Josef Avenue, Florida, USA</p>
                  </div>
                  <div className="contact-item">
                    <h3>Email Address</h3>
                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#fc9499909093bc9f909591d29f9391"><span className="__cf_email__" data-cfemail="4b232e2727240b2827222665282426">[email&nbsp;protected]</span></a>
                    <a href="https://templates.hibotheme.com/cdn-cgi/l/email-protection#71020401011e030531121d181c5f121e1c"><span className="__cf_email__" data-cfemail="70030500001f020430131c191d5e131f1d">[email&nbsp;protected]</span></a>
                  </div>
                  <div className="contact-item">
                    <h3>24/7 Support</h3>
                    <a href="tel:9094630378">909-463-0378</a>
                    <a href="tel:tel:4074386389">407-438-6389</a>
                  </div>
                  <div className="contact-item">
                    <h3>Follow us</h3>
                    <ul className="social-profile style2 list-style">
                      <li>
                        <a href="https://facebook.com/">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Us section End */}
      </div>
  );
}
