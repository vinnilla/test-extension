
// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const fullUrl = changeInfo.url;

  // check for a URL in the changeInfo parameter
  if (fullUrl) {
    console.log(fullUrl)
    chrome.storage.local.get('browserHistory', async function(storage){
      const history = storage.browserHistory || [];
      history.push(fullUrl);
      await chrome.storage.local.set({ browserHistory: history });
    });
  }
});