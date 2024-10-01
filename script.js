const lightModeIcon = document.getElementById('light-mode');
const darkModeIcon = document.getElementById('dark-mode');
const body = document.body;
const main = document.querySelector('main');
const sections = document.querySelectorAll('.sectionss');
const hexagons = document.querySelectorAll('.projects .hexagon-group-container .hexagon');

lightModeIcon.addEventListener('click', function() {
    // Activate light mode
    body.classList.add('light-mode');
    main.classList.add('light-mode');
    sections.forEach(section => section.classList.add('light-mode'));
    hexagons.forEach(hexagon => hexagon.classList.add('light-mode'));
    
    // Toggle visibility of icons
    lightModeIcon.classList.add('hidden');
    darkModeIcon.classList.remove('hidden');
});

darkModeIcon.addEventListener('click', function() {
    // Deactivate light mode
    body.classList.remove('light-mode');
    main.classList.remove('light-mode');
    sections.forEach(section => section.classList.remove('light-mode'));
    hexagons.forEach(hexagon => hexagon.classList.remove('light-mode'));
    
    // Toggle visibility of icons
    darkModeIcon.classList.add('hidden');
    lightModeIcon.classList.remove('hidden');
});
