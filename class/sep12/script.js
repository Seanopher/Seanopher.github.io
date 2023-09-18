window.onload = () => {
    document.getElementById("button-click").onclick = () => {
        const helloP = document.getElementById("date");
        helloP.innerHTML = "hi";
        helloP.classList.add("special");
    }
}
