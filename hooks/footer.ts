/**
 * Site-wide Footer TypeScript
 * This script handles all footer-related functionality and site-wide features
 */

// Define interfaces for type safety
interface CounterData {
    trainedPersonnel: number;
    evacuationCenters: number;
    earlyWarningStations: number;
    activeAlerts: number;
  }
  
  interface AlertMessage {
    id: string;
    message: string;
    type: 'warning' | 'danger' | 'info' | 'success';
    timestamp: number;
  }
  
  class SiteFooter {
    private backToTopButton: HTMLElement | null;
    private cookieConsentBanner: HTMLElement | null;
    private newsletterForm: HTMLFormElement | null;
    private districtSelector: HTMLSelectElement | null;
    private socialLinks: NodeListOf<HTMLElement>;
    private currentAlerts: AlertMessage[] = [];
    
    constructor() {
      // Initialize element references
      this.backToTopButton = document.querySelector('.back-to-top');
      this.cookieConsentBanner = document.getElementById('cookieConsentBanner');
      this.newsletterForm = document.querySelector('form.newsletter-form') as HTMLFormElement;
      this.districtSelector = document.getElementById('district-selector') as HTMLSelectElement;
      this.socialLinks = document.querySelectorAll('.footer-social-link');
      
      this.initEventListeners();
      this.initCookieConsent();
      this.initDistrictResources();
      this.initBackToTop();
      this.initAccessibility();
      this.initCounter();
    }
    
    private initEventListeners(): void {
      // Document ready event
      document.addEventListener('DOMContentLoaded', () => {
        this.updateFooterYear();
        this.checkEmergencyAlerts();
      });
      
      // Form submission
      if (this.newsletterForm) {
        this.newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
      }
      
      // Add analytics tracking to social links
      this.socialLinks.forEach(link => {
        link.addEventListener('click', (e) => this.trackSocialClick(e));
      });
      
      // Window scroll events
      window.addEventListener('scroll', () => this.handleScroll());
      
      // Accept cookies event
      const acceptCookiesBtn = document.getElementById('acceptCookies');
      if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => this.acceptCookies());
      }
    }
    
    private initBackToTop(): void {
      if (this.backToTopButton) {
        this.backToTopButton.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    }
    
    private handleScroll(): void {
      if (this.backToTopButton) {
        if (window.scrollY > 300) {
          this.backToTopButton.classList.add('active');
        } else {
          this.backToTopButton.classList.remove('active');
        }
      }
    }
    
    private updateFooterYear(): void {
      const yearEl = document.querySelector('.copyright-year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear().toString();
      }
    }
    
    private initCookieConsent(): void {
      if (this.cookieConsentBanner) {
        if (!localStorage.getItem('cookieConsent')) {
          this.cookieConsentBanner.style.display = 'block';
        } else {
          this.cookieConsentBanner.style.display = 'none';
        }
      }
    }
    
    private acceptCookies(): void {
      localStorage.setItem('cookieConsent', 'true');
      if (this.cookieConsentBanner) {
        this.cookieConsentBanner.style.display = 'none';
      }
    }
    
    private handleNewsletterSubmit(e: Event): void {
      e.preventDefault();
      
      if (!this.newsletterForm) return;
      
      const emailInput = this.newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
      if (!emailInput || !this.validateEmail(emailInput.value)) {
        this.showToast('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate API call
      this.simulateApiCall('newsletter-subscribe', { email: emailInput.value })
        .then(response => {
          this.showToast('Thank you for subscribing!', 'success');
          emailInput.value = '';
        })
        .catch(error => {
          this.showToast('Subscription failed. Please try again.', 'error');
        });
    }
    
    private validateEmail(email: string): boolean {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    private showToast(message: string, type: 'success' | 'error' | 'info' = 'info'): void {
      // Create toast container if it doesn't exist
      let toastContainer = document.querySelector('.toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
        
        // Add toast container styles
        const style = document.createElement('style');
        style.textContent = `
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
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
          }
          .toast.show {
            opacity: 1;
            transform: translateY(0);
          }
          .toast.success { background-color: #338F7A; }
          .toast.error { background-color: #F59946; }
          .toast.info { background-color: #3498db; }
        `;
        document.head.appendChild(style);
      }
      
      // Create and show toast
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = message;
      toastContainer.appendChild(toast);
      
      // Trigger reflow to make transition work
      void toast.offsetWidth;
      toast.classList.add('show');
      
      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          toastContainer?.removeChild(toast);
        }, 300);
      }, 3000);
    }
    
    private initDistrictResources(): void {
      if (this.districtSelector) {
        this.districtSelector.addEventListener('change', () => {
          const selectedDistrict = this.districtSelector?.value;
          const districtResources = document.getElementById('district-resources');
          
          if (selectedDistrict && districtResources) {
            districtResources.style.display = 'flex';
            
            // Update links based on selected district
            const links = {
              'evacuation-plans': document.getElementById('evacuation-plans'),
              'emergency-contacts': document.getElementById('emergency-contacts'),
              'resource-centers': document.getElementById('resource-centers')
            };
            
            for (const [id, element] of Object.entries(links)) {
              if (element && element instanceof HTMLAnchorElement) {
                element.href = `districts/${selectedDistrict}/${id}.html`;
              }
            }
          } else if (districtResources) {
            districtResources.style.display = 'none';
          }
        });
      }
    }
    
    private initAccessibility(): void {
      // Font size controls
      const fontSizeControls = document.querySelectorAll('.accessibility-control[data-action="font-size"]');
      fontSizeControls.forEach(control => {
        control.addEventListener('click', (e) => {
          e.preventDefault();
          const direction = (e.currentTarget as HTMLElement).dataset.direction;
          this.adjustFontSize(direction === 'increase' ? 1 : -1);
        });
      });
      
      // High contrast toggle
      const contrastToggle = document.querySelector('.accessibility-control[data-action="contrast"]');
      if (contrastToggle) {
        contrastToggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleHighContrast();
        });
      }
      
      // Load saved accessibility settings
      this.loadAccessibilitySettings();
    }
    
    private adjustFontSize(step: number): void {
      const currentSize = parseInt(localStorage.getItem('fontSizeAdjustment') || '0');
      const newSize = Math.max(-2, Math.min(4, currentSize + step));
      
      localStorage.setItem('fontSizeAdjustment', newSize.toString());
      document.documentElement.style.setProperty('--font-size-adjustment', `${newSize * 0.125}rem`);
      
      this.showToast(`Font size ${step > 0 ? 'increased' : 'decreased'}`, 'info');
    }
    
    private toggleHighContrast(): void {
      const isHighContrast = document.body.classList.toggle('high-contrast');
      localStorage.setItem('highContrast', isHighContrast.toString());
      
      this.showToast(`High contrast mode ${isHighContrast ? 'enabled' : 'disabled'}`, 'info');
    }
    
    private loadAccessibilitySettings(): void {
      // Load font size
      const fontSizeAdjustment = localStorage.getItem('fontSizeAdjustment');
      if (fontSizeAdjustment) {
        document.documentElement.style.setProperty('--font-size-adjustment', `${parseInt(fontSizeAdjustment) * 0.125}rem`);
      }
      
      // Load high contrast
      const highContrast = localStorage.getItem('highContrast');
      if (highContrast === 'true') {
        document.body.classList.add('high-contrast');
      }
      
      // Add the CSS variables for accessibility if not already present
      if (!document.querySelector('#accessibility-styles')) {
        const style = document.createElement('style');
        style.id = 'accessibility-styles';
        style.textContent = `
          :root {
            --font-size-adjustment: 0rem;
          }
          
          body {
            font-size: calc(1rem + var(--font-size-adjustment));
          }
          
          body.high-contrast {
            background-color: #000 !important;
            color: #fff !important;
          }
          
          body.high-contrast a {
            color: #ffff00 !important;
          }
          
          body.high-contrast .btn:not(.btn-primary) {
            background-color: #333 !important;
            color: #fff !important;
            border: 2px solid #fff !important;
          }
          
          body.high-contrast .btn-primary {
            background-color: #ffff00 !important;
            color: #000 !important;
          }
        `;
        document.head.appendChild(style);
      }
    }
    
    private initCounter(): void {
      const counters = document.querySelectorAll('.counter-num .odometer');
      
      if (counters.length) {
        // Simulate getting counter data from an API
        this.fetchCounterData()
          .then(data => {
            counters.forEach(counter => {
              const element = counter as HTMLElement;
              const type = element.dataset.type;
              
              if (type && data[type as keyof CounterData]) {
                element.setAttribute('data-count', data[type as keyof CounterData].toString());
                // If Odometer.js is properly initialized, this will trigger the animation
              }
            });
          })
          .catch(error => {
            console.error('Error updating counters:', error);
          });
      }
    }
    
    private fetchCounterData(): Promise<CounterData> {
      // Simulate API fetch - in production, replace with actual API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            trainedPersonnel: 1285,
            evacuationCenters: 67,
            earlyWarningStations: 32,
            activeAlerts: 3
          });
        }, 500);
      });
    }
    
    private checkEmergencyAlerts(): void {
      // Simulate fetching alerts - in production, replace with actual API call
      this.fetchAlerts()
        .then(alerts => {
          this.currentAlerts = alerts;
          
          // Show emergency alert modal after 3 seconds if there are active alerts
          // and it hasn't been shown in this session
          if (alerts.length > 0 && !sessionStorage.getItem('alertShown')) {
            setTimeout(() => {
              const emergencyModal = document.getElementById('emergencyAlertModal');
              if (emergencyModal) {
                const contentElement = emergencyModal.querySelector('.modal-body');
                if (contentElement) {
                  contentElement.innerHTML = this.formatAlerts(alerts);
                }
                
                // Show modal using Bootstrap
                // @ts-ignore - Bootstrap types may not be available
                const modal = new bootstrap.Modal(emergencyModal);
                modal.show();
                
                sessionStorage.setItem('alertShown', 'true');
              }
            }, 3000);
          }
        })
        .catch(error => {
          console.error('Error fetching alerts:', error);
        });
    }
    
    private fetchAlerts(): Promise<AlertMessage[]> {
      // Simulate API fetch - in production, replace with actual API call
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
    }
    
    private formatAlerts(alerts: AlertMessage[]): string {
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
    }
    
    private simulateApiCall(endpoint: string, data: any): Promise<any> {
      // Simulate API call - in production, replace with actual API call
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
    }
    
    private trackSocialClick(e: Event): void {
      const link = e.currentTarget as HTMLElement;
      const platform = link.dataset.platform || 'unknown';
      
      // Simulate analytics tracking
      console.log(`Social click: ${platform}`);
      
      // If you have an analytics service, you would call it here
      // e.g., gtag('event', 'social_click', { 'platform': platform });
    }
  }
  
  // Initialize the footer when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const siteFooter = new SiteFooter();
    
    // Make available globally for debugging
    (window as any).siteFooter = siteFooter;
  });
  
  // Add CSS styles for back-to-top button
  const addBackToTopStyles = (): void => {
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
      `;
      document.head.appendChild(style);
    }
  };
  
  // Add cookie banner styles
  const addCookieBannerStyles = (): void => {
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
          display: none;
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
        
        @media (max-width: 768px) {
          #cookieConsentBanner .container {
            flex-direction: column;
          }
          
          #cookieConsentBanner p {
            margin: 0 0 15px 0;
            text-align: center;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };
  
  // Initialize styles when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    addBackToTopStyles();
    addCookieBannerStyles();
  });