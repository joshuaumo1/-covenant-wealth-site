// Keep existing service bookmarks working after forms move to dedicated pages.
(() => {
  const routes = {
    coaching: { '#request-coaching': 'request/', '#become-coach': 'apply/' },
    capital: {
      '#capital-readiness': 'readiness/',
      '#donate': 'one-time-gift/',
      '#monthly-partner': 'monthly-partner/'
    }
  };
  const followOldLink = () => {
    const destination = routes[document.body.dataset.service]?.[window.location.hash];
    if (destination) window.location.replace(new URL(destination, window.location.href));
  };
  followOldLink();
  window.addEventListener('hashchange', followOldLink);
})();
