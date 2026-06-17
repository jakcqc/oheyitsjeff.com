const readTextFile = async (source) => {
    const response = await fetch(source, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error(`Unable to load ${source}`);
    }

    return response.text();
};

const splitParagraphs = (text) => text
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const splitLines = (text) => text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const parseLinkLine = (line) => {
    const separatorIndex = line.indexOf(':');

    if (separatorIndex === -1) {
        return null;
    }

    return {
        title: line.slice(0, separatorIndex).trim(),
        url: line.slice(separatorIndex + 1).trim()
    };
};

const showContentError = (container, error) => {
    container.innerHTML = '';
    const message = document.createElement('p');
    message.className = 'content-error';
    message.textContent = `${error.message}. Serve this folder with a local web server so text files can be read.`;
    container.append(message);
};

const renderLinks = async (container) => {
    const text = await readTextFile(container.dataset.source);
    const listClass = container.dataset.listClass || 'contact-links';
    const wrapper = document.createElement(container.dataset.ordered === 'true' ? 'ol' : 'section');
    wrapper.className = listClass;

    splitLines(text).forEach((line) => {
        const linkData = parseLinkLine(line);

        if (!linkData) {
            return;
        }

        const item = container.dataset.ordered === 'true' ? document.createElement('li') : null;
        const link = document.createElement('a');
        link.href = linkData.url;
        link.textContent = linkData.title;

        if (item) {
            item.append(link);
            wrapper.append(item);
        } else {
            wrapper.append(link);
        }
    });

    container.replaceChildren(wrapper);
};

const renderShows = async (container) => {
    const text = await readTextFile(container.dataset.source);
    const wrapper = document.createElement('section');
    wrapper.className = 'show-list';
    wrapper.setAttribute('aria-label', 'Show listings');

    splitParagraphs(text).forEach((paragraph) => {
        const lines = splitLines(paragraph);
        const showUrl = lines.find((line) => /^https?:\/\//i.test(line));
        const detailLines = lines.filter((line) => line !== showUrl);
        const entry = document.createElement('a');
        entry.href = showUrl || '#';

        if (showUrl) {
            entry.target = '_blank';
            entry.rel = 'noopener noreferrer';
        }

        detailLines.forEach((line) => {
            const span = document.createElement('span');
            span.textContent = line;
            entry.append(span);
        });

        wrapper.append(entry);
    });

    container.replaceChildren(wrapper);
};

const renderPhotos = async (container) => {
    const text = await readTextFile(container.dataset.source);
    const root = container.dataset.assetRoot || 'pictures/';
    const wrapper = document.createElement('section');
    wrapper.className = 'photo-grid';
    const photos = splitLines(text).map((filename) => ({
        filename,
        src: `${root}${filename}`,
        title: filename.replace(/\.[^.]+$/, '').replaceAll('_', ' ')
    }));

    photos.forEach((photo, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'photo-button';
        button.dataset.photoIndex = index;

        const image = document.createElement('img');
        image.src = photo.src;
        image.alt = photo.title;

        if (index === 0 || index % 4 === 0) {
            button.classList.add('wide');
        }

        button.append(image);
        button.addEventListener('click', () => openImageViewer(photos, index));
        wrapper.append(button);
    });

    container.replaceChildren(wrapper);
};

let activePhotos = [];
let activePhotoIndex = 0;
let activeZoom = 1;

const getImageViewer = () => {
    const viewer = document.querySelector('[data-image-viewer]');

    if (!viewer) {
        return null;
    }

    return {
        viewer,
        image: viewer.querySelector('.image-viewer-stage img'),
        title: viewer.querySelector('.image-viewer-title'),
        stage: viewer.querySelector('.image-viewer-stage')
    };
};

const renderActiveImage = () => {
    const parts = getImageViewer();
    const photo = activePhotos[activePhotoIndex];

    if (!parts || !photo) {
        return;
    }

    parts.image.src = photo.src;
    parts.image.alt = photo.title;
    parts.image.style.transform = `scale(${activeZoom})`;
    parts.title.textContent = `${photo.title} / ${activePhotoIndex + 1} of ${activePhotos.length}`;
};

const openImageViewer = (photos, index) => {
    const parts = getImageViewer();

    if (!parts) {
        return;
    }

    activePhotos = photos;
    activePhotoIndex = index;
    activeZoom = 1;
    parts.viewer.hidden = false;
    renderActiveImage();
};

const closeImageViewer = () => {
    const parts = getImageViewer();

    if (!parts) {
        return;
    }

    parts.viewer.hidden = true;
    parts.image.src = '';
};

const moveImage = (direction) => {
    if (activePhotos.length === 0) {
        return;
    }

    activePhotoIndex = (activePhotoIndex + direction + activePhotos.length) % activePhotos.length;
    activeZoom = 1;
    renderActiveImage();
};

const zoomImage = (amount) => {
    activeZoom = Math.min(4, Math.max(0.5, activeZoom + amount));
    renderActiveImage();
};

const resetImageZoom = () => {
    activeZoom = 1;
    renderActiveImage();
};

const requestViewerFullscreen = () => {
    const parts = getImageViewer();

    if (!parts) {
        return;
    }

    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        parts.viewer.requestFullscreen?.();
    }
};

