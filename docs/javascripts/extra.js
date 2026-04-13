function updateYear() {
    var yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Update the year when the site is initially loaded
window.addEventListener('DOMContentLoaded', updateYear);

// Update the year when a new page is loaded
var observer = new MutationObserver(updateYear);
observer.observe(document.body, {childList: true});

// Re-populate years-of-experience on every instant navigation (MkDocs Material SPA)
document$.subscribe(function () {
    var yrs = new Date().getFullYear() - 2009 + "+";
    document.querySelectorAll(".tx-years-xp").forEach(function (el) { el.textContent = yrs; });
});