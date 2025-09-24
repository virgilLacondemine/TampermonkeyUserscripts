// ==UserScript==
// @name         WeebCentralLayoutModifier
// @namespace    https://github.com/virgilLacondemine/TampermonkeyUserscripts
// @version      1.0.2
// @description  Modify default site layout. Place subscription section at the top before the hot update section.
// @author       Apeple
// @updateURL    https://raw.githubusercontent.com/virgilLacondemine/TampermonkeyUserscripts/main/WeebCentralLayoutModifier.js
// @downloadURL  https://raw.githubusercontent.com/virgilLacondemine/TampermonkeyUserscripts/main/WeebCentralLayoutModifier.js
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
