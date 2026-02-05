(function () {
    const storageKey = 'portfolio-theme';
    const root = document.documentElement;
    const toggleButtons = Array.from(document.querySelectorAll('.theme-toggle'));

    const setTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem(storageKey, theme);

        toggleButtons.forEach((btn) => {
            const isDark = theme === 'dark';
            btn.setAttribute('aria-pressed', String(isDark));
            const icon = btn.querySelector('.theme-toggle-icon');
            const text = btn.querySelector('.theme-toggle-text');
            if (icon) {
                icon.textContent = isDark ? '☀️' : '🌙';
            }
            if (text) {
                text.textContent = isDark ? 'Light' : 'Dark';
            }
            btn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
        });
    };

    const savedTheme = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    toggleButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const current = root.getAttribute('data-theme') || 'dark';
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    });
})();
