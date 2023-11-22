function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';

        const header = document.querySelector('header');
        const welcomeSection = document.getElementById('welcome');

        if (sectionId === 'about') {
            header.style.display = 'block';
            welcomeSection.style.display = 'block';
        } else {
            header.style.display = 'none';
            welcomeSection.style.display = 'none';
        }
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Ensure two digits for hours, minutes, and seconds
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;

    // Update the clock element
    document.getElementById('clock').textContent = timeString;

    // Update every second
    setTimeout(updateClock, 1000);
}

// Initial call to display the clock
updateClock();

    // Function to adjust styles based on screen size
    function adjustStyles() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Check if the screen width is less than 768px (typical phones)
        if (screenWidth < 768) {
            document.getElementById('contacts').style.textAlign = 'center';
            document.querySelector('.profile-image').style.margin = '20px auto';
            document.querySelector('.download-cv-button').style.marginTop = '20px';
            document.querySelector('#clock').style.marginTop = '20px';
        } else {
            // Reset styles for larger screens
            document.getElementById('contacts').style.textAlign = 'left';
            document.querySelector('.profile-image').style.margin = '20px 0';
            document.querySelector('.download-cv-button').style.marginTop = '0';
            document.querySelector('#clock').style.marginTop = '0';
        }
    }

    // Initial call to adjust styles when the page loads
    adjustStyles();

    // Event listener to adjust styles when the window is resized
    window.addEventListener('resize', adjustStyles);