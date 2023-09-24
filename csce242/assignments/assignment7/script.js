const sortAges = () => {
    const ages = [document.getElementById("age-1").value, document.getElementById("age-2").value, document.getElementById("age-3").value];
    const names = [document.getElementById("name-1").value, document.getElementById("name-2").value, document.getElementById("name-3").value];
    for (var i = 0; i < ages.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (ages.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (ages[j] < ages[j + 1]) {
  
                // If the condition is true
                // then swap them
                var temp1 = ages[j]
                ages[j] = ages[j + 1]
                ages[j + 1] = temp1

                var temp2 = names[j]
                names[j] = names[j + 1]
                names[j + 1] = temp2
            }
        }
    }
    const order = document.getElementById("age-order");
    order.innerHTML += names;
}

const addFunds = () => {
    const bar = document.getElementById("bar");
    const funds = document.getElementById("funds-raised").value;
    if(funds>=10000)
        bar.classList.add("full");
    else if(funds>=7500)
        bar.classList.add("three");
    else if(funds>=5000)
        bar.classList.add("half");
    else if(funds<5000)
        bar.classList.add("quarter");

}

const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}

const exercise1 = () => {
    const exercise1 = document.getElementById("exercise1");
    const exercise2 = document.getElementById("exercise2");
    exercise2.classList.add("hidden");
    exercise1.classList.remove("hidden");
}

const exercise2 = () => {
    const exercise1 = document.getElementById("exercise1");
    const exercise2 = document.getElementById("exercise2");
    exercise1.classList.add("hidden");
    exercise2.classList.remove("hidden");
}




window.onload = () => {
    document.getElementById("button-compare").onclick = sortAges;
    document.getElementById("exercise1selector").onclick = exercise1;
    document.getElementById("exercise2selector").onclick = exercise2;
    document.getElementById("button-funds").onclick = addFunds;
    document.getElementById("nav-toggle").onclick = toggleNav;
}