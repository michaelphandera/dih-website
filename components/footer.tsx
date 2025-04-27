"use client";

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { footerLinks, socialLinks, contactInfo } from '@/lib/data';

interface AlertMessage {
  id: string;
  message: string;
  type: 'warning' | 'danger' | 'info' | 'success';
  timestamp: number;
}

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSizeAdjustment, setFontSizeAdjustment] = useState<number>(0);

  const newsletterFormRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Initialize on component mount
  useEffect(() => {
    // Check cookie consent
    const cookieConsent = localStorage.getItem('cookieConsent');
    setShowCookieBanner(!cookieConsent);

    // Load accessibility settings
    loadAccessibilitySettings();

    // Add scroll event listener for back-to-top button
    window.addEventListener('scroll', handleScroll);

    // Add styles for back-to-top and cookie banner
    addBackToTopStyles();
    addCookieBannerStyles();

    // Check for emergency alerts
    checkEmergencyAlerts();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Handle newsletter form submission
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!emailInputRef.current) return;

    const email = emailInputRef.current.value;
    if (!validateEmail(email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    // Simulate API call
    simulateApiCall('newsletter-subscribe', { email })
      .then(() => {
        showToast('Thank you for subscribing!', 'success');
        if (emailInputRef.current) emailInputRef.current.value = '';
      })
      .catch(() => {
        showToast('Subscription failed. Please try again.', 'error');
      });
  };

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Show toast notification
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const newToast = { message, type };
    setToasts(prev => [...prev, newToast]);

    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t !== newToast));
    }, 3000);
  };

  // Accept cookies
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieBanner(false);
  };

  // Scroll to top
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Load accessibility settings
  const loadAccessibilitySettings = () => {
    // Load font size
    const storedFontSize = localStorage.getItem('fontSizeAdjustment');
    if (storedFontSize) {
      const size = parseInt(storedFontSize);
      setFontSizeAdjustment(size);
      document.documentElement.style.setProperty('--font-size-adjustment', `${size * 0.125}rem`);
    }

    // Load high contrast
    const storedHighContrast = localStorage.getItem('highContrast');
    if (storedHighContrast === 'true') {
      setHighContrast(true);
      document.body.classList.add('high-contrast');
    }
  };

  // Adjust font size
  const adjustFontSize = (step: number) => {
    const newSize = Math.max(-2, Math.min(4, fontSizeAdjustment + step));
    setFontSizeAdjustment(newSize);

    localStorage.setItem('fontSizeAdjustment', newSize.toString());
    document.documentElement.style.setProperty('--font-size-adjustment', `${newSize * 0.125}rem`);

    showToast(`Font size ${step > 0 ? 'increased' : 'decreased'}`, 'info');
  };

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);

    if (newState) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    localStorage.setItem('highContrast', newState.toString());
    showToast(`High contrast mode ${newState ? 'enabled' : 'disabled'}`, 'info');
  };

  // Check for emergency alerts
  const checkEmergencyAlerts = async () => {
    try {
      const alerts = await fetchAlerts();

      // Show emergency alert modal if there are alerts and it hasn't been shown in this session
      if (alerts.length > 0 && !sessionStorage.getItem('alertShown')) {
        setTimeout(() => {
          const emergencyModal = document.getElementById('emergencyAlertModal');
          if (emergencyModal) {
            const contentElement = emergencyModal.querySelector('.modal-body');
            if (contentElement) {
              contentElement.innerHTML = formatAlerts(alerts);
            }

            // Show modal using Bootstrap
            // @ts-ignore - Bootstrap types may not be available
            const modal = new bootstrap.Modal(emergencyModal);
            modal.show();

            sessionStorage.setItem('alertShown', 'true');
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Error fetching alerts:', error);
    }
  };

  // Fetch alerts (simulated)
  const fetchAlerts = (): Promise<AlertMessage[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'cyclone-2025-04',
            message: 'Cyclone Warning: Category 2 cyclone approaching eastern coast. Expected landfall in 48 hours.',
            type: 'danger',
            timestamp: Date.now()
          },
          {
            id: 'flood-southern',
            message: 'Flood Warning: Heavy rainfall expected in Southern District over the next 24 hours.',
            type: 'warning',
            timestamp: Date.now()
          }
        ]);
      }, 500);
    });
  };

  // Format alerts for display
  const formatAlerts = (alerts: AlertMessage[]): string => {
    if (alerts.length === 0) return '<p>No active alerts</p>';

    let html = '<div class="emergency-alerts">';

    alerts.forEach(alert => {
      const date = new Date(alert.timestamp);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

      html += `
        <div class="alert alert-${alert.type} mb-3">
          <h5><i class="ri-alarm-warning-line me-2"></i>${alert.type === 'danger' ? 'URGENT' : 'WARNING'}</h5>
          <p>${alert.message}</p>
          <div class="alert-meta">
            <small>Issued: ${formattedDate}</small>
          </div>
        </div>
      `;
    });

    html += '</div>';
    return html;
  };

  // Simulate API call
  const simulateApiCall = (endpoint: string, data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`API call to ${endpoint} with data:`, data);
      setTimeout(() => {
        // 90% success rate for simulation
        if (Math.random() > 0.1) {
          resolve({ success: true, message: 'Operation successful' });
        } else {
          reject({ success: false, message: 'Operation failed' });
        }
      }, 800);
    });
  };

  // Add styles for back-to-top button
  const addBackToTopStyles = () => {
    if (!document.getElementById('back-to-top-styles')) {
      const style = document.createElement('style');
      style.id = 'back-to-top-styles';
      style.textContent = `
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: #338F7A;
          color: #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          pointer-events: none;
          z-index: 999;
          cursor: pointer;
        }

        .back-to-top.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .back-to-top:hover {
          background-color: #2a7362;
          transform: translateY(-5px);
        }

        .back-to-top i {
          font-size: 24px;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }

        .back-to-top.bounce i {
          animation: bounce 2s infinite;
        }

        .toast-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
        }
        .toast {
          padding: 12px 20px;
          margin-bottom: 10px;
          border-radius: 4px;
          color: white;
          font-size: 14px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .toast.success { background-color: #338F7A; }
        .toast.error { background-color: #F59946; }
        .toast.info { background-color: #3498db; }
      `;
      document.head.appendChild(style);
    }
  };

  // Add styles for cookie banner
  const addCookieBannerStyles = () => {
    if (!document.getElementById('cookie-banner-styles')) {
      const style = document.createElement('style');
      style.id = 'cookie-banner-styles';
      style.textContent = `
        #cookieConsentBanner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 15px;
          z-index: 9998;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
        }

        #cookieConsentBanner .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        #cookieConsentBanner p {
          margin: 0 20px 0 0;
        }

        .accessibility-controls {
          position: fixed;
          bottom: 100px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 998;
        }

        .accessibility-control {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #F59946;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .accessibility-control:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          #cookieConsentBanner .container {
            flex-direction: column;
          }

          #cookieConsentBanner p {
            margin: 0 0 15px 0;
            text-align: center;
          }

          .accessibility-controls {
            bottom: 20px;
            right: 20px;
          }

          .accessibility-control {
            width: 35px;
            height: 35px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  return (
    <>
      <footer className="footer-wrap">
        <div className="footer-top">
          <img src="/img/footer-shape-2.png" alt="Footer Shape" className="footer-shape-one moveHorizontal" />
          <img src="/img/sun-2.png" alt="Sun Shape" className="footer-shape-two rotate" />
          <div className="container">
            <div className="row pt-100 pb-75">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                <div className="footer-widget">
                  <Link href="/" className="footer-logo">
                    <img src="/img/molog.png" alt="National Disaster Management Center" />
                  </Link>
                  <p className="comp-desc">
                    The National Disaster Management Center works to strengthen disaster resilience through coordinated prevention, preparedness, response, and recovery initiatives across all levels of government.
                  </p>
                  <form ref={newsletterFormRef} className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                    <input
                      ref={emailInputRef}
                      type="email"
                      placeholder="Subscribe to Emergency Alerts"
                      required
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5 ps-lg-4 ps-md-5">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">About Us</h3>
                  <ul className="footer-menu list-style">
                    {footerLinks.aboutUs.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Quick Links</h3>
                  <ul className="footer-menu list-style">
                    {footerLinks.quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-md-5">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">Emergency Contact</h3>
                  <ul className="contact-info list-style">
                    <li>
                      <i className="ri-map-pin-line" />
                      <h6>Headquarters</h6>
                      <p>{contactInfo.address}</p>
                    </li>
                    <li>
                      <i className="ri-mail-line" />
                      <h6>Email</h6>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </li>
                    <li>
                      <i className="ri-phone-line" />
                      <h6>Emergency Hotline</h6>
                      <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
                      <p className="text-white mt-1" style={{ fontSize: 13 }}>Open 24/7 for emergencies</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-6 col-sm-7">
                <p className="copyright-text">
                  <i className="ri-copyright-line" /> National Disaster Management Center © <span className="copyright-year">{currentYear}</span>. All rights reserved.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-5">
                <ul className="social-profile style1 list-style">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="footer-social-link"
                        data-platform={link.name.toLowerCase()}
                      >
                        <i className={`ri-${link.icon.toLowerCase()}-fill`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

        {/* Back to Top Button */}
      <a
        href="#"
        className={`back-to-top ${showBackToTop ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line"></i>
      </a>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div id="cookieConsentBanner">
          <div className="container">
            <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button id="acceptCookies" className="btn btn-primary" onClick={acceptCookies}>Accept</button>
          </div>
        </div>
      )}

      {/* Toast Container */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toast, index) => (
            <div key={index} className={`toast ${toast.type}`}>
              {toast.message}
            </div>
          ))}
        </div>
      )}

      {/* Emergency Alert Modal */}
      <div className="modal fade" id="emergencyAlertModal" tabIndex={-1} aria-labelledby="emergencyAlertModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="emergencyAlertModalLabel">
                <i className="ri-alarm-warning-line me-2"></i> Emergency Alerts
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Alert content will be inserted here */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <a href="/alerts" className="btn btn-danger">View All Alerts</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;