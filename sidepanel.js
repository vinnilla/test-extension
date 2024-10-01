// access chrome.storage.local
chrome.storage.local.get('browserHistory', function(storage) {
  const history = storage.browserHistory || [];
  const listElement = document.querySelector('#history');

  history.forEach((url) => {
    const newElement = document.createElement('p');
    newElement.append(url);
    newElement.classList.add('url');
  
    listElement.append(newElement);
  });
})