navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach((section, i) => {
            if (i === index) {
                // Highlight the selected section by changing the background color
                section.style.backgroundColor = '#fff';
                
                // Scroll to the selected section and position it just below the navigation bar
                window.scrollTo({
                    top: section.offsetTop - 100, // Adjust the offset as needed
                    behavior: 'smooth',
                });
            } else {
                // Reset other sections to their default background color
                section.style.backgroundColor = 'transparent';
            }
        });
        updateActiveLink(index);
    });
});
