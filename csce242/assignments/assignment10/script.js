class Toy 
{
    constructor(type, price, ageRange, stars, img)
    {
        this.type = type;
        this.price = price;
        this.ageRange = ageRange;
        this.stars = stars;
        this.img = img;
    }

    get ToyDetails()
    {
        const section = document.createElement("section");
        section.classList.add("toy");

        const h3=document.createElement("h3");
        h3.classList.add("hidden");
        h3.innerHTML = this.type;

        const ul = document.createElement("ul");
        ul.classList.add("hidden");
        ul.append(this.listItem("Age range: "+this.ageRange));
        ul.append(this.listItem("Price "+this.price));
        ul.append(this.listItem("Stars: "+this.stars));
        section.append(h3);
        section.append(ul);

        const img = document.createElement("img");
        section.append(img);
        img.src = this.img;

        img.onmouseover = () => {
            h3.classList.remove("hidden");
            ul.classList.remove("hidden");
            img.classList.add("transparent");
        }

        img.onmouseout = () => {
            h3.classList.toggle("hidden");
            ul.classList.toggle("hidden");
            img.classList.toggle("transparent");
        }
        
        return section;
    }


    listItem(info) {
        const li=document.createElement("li");
        li.textContent = info;
        return li;
    }
}

const showToys = () => {
    const list = document.getElementById("list");
    const toys = [];


    toys.push(new Toy("Baseball Bat", 24.73, "ages 12+", 5, "images/baseballbat.jpg"));
    toys.push(new Toy("Childrens Book", 12.31, "ages 4-14", 4, "images/caterpillar.jpg"));
    toys.push(new Toy("Nintendo DS", 89.34, "ages 15+", 4, "images/ds.jpg"));
    toys.push(new Toy("Stuffed Animal", 15.12, "ages 2-16", 3, "images/monkey.jpg"));
    toys.push(new Toy("Board Games", 19.99, "ages 8+", 5, "images/monopoly.jpg"));
    toys.push(new Toy("Toy Car", 43.12, "ages 14+", 2, "images/toycar.jpg"));

    toys.forEach((toy) => {
        list.append(toy.ToyDetails);
    });
}

const displayToyDetails = () => {
    const list = document.getElementById("list");
    const toys = [];
}

window.onload = () => {
    showToys();
}