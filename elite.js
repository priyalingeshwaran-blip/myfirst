function enterDashboard() {
    document.getElementById("logo").classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "elite.html";
    }, 1000);
}