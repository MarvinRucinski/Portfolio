const DARK_MODE_QUERY = '(prefers-color-scheme: dark)';

function isExternalOrAbsolutePath(path) {
    return /^(https?:)?\/\//.test(path) || path.startsWith('/');
}

function withBasePath(path, basePath) {
    if (!path) {
        return null;
    }

    if (!basePath || isExternalOrAbsolutePath(path)) {
        return path;
    }

    return `${basePath}${path}`;
}

function normalizeThemePart(part) {
    if (!part || typeof part !== 'object') {
        return {};
    }

    return {
        src: part.src,
        style: part.style,
        className: part.className,
    };
}

export function getInitialDarkMode() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return false;
    }

    return window.matchMedia(DARK_MODE_QUERY).matches;
}

export function getDarkModeMediaQuery() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return null;
    }

    return window.matchMedia(DARK_MODE_QUERY);
}

export function resolveThemeAsset(asset, options = {}) {
    const { isDarkMode = false, basePath = '' } = options;

    if (!asset) {
        return {
            src: null,
            style: undefined,
            className: '',
        };
    }

    if (typeof asset === 'string') {
        return {
            src: withBasePath(asset, basePath),
            style: undefined,
            className: '',
        };
    }

    const lightPart = normalizeThemePart(asset.light);
    const darkPart = normalizeThemePart(asset.dark);
    const selectedPart = isDarkMode ? darkPart : lightPart;

    const fallbackSrc = asset.src || lightPart.src || darkPart.src;
    const selectedSrc = selectedPart.src || fallbackSrc;
    const selectedStyle = selectedPart.style ?? asset.style;
    const selectedClassName = [asset.className, selectedPart.className].filter(Boolean).join(' ');

    return {
        src: withBasePath(selectedSrc, basePath),
        style: selectedStyle,
        className: selectedClassName,
    };
}
