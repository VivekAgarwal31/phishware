document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');
  const result = document.getElementById('result');
  document.getElementById('scanBtn').addEventListener('click', async () => {
    status.textContent = 'Scanning...';
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const url = tab?.url || '';
      // Placeholder scoring logic
      const score = simpleHash(url) % 100;
      result.textContent = `Risk score for this URL: ${score}/100`;
      status.textContent = 'Done';
    } catch (e) {
      console.error(e);
      status.textContent = 'Error';
    }
  });
});
