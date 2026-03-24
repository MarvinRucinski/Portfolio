const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const isDoNotTrackEnabled =
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1' ||
    navigator.msDoNotTrack === '1';

function canTrack() {
    return import.meta.env.PROD && Boolean(GA_MEASUREMENT_ID) && !isDoNotTrackEnabled;
}

export function initAnalytics() {
    if (!canTrack()) {
        return false;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        allow_google_signals: false,
        send_page_view: false,
    });

    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(gaScript);

    return true;
}

export function trackPageView(route) {
    if (typeof window.gtag !== 'function' || !route) {
        return;
    }

    const pagePath = `/#${route.fullPath}`;
    window.gtag('event', 'page_view', {
        page_title: document.title,
        page_path: pagePath,
        page_location: `${window.location.origin}${pagePath}`,
    });
}

export function trackEvent(eventName, params = {}) {
    if (typeof window.gtag !== 'function' || !eventName) {
        return;
    }

    window.gtag('event', eventName, params);
}
