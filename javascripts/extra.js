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

// Populate years-of-experience, overriding the HTML placeholder
function setYearsXp() {
    var yrs = new Date().getFullYear() - 2009 + "+";
    document.querySelectorAll(".tx-years-xp").forEach(function (el) { el.textContent = yrs; });
}

// If the script is deferred, DOMContentLoaded may have already fired — call directly
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setYearsXp);
} else {
    setYearsXp();
}

// MkDocs Material instant navigation re-visits
if (typeof document$ !== "undefined") {
    document$.subscribe(setYearsXp);
}