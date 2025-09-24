// ==UserScript==
// @name         WeebCentralLayoutModifier
// @namespace    http://tampermonkey.net/
// @version      2025-09-23
// @description  try to take over the world!
// @author       Apeple
// @match        https://weebcentral.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weebcentral.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const subscriptionQuerySelector = "body > main > section.bg-base-100.max-w-7xl.w-full.flex.flex-col.lg\\:grid.grid-cols-3.gap-4.mb-4 > section.bg-base-200.cols-span-1.md\\:col-span-2.rounded-sm";
    const subcriptionSection = document.querySelector(subscriptionQuerySelector);

    const hotUpdateQuerySelector = "body > main > section.bg-base-200.max-w-7xl.w-full.mb-4";
    const hotUpdatesSection = document.querySelector(hotUpdateQuerySelector);
    const hotUpdatesSectionClass = hotUpdatesSection.getAttribute('class');

    hotUpdatesSection.before(subcriptionSection);
    subcriptionSection.setAttribute('class', hotUpdatesSectionClass);
})();
