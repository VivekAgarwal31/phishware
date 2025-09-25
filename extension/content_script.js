// Injected into pages to collect lightweight signals
(function () {
  console.debug('[PhishAware] content_script loaded on', location.href);
  // Example heuristic placeholder
  const suspiciousWords = ['verify', 'update', 'password', 'account'];
  const text = document.body.innerText.toLowerCase();
  const hits = suspiciousWords.filter(w => text.includes(w));
  if (hits.length > 0) {
    chrome.runtime.sendMessage({ type: 'HEURISTIC_HIT', url: location.href, hits });
  }
})();
