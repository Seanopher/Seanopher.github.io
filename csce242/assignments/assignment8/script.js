const runningMan = () => {
    const runningman = document.getElementById("runningmanIMG");
    let padding = 0;
    let count = 0;
    const interval = setInterval(() => {
        padding += 1;
        runningman.style.paddingLeft = padding+"px";
        count++;

        if(count==700)
        {
            clearInterval(interval);
        }
    }, 100);
      
    
}


const addFunds = () => {
    const bar = document.getElementById("bar");
    const funds = document.getElementById("funds-raised").value;

    let progress = 0;
    let progressPercent, fundPercent;

    
    const interval = setInterval(() => {
        progress += 100;
        progressPercent = (progress/funds)*100;
        fundPercent = 100-progressPercent;
        bar.style.backgroundColor = "linear-gradient(180deg, white "+fundPercent+"%, red "+progressPercent+"%)";
    }, 100);
}




window.onload = () => {
    document.getElementById("runningmanIMG").onclick = runningMan;
    document.getElementById("button-funds").onclick = addFunds;
}