const renderArtwork = async (container) => {
    const text = await readTextFile(container.dataset.source);
    const root = container.dataset.assetRoot || 'pictures/';
    const wrapper = document.createElement('section');
    wrapper.className = 'artwork-grid';

    splitParagraphs(text).forEach((paragraph) => {
        const [title, filename, ...descriptionLines] = splitLines(paragraph);

        if (!title || !filename) {
            return;
        }

        const link = document.createElement('a');
        link.href = `${root}${filename}`;

        const image = document.createElement('img');
        image.src = `${root}${filename}`;
        image.alt = title;

        const label = document.createElement('span');
        label.textContent = title;

        link.append(image, label);

        if (descriptionLines.length > 0) {
            const description = document.createElement('p');
            description.textContent = descriptionLines.join(' ');
            link.append(description);
        }

        wrapper.append(link);
    });

    container.replaceChildren(wrapper);
};

const isLocalVideo = (source) => /\.mp4($|\?)/i.test(source);

const openVideoPlayer = (entry) => {
    if (!isLocalVideo(entry.source)) {
        return;
    }

    const panel = document.querySelector('[data-video-player]');
    const stage = panel?.querySelector('.video-stage');
    const title = panel?.querySelector('.video-player-title');

    if (!panel || !stage || !title) {
        return;
    }

    stage.innerHTML = '';
    title.textContent = entry.titleText || entry.title;

    const video = document.createElement('video');
    video.src = `videos/${entry.source}`;
    video.controls = true;
    video.playsInline = true;
    video.setAttribute('controlsList', 'nodownload');
    stage.append(video);
    video.play().catch(() => {});

    panel.hidden = false;
};

const renderVideos = async (container) => {
    const text = await readTextFile(container.dataset.source);
    const root = container.dataset.assetRoot || 'pictures/';
    const wrapper = document.createElement('section');
    wrapper.className = 'video-grid';

    splitParagraphs(text).flatMap(splitLines).forEach((line, index) => {
        const linkData = parseLinkLine(line);

        if (!linkData) {
            return;
        }

        const [title, titleText] = linkData.title.split('/').map((part) => part.trim());
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'video-card';
        button.dataset.videoSource = linkData.url;

        const image = document.createElement('img');
        image.src = index % 2 === 0 ? `${root}IMG_3.png` : `${root}feller_doorhinge.jpeg`;
        image.alt = title;

        const label = document.createElement('span');
        label.textContent = title;

        if (titleText) {
            const description = document.createElement('p');
            description.textContent = titleText;
            button.append(image, label, description);
        } else {
            button.append(image, label);
        }

        button.addEventListener('click', () => {
            if (isLocalVideo(linkData.url)) {
                openVideoPlayer({
                    title,
                    titleText,
                    source: linkData.url
                });
                return;
            }

            window.open(linkData.url, '_blank', 'noopener,noreferrer');
        });

        wrapper.append(button);
    });

    container.replaceChildren(wrapper);
};

const renderers = {
    links: renderLinks,
    shows: renderShows,
    photos: renderPhotos,
    artwork: renderArtwork,
    videos: renderVideos
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-content-type]').forEach(async (container) => {
        const renderer = renderers[container.dataset.contentType];

        if (!renderer) {
            return;
        }

        try {
            await renderer(container);
        } catch (error) {
            showContentError(container, error);
        }
    });

    document.querySelectorAll('[data-close-video]').forEach((button) => {
        button.addEventListener('click', () => {
            const panel = button.closest('[data-video-player]');
            const stage = panel?.querySelector('.video-stage');

            if (stage) {
                stage.innerHTML = '';
            }

            if (panel) {
                panel.hidden = true;
            }
        });
    });

    document.querySelector('[data-image-close]')?.addEventListener('click', closeImageViewer);
    document.querySelector('[data-image-prev]')?.addEventListener('click', () => moveImage(-1));
    document.querySelector('[data-image-next]')?.addEventListener('click', () => moveImage(1));
    document.querySelector('[data-image-zoom-out]')?.addEventListener('click', () => zoomImage(-0.25));
    document.querySelector('[data-image-zoom-in]')?.addEventListener('click', () => zoomImage(0.25));
    document.querySelector('[data-image-reset]')?.addEventListener('click', resetImageZoom);
    document.querySelector('[data-image-fullscreen]')?.addEventListener('click', requestViewerFullscreen);

    document.addEventListener('keydown', (event) => {
        const parts = getImageViewer();

        if (!parts || parts.viewer.hidden) {
            return;
        }

        if (event.key === 'Escape') {
            closeImageViewer();
        } else if (event.key === 'ArrowLeft') {
            moveImage(-1);
        } else if (event.key === 'ArrowRight') {
            moveImage(1);
        } else if (event.key === '+' || event.key === '=') {
            zoomImage(0.25);
        } else if (event.key === '-') {
            zoomImage(-0.25);
        } else if (event.key === '0') {
            resetImageZoom();
        }
    });
});
