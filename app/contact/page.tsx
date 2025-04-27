"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <div className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">Contact Us</h1>
              <p className="lead">Get in touch with our team for inquiries and assistance</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/" className="text-white">Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="lead">We're here to help with any questions or concerns you may have about disaster management.</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-pin-1 text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Our Location</h3>
                  <p>{contactInfo.address}</p>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm style2">
                    View on Map
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-phone-call-1 text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Phone Number</h3>
                  <p>Emergency Hotline: {contactInfo.phone}</p>
                  <p>Office: +230 1234 5678</p>
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="btn btn-sm style2">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className="flaticon-email-3 text-primary" style={{ fontSize: '48px' }}></i>
                  </div>
                  <h3 className="h5">Email Address</h3>
                  <p>General Inquiries: {contactInfo.email}</p>
                  <p>Support: support@ndrrmc.org</p>
                  <a href={`mailto:${contactInfo.email}`} className="btn btn-sm style2">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Send Us a Message</h3>
                  
                  {formStatus.submitted && (
                    <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Disaster Reporting">Disaster Reporting</option>
                        <option value="Volunteer Information">Volunteer Information</option>
                        <option value="Donation Information">Donation Information</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn style2">
                      <i className="flaticon-send me-2"></i> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h3 className="mb-4">Our Location</h3>
                  <div className="ratio ratio-1x1">
                    <iframe
                      src={contactInfo.mapUrl}
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NDRRMC Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="text-center mb-4">Office Hours</h3>
                  
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Hours</th>
                          <th scope="col">Services</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monday - Friday</td>
                          <td>8:00 AM - 5:00 PM</td>
                          <td>All services</td>
                        </tr>
                        <tr>
                          <td>Saturday</td>
                          <td>9:00 AM - 12:00 PM</td>
                          <td>Limited services</td>
                        </tr>
                        <tr>
                          <td>Sunday</td>
                          <td>Closed</td>
                          <td>Emergency services only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="alert alert-info mt-4 mb-0">
                    <div className="d-flex">
                      <div className="me-3">
                        <i className="flaticon-notification" style={{ fontSize: '24px' }}></i>
                      </div>
                      <div>
                        <h4 className="h6">Emergency Services</h4>
                        <p className="mb-0">Our emergency hotline is available 24/7 for disaster-related emergencies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="mb-2">Follow us on social media</h2>
              <p className="lead mb-0">Stay updated with the latest news and information.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg me-2">
                <i className="flaticon-facebook-1 me-2"></i> Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
                <i className="flaticon-twitter me-2"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
