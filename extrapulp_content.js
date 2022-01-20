'use strict';

const elem = document.createElement('script');
elem.src = chrome.runtime.getURL('extrapulp_inject.js')
document.getElementsByTagName('html')[0].appendChild(elem);
