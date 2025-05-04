/**
 * NDRRMC Digital Platform - Loader Initialization
 * All loaders have been disabled as requested
 */

// Simple function to hide all loaders
function hideAllLoaders() {
  // Get all loader elements
  var loaders = document.querySelectorAll('.page-loader-overlay, .position-fixed, .spinner-border, .section-loader');

  // Hide them
  for (var i = 0; i < loaders.length; i++) {
    if (loaders[i] && loaders[i].style) {
      loaders[i].style.display = 'none';
    }
  }

  // Make content visible
  var hiddenContent = document.querySelectorAll('.opacity-0, .fade-in');
  for (var j = 0; j < hiddenContent.length; j++) {
    if (hiddenContent[j] && hiddenContent[j].style) {
      hiddenContent[j].style.opacity = '1';
    }
  }
}

// Make hideAllLoaders available globally
window.hideAllLoaders = hideAllLoaders;

// Run on page load
document.addEventListener('DOMContentLoaded', function() {
  hideAllLoaders();
  ensurePromoSectionVisible();
});

window.addEventListener('load', function() {
  hideAllLoaders();
  ensurePromoSectionVisible();
});

// Run periodically
setInterval(hideAllLoaders, 1000);

// Listen for navigation events
document.addEventListener('click', function(e) {
  // Check if the click is on a navigation link
  var link = e.target.closest('a[href]');
  if (link) {
    var href = link.getAttribute('href');
    // If navigating to home page
    if (href === '/' || href === '/home' || href === '#') {
      // Set a timeout to ensure PromoSection is visible after navigation
      setTimeout(ensurePromoSectionVisible, 500);
    }
  }
});

// Function to ensure the PromoSection is visible on the home page
function ensurePromoSectionVisible() {
  // Check if we're on the home page
  if (window.location.pathname === '/' || window.location.pathname === '/home') {
    // Find the promo section
    var promoSection = document.querySelector('.promo-section');
    var promoContainer = document.getElementById('promo-section-container');

    if (promoSection) {
      // Make sure it's visible
      promoSection.style.display = 'block';
      promoSection.style.visibility = 'visible';
      promoSection.style.opacity = '1';

      if (promoContainer) {
        promoContainer.style.display = 'block';
        promoContainer.style.visibility = 'visible';
        promoContainer.style.opacity = '1';
      }

      // Force the promo-wrap to be visible with the correct positioning
      var promoWrap = document.querySelector('.promo-wrap');
      if (promoWrap) {
        promoWrap.style.display = 'flex';
        promoWrap.style.visibility = 'visible';
        promoWrap.style.opacity = '1';
        promoWrap.style.position = 'relative';
        promoWrap.style.zIndex = '5';
        promoWrap.style.marginTop = '-150px';
      }
    }
  }
}
