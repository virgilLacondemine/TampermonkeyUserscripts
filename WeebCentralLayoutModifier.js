// ==UserScript==
// @name         WeebCentralLayoutModifier
// @namespace    https://github.com/virgilLacondemine/TampermonkeyUserscripts
// @version      1.0.4
// @description  Modify default site layout
// @author       Apeple
// @updateURL    https://raw.githubusercontent.com/virgilLacondemine/TampermonkeyUserscripts/main/WeebCentralLayoutModifier.js
// @downloadURL  https://raw.githubusercontent.com/virgilLacondemine/TampermonkeyUserscripts/main/WeebCentralLayoutModifier.js
// @match        https://weebcentral.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weebcentral.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    homepageUpdate();
    readerHomeBtn();
})();

/*
 * Move the subcription section up before the hot update section.
 */
function homepageUpdate()
{
    const subscriptionQuerySelector = "body > main > section.bg-base-100.max-w-7xl.w-full.flex.flex-col.lg\\:grid.grid-cols-3.gap-4.mb-4 > section.bg-base-200.cols-span-1.md\\:col-span-2.rounded-sm";
    const subcriptionSection = document.querySelector(subscriptionQuerySelector);

    const hotUpdateQuerySelector = "body > main > section.bg-base-200.max-w-7xl.w-full.mb-4";
    const hotUpdatesSection = document.querySelector(hotUpdateQuerySelector);

    if (!hotUpdatesSection || !subcriptionSection) {
        return;
    }

    const hotUpdatesSectionClass = hotUpdatesSection.getAttribute('class');

    hotUpdatesSection.before(subcriptionSection);
    subcriptionSection.setAttribute('class', hotUpdatesSectionClass);
}

/*
 * Add a back to homepage button at the end of the reader.
 */
function readerHomeBtn()
{
    const btnContainer = document.querySelector("body > main > section.w-full.max-w-7xl.px-4");

    if (!btnContainer) {
        return;
    }

    const homeBtn = document.createElement('a');
    homeBtn.setAttribute('href', 'https://weebcentral.com/');
    homeBtn.setAttribute('class', 'w-full btn btn-secondary');
    homeBtn.setAttribute('style', 'margin-bottom: 16px;');
    homeBtn.innerHTML = "Home";

    console.log(homeBtn);

    btnContainer.prepend(homeBtn);
}
