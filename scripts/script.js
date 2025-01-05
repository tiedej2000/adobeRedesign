document.addEventListener('DOMContentLoaded', () => {
    // Select the home section, adobe section, and the Adobe list item
    const homeSection = document.querySelector('#home-section');
    const adobeListItem = document.querySelector('.list-item.adobe'); // The Adobe list item

    // Select the text elements inside the Adobe list item
    const adobeTextElements = adobeListItem.querySelectorAll('p, h3');

    // Create a new IntersectionObserver for the home section
    const observerHome = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the home section is in view, make the background white, hide the text, and adjust the layout
                adobeListItem.style.backgroundColor = 'white';
                adobeTextElements.forEach(el => el.style.display = 'none'); // Hide text elements by setting display to none

                // Set the list item to use grid and center the content
                adobeListItem.style.display = 'grid';
                adobeListItem.style.placeContent = 'center'; // Center the image

                // Show the image
                const image = new Image();
                image.src = 'images/adobe-red.png';
                image.alt = 'Adobe Logo';
                image.style.display = 'block';
                image.style.width = '100%'; // Adjust the image size if needed
                image.style.height = 'auto';

                // If an image already exists, remove it before adding a new one
                const existingImage = adobeListItem.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }

                adobeListItem.appendChild(image); // Add the image to the list item
            } else {
                // When the home section is not in view, reset the styles
                adobeListItem.style.backgroundColor = ''; // Reset background color
                adobeTextElements.forEach(el => el.style.display = ''); // Reset text visibility (restore the display value)

                // Reset the layout back to the original state
                adobeListItem.style.display = ''; // Reset display property
                adobeListItem.style.placeContent = ''; // Reset place-content property

                // Remove the image
                const existingImage = adobeListItem.querySelector('img');
                if (existingImage) {
                    existingImage.remove();
                }
            }
        });
    }, {
        root: null, // Observing relative to the viewport
        threshold: 0.1 // Trigger when any part of the section is visible
    });

    // Start observing the home section
    observerHome.observe(homeSection);
});
