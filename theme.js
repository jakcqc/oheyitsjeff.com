const themeButtons = document.querySelectorAll('[data-theme]');
const openCustomButton = document.querySelector('[data-open-custom]');
const closeCustomButton = document.querySelector('[data-close-custom]');
const customPanel = document.querySelector('[data-custom-palette]');
const colorInputs = document.querySelectorAll('[data-color-var]');
const defaultTheme = 'orange-paper';
const themeStorageKey = 'feller-icon-theme';
const customStorageKey = 'feller-custom-theme';

const palettes = {
    'orange-paper': {
        bg: '#f5b78b',
        accent: '#eb6b28',
        fg: '#000000',
        surface: '#f6f3ea',
        iconColor: '#000000',
        linkHover: '#ffffff'
    },
    'paper-orange': {
        bg: '#f6f3ea',
        accent: '#eb6b28',
        fg: '#000000',
        surface: '#d8ccb2',
        iconColor: '#eb6b28',
        linkHover: '#ffffff'
    },
    'tan-black': {
        bg: '#d8ccb2',
        accent: '#000000',
        fg: '#000000',
        surface: '#f6f3ea',
        iconColor: '#000000',
        linkHover: '#ffffff'
    },
    'black-orange': {
        bg: '#000000',
        accent: '#eb6b28',
        fg: '#f6f3ea',
        surface: '#f6f3ea',
        iconColor: '#eb6b28',
        linkHover: '#000000'
    },
    'white-orange': {
        bg: '#ffffff',
        accent: '#eb6b28',
        fg: '#000000',
        surface: '#f6f3ea',
        iconColor: '#eb6b28',
        linkHover: '#ffffff'
    },
    'orange-black': {
        bg: '#eb6b28',
        accent: '#000000',
        fg: '#000000',
        surface: '#f6f3ea',
        iconColor: '#000000',
        linkHover: '#ffffff'
    },
    'light-deep': {
        bg: '#f5b78b',
        accent: '#000000',
        fg: '#000000',
        surface: '#f6f3ea',
        iconColor: '#000000',
        linkHover: '#ffffff'
    },
    'deep-tan': {
        bg: '#eb6b28',
        accent: '#eb6b28',
        fg: '#000000',
        surface: '#d8ccb2',
        iconColor: '#d8ccb2',
        linkHover: '#eb6b28'
    },
    'tan-orange': {
        bg: '#d8ccb2',
        accent: '#eb6b28',
        fg: '#eb6b28',
        surface: '#f6f3ea',
        iconColor: '#eb6b28',
        linkHover: '#ffffff'
    },
    'paper-black': {
        bg: '#f6f3ea',
        accent: '#000000',
        fg: '#000000',
        surface: '#ffffff',
        iconColor: '#000000',
        linkHover: '#ffffff'
    },
    'tan-white': {
        bg: '#d8ccb2',
        accent: '#ffffff',
        fg: '#000000',
        surface: '#eb6b28',
        iconColor: '#ffffff',
        linkHover: '#000000'
    }
};

const cssVarNames = {
    bg: '--bg',
    accent: '--accent',
    fg: '--fg',
    surface: '--surface',
    iconColor: '--icon-color',
    linkHover: '--link-hover'
};

const getSavedCustomPalette = () => {
    try {
        return JSON.parse(localStorage.getItem(customStorageKey)) || {};
    } catch {
        return {};
    }
};

const saveCustomPalette = (palette) => {
    localStorage.setItem(customStorageKey, JSON.stringify(palette));
};

const setInputs = (palette) => {
    colorInputs.forEach((input) => {
        input.value = palette[input.dataset.colorVar] || '#000000';
    });
};

const applyPalette = (paletteName, overrides = {}) => {
    const basePalette = palettes[paletteName] || palettes[defaultTheme];
    const palette = { ...basePalette, ...overrides };

    Object.entries(cssVarNames).forEach(([key, cssName]) => {
        document.documentElement.style.setProperty(cssName, palette[key]);
        document.body.style.setProperty(cssName, palette[key]);
    });

    document.body.dataset.iconTheme = paletteName;
    localStorage.setItem(themeStorageKey, paletteName);
    setInputs(palette);
};

const currentTheme = () => localStorage.getItem(themeStorageKey) || defaultTheme;

applyPalette(currentTheme(), getSavedCustomPalette()[currentTheme()]);

themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        applyPalette(button.dataset.theme, getSavedCustomPalette()[button.dataset.theme]);
    });
});

openCustomButton?.addEventListener('click', () => {
    if (customPanel) {
        customPanel.hidden = false;
    }
});

closeCustomButton?.addEventListener('click', () => {
    if (customPanel) {
        customPanel.hidden = true;
    }
});

colorInputs.forEach((input) => {
    input.addEventListener('input', () => {
        const paletteName = currentTheme();
        const customPalettes = getSavedCustomPalette();
        const customPalette = {
            ...palettes[paletteName],
            ...customPalettes[paletteName],
            [input.dataset.colorVar]: input.value
        };

        customPalettes[paletteName] = customPalette;
        saveCustomPalette(customPalettes);
        applyPalette(paletteName, customPalette);
    });
});
