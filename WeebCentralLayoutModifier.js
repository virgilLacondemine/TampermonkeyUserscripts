// ==UserScript==
// @name         WeebCentralLayoutModifier
// @namespace    https://github.com/virgilLacondemine/TampermonkeyUserscripts
// @version      1.0.5
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
    readerSubscriptionBtn();
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

    const homeIcon = '<svg class="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>';

    const homeBtn = getReaderBtn({
        url: 'https://weebcentral.com/',
        text: "Home",
        icon: homeIcon,
    });

    btnContainer.prepend(homeBtn);
}

/*
 * Add a go to subscription page button at the end of the reader.
 */
function readerSubscriptionBtn()
{
    const btnContainer = document.querySelector("body > main > section.w-full.max-w-7xl.px-4");

    if (!btnContainer) {
        return;
    }

    const subscriptionIcon = '<svg class="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg>'

    const susbcriptionBtn = getReaderBtn({
        url: 'https://weebcentral.com/users/me/subscriptions',
        text: "Subscription",
        icon: subscriptionIcon,
    });

    btnContainer.prepend(susbcriptionBtn);
}

/*
 * Helper function to create reader footer extra buttons
 */
function getReaderBtn({url, text, icon})
{
    const readerBtn = document.createElement('a');
    readerBtn.setAttribute('href', url);
    readerBtn.setAttribute('class', 'w-full btn btn-secondary');
    readerBtn.setAttribute('style', 'margin-bottom: 16px;');
    readerBtn.innerHTML = icon + " " + text;

    return readerBtn;
}
