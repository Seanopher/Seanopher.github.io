const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}