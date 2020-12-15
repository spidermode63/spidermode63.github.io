// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-plain-dark'){
       setTheme('theme-plain-dark');
   } else {
       setTheme('theme-plain-light');
   }
}
// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-plain-light') {
       setTheme('theme-plain-light');
   } else {
       setTheme('theme-plain-dark');
   }
})();