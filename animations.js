document.addEventListener("DOMContentLoaded", function() {
    // Fade-in effect for images
    const images = document.querySelectorAll("#gallery img");

    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Optional: Stop observing after it fades in
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        imageObserver.observe(image);
    });

    // Fade-in effect for table rows
    const rows = document.querySelectorAll("#all-meets tbody tr");

    const rowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    rows.forEach(row => {
        row.classList.add("fade-in-row");
        rowObserver.observe(row);
    });
});