const toggleModeButton = document.getElementById('toggle-mode');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleModeButton.textContent = isDarkMode ? '🌞' : '🌙';
});

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.textContent = menu.classList.contains('active') ? '✕' : '☰';
    document.body.classList.toggle('menu-open');
});

// Close the menu when clicking on links
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.textContent = '☰';
        document.body.classList.remove('menu-open');
    });
});
