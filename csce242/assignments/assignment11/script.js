const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json"

    try {
        const response = await fetch(url);
        return await response.json();
    } 
    catch (e) {
        console.log(e);
    }
}

const showMovies = async() => {
    let movies = await getMovies ();
    let section = document.getElementById("movies");

    movies.forEach(movie => {
        section.append(getMovieItem(movie));
    })
}

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    let section2 = document.createElement("section");
    let section3 = document.createElement("section");

    let header = document.createElement("h3");
    header.innerText = movie.title;

    section.append(section2);
    section.append(section3);
    section.classList.add("section");
    section2.classList.add("img-flex");
    section3.classList.add("p-flex");
    section3.append(header);

    let ul = document.createElement("ul");
    section3.append(ul);

    ul.append(getListItem(movie.director));
    ul.append(getListItem(`Actors: ${movie.actors}`));
    ul.append(getListItem(`Year released: ${movie.year}`));
    ul.append(getListItem(`Genres: ${movie.genres}`));
    ul.append(getListItem(`${movie.description}`));

    let img = document.createElement("img");
    img.src = "https://portiaportia.github.io/json/"+movie.img;
    img.classList.add("img-size");
    section2.append(img);


    return section;
}

const getListItem = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
}

window.onload = () => {
    showMovies();
}