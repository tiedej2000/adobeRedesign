document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('#home-section');
    const adobeListItem = document.querySelector('.list-item.adobe');
    const adobeTextElements = adobeListItem.querySelectorAll('p, h3');

    const observerHome = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                adobeListItem.style.backgroundColor = 'white';
                adobeTextElements.forEach(el => el.style.display = 'none');

                adobeListItem.style.display = 'grid';
                adobeListItem.style.placeContent = 'center';

                const image = new Image();
                image.src = 'images/adobe-red.png';
                image.alt = 'Adobe Logo';
                image.style.display = 'block';
                image.style.width = '100%';
                image.style.height = 'auto';

                const existingImage = adobeListItem.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }

                adobeListItem.appendChild(image);
            } else {
                adobeListItem.style.backgroundColor = '';
                adobeTextElements.forEach(el => el.style.display = '');

                adobeListItem.style.display = '';
                adobeListItem.style.placeContent = '';

                const existingImage = adobeListItem.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }
            }
        });
    }, {
        root: null,
        threshold: 0.1
    });

    observerHome.observe(homeSection);
});
