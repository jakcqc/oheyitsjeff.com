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
        fg: '#eb6b28',
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
        accent: '#d8ccb2',
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

const defaultTheme = 'white-orange';

const applyPalette = (paletteName = defaultTheme) => {
    const palette = palettes[paletteName];

    Object.entries(cssVarNames).forEach(([key, cssName]) => {
        document.documentElement.style.setProperty(cssName, palette[key]);
        document.body.style.setProperty(cssName, palette[key]);
    });

    document.body.dataset.iconTheme = paletteName;
};

applyPalette();