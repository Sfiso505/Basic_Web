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
