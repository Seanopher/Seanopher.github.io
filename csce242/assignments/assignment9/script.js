const createRainbow = () => {
    const rainbow = document.getElementById("rainbow");
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let count = 0;

    const interval = setInterval(() => {
        if(count <colors.length)
        {
            const temp = document.createElement("temp");
            temp.classList.add("rows");
            temp.style.backgroundColor = colors[count];
            rainbow.appendChild(temp);
            count++;
        }
        else if(count = colors.length)
        {
            document.getElementById("potgold").classList.remove("hidden");
        }
        else {
            clearInterval(interval);
        }
    }, 1000);
    
}

const quoteFlipper = () => {
    const quotes = ["Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll", 
    "Change your thoughts, and you change your world.” - Norman Vincent Peale", 
    "All our dreams can come true if we have the courage to pursue them. - Walt Disney ", 
    "Success is a journey not a destination. - Ben Sweetland" ,
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"];
    const quoteBox = document.getElementById("quote-area");
    let count = 0;
    const interval = setInterval(() => {
        if(count<5)
        {
            quoteBox.innerHTML = quotes[count];
            count++;
        }
        else {
            count = 0;
        }
        
    }, 2000);
}




window.onload = () => {
    document.getElementById("button-rainbow").onclick = createRainbow;
    quoteFlipper();
}