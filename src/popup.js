function setupToggle(buttonId, storageKey, label) {
  const btn = document.getElementById(buttonId);

  // স্টেট রিড করা
  chrome.storage.sync.get([storageKey], (res) => {
    btn.textContent = res[storageKey] ? `Show ${label}` : `Hide ${label}`;
  });

  btn.addEventListener('click', () => {
    chrome.storage.sync.get([storageKey], (res) => {
      const newState = !res[storageKey];
      chrome.storage.sync.set({ [storageKey]: newState }, () => {
        btn.textContent = newState ? `Show ${label}` : `Hide ${label}`;
      });
    });
  });
}

setupToggle('toggleTitles', 'blurTitles', 'Titles');
setupToggle('togglePictures', 'blurPictures', 'Pictures');
setupToggle('toggleMessages', 'blurMessages', 'Messages');