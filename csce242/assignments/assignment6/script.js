window.onload = () => {
    document.getElementById("button-show").onclick = () => {
        const img = document.getElementById("jasper");
        img.classList.remove("hidden");
    }
    document.getElementById("button-hide").onclick = () => {
        const img = document.getElementById("jasper");
        img.classList.add("hidden");
    }
    document.getElementById("button-animate").onclick = () => {
        const bomb = document.getElementById("bomb");
        bomb.classList.remove("animate");
        bomb.classList.add("animate");
    }
    document.getElementById("button-addComment").onclick = () => {
        const productName = document.getElementById("product-name").value;
        const comment = document.getElementById("comment").value;
        const rating = document.getElementById("rating").value;
        const userName = document.getElementById("user-name").value;
        /*
        const productTitle = document.getElementById("comment-title");
        productTitle.innerHTML = productName;
        const ratingComment = document.getElementById("rating-comment");
        ratingComment.innerHTML = rating+"/5 stars "+comment;
        const author = document.getElementById("username");
        author.innerHTML = "by "+userName;
        */
        const divName = document.getElementById("commentArea");
        divName.innerHTML += "<strong>"+productName+"</strong> <br> "+rating+"/5 stars "+comment+"<br>"+userName+"<br>";

    }

}
