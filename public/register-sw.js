// Script to register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Handle offline/online status changes
function updateOnlineStatus() {
  const status = document.getElementById('online-status');
  const isOnline = navigator.onLine;
  
  if (status) {
    if (isOnline) {
      status.textContent = 'You are online';
      status.classList.remove('offline');
      status.classList.add('online');
      
      // Auto-hide after 3 seconds
      setTimeout(() => {
        status.style.display = 'none';
      }, 3000);
    } else {
      status.textContent = 'You are offline - some features may be limited';
      status.style.display = 'block';
      status.classList.remove('online');
      status.classList.add('offline');
    }
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Check status on page load
window.addEventListener('DOMContentLoaded', updateOnlineStatus);

// Send analytics events (with offline support)
window.sendAnalytics = function(eventData) {
  // Try regular transmission
  if (navigator.onLine) {
    // Implement your analytics sending logic here
    console.log('Sending analytics:', eventData);
    return;
  }
  
  // If offline and service worker is active, store for later
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'STORE_ANALYTICS',
      payload: eventData
    });
  }
}; 