function setupToggle(buttonId, storageKey) {
  const btn = document.getElementById(buttonId);
  chrome.storage.sync.get([storageKey], (res) => {
    btn.innerText = res[storageKey] ? "Disable Blur" : "Enable Blur";
  });
  btn.addEventListener('click', () => {
    chrome.storage.sync.get([storageKey], (res) => {
      const newState = !res[storageKey];
      chrome.storage.sync.set({ [storageKey]: newState }, () => {
        btn.innerText = newState ? "Disable Blur" : "Enable Blur";
      });
    });
  });
}
setupToggle('toggleSidebar', 'blurSidebar');
setupToggle('toggleMessages', 'blurMessages');