/* Service Worker (Background) for Phish Aware */
console.log('[PhishAware] Service worker initialized');

chrome.runtime.onInstalled.addListener(() => {
  console.log('[PhishAware] Extension installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PING') {
    sendResponse({ ok: true, ts: Date.now() });
  }
});
