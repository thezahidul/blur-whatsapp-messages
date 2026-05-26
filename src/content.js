function applyBlur() {
    chrome.storage.sync.get(['blurTitles', 'blurPictures', 'blurMessages'], (res) => {
        document.body.classList.toggle('blur-titles', !!res.blurTitles);
        document.body.classList.toggle('blur-pictures', !!res.blurPictures);
        document.body.classList.toggle('blur-messages', !!res.blurMessages);
    });
}

// WhatsApp রেন্ডারিং ম্যানেজ করার জন্য Observer
const observer = new MutationObserver(applyBlur);
observer.observe(document.body, { childList: true, subtree: true });

chrome.storage.onChanged.addListener(applyBlur);
applyBlur();