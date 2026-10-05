// Preserve old homepage bookmarks after moving content to separate pages.
// Only known section names can redirect; no arbitrary URLs are accepted.
(() => {
  const destinations = {
    '#dashboard': 'pathways/', '#pathways': 'pathways/',
    '#model': 'mission/', '#mission': 'mission/',
    '#who-we-serve': 'mission/', '#coaching': 'coaching/',
    '#capital': 'capital/', '#partners': 'partners/',
    '#contact': 'contact/'
  };
  const followOldLink = () => {
    const destination = destinations[window.location.hash];
    if (destination) window.location.replace(new URL(destination, window.location.href));
  };
  followOldLink();
  window.addEventListener('hashchange', followOldLink);
})();
