import { useEffect } from 'react';

const TikTokPixel = () => {
    useEffect(() => {
        (function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
            ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                }
            };
            for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function (t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
                return e;
            };
            ttq.load = function (e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
                var o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(o, a);
            };

            ttq.load('CS4PMEJC77U230TJPQO0');
            ttq.page();
        }(window, document, 'ttq'));

        // Function to send server-side event
        const sendServerEvent = async (eventName, eventParams) => {
            try {
                await fetch('/api/track-tiktok-event', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ eventName, eventParams })
                });
            } catch (error) {
                console.error('Error sending server event:', error);
            }
        };

        // Track Chrome Web Store download button click
        const chromeButton = document.querySelector('a[href*="chromewebstore.google.com"]');
        if (chromeButton) {
            chromeButton.addEventListener('click', () => {
                ttq.track('ClickButton', {
                    content_name: 'Chrome Web Store Download',
                    content_type: 'product'
                });
                sendServerEvent('ClickButton', {
                    content_name: 'Chrome Web Store Download',
                    content_type: 'product',
                    url: window.location.href
                });
            });
        }

        // Track Product Hunt button click
        const productHuntButton = document.querySelector('a[href*="producthunt.com"]');
        if (productHuntButton) {
            productHuntButton.addEventListener('click', () => {
                ttq.track('ClickButton', {
                    content_name: 'Product Hunt',
                    content_type: 'product'
                });
                sendServerEvent('ClickButton', {
                    content_name: 'Product Hunt',
                    content_type: 'product',
                    url: window.location.href
                });
            });
        }
    }, []);

    return null;
};

export default TikTokPixel;