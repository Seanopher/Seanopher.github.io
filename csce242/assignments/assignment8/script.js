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

    let progressPercent = 0;
    let fundPercent = 100;

    let goal = (funds/10000)*100;
    
    const interval = setInterval(() => {
        progressPercent++;
        fundPercent--;
        bar.style.background = "linear-gradient(180deg, white "+fundPercent+"%, red "+progressPercent+"%)";
        if(progressPercent>=goal)
            clearInterval(interval);
    }, 100);
}




window.onload = () => {
    document.getElementById("runningmanIMG").onclick = runningMan;
    document.getElementById("button-funds").onclick = addFunds;
}