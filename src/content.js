function applyStyles() {
  chrome.storage.sync.get(['blurSidebar', 'blurMessages'], (res) => {
    document.body.classList.toggle('blur-sidebar', res.blurSidebar);
    document.body.classList.toggle('blur-messages', res.blurMessages);
  });
}
chrome.storage.onChanged.addListener(applyStyles);
applyStyles();