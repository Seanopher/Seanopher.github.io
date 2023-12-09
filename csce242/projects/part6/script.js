const getcontentList = async () => {
    try {
      return (await fetch("api/contentList/")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showcontentList = async () => {
    let contentList = await getcontentList();
    let contentListDiv = document.getElementById("content-list");
    contentListDiv.innerHTML = "";
    contentList.forEach((content) => {
      const section = document.createElement("section");
      section.classList.add("content");
      contentListDiv.append(section);
  
      const a = document.createElement("a");
      a.href = "#";
      section.append(a);
  
      const h3 = document.createElement("h3");
      h3.innerHTML = content.name;
      a.append(h3);
  
      if (content.img) {
        const img = document.createElement("img");
        img.src = content.img;
        section.append(img);
      }
  
      a.onclick = (e) => {
        e.preventDefault();
        displayDetails(content);
      };
    });
  };
  
  const displayDetails = (content) => {
    const contentDetails = document.getElementById("content-details");
    contentDetails.innerHTML = "";
  
    const h3 = document.createElement("h3");
    h3.innerHTML = content.title;
    contentDetails.append(h3);
  
    const dLink = document.createElement("a");
    dLink.innerHTML = "	&#x2715;";
    contentDetails.append(dLink);
    dLink.id = "delete-link";
  
    const eLink = document.createElement("a");
    eLink.innerHTML = "&#9998;";
    contentDetails.append(eLink);
    eLink.id = "edit-link";
  
    const p = document.createElement("p");
    contentDetails.append(p);
    p.innerHTML = content.description;
  
    const ul = document.createElement("ul");
    contentDetails.append(ul);
    console.log(content.genre);
    const li = document.createElement("li");
    ul.append(li);
    li.innerHTML = genre;
  
    eLink.onclick = (e) => {
      e.preventDefault();
      document.querySelector(".dialog").classList.remove("transparent");
      document.getElementById("modal-background").classList.remove("hidden");
      document.getElementById("add-edit-title").innerHTML = "Edit content";
    };
  
    dLink.onclick = (e) => {
      e.preventDefault();
      deletecontent(content._id);
    };
  
    populateEditForm(content);
  };
  
  async function deletecontent(_id) {
    let response = await fetch(`/api/contentList/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  
    if (response.status != 200) {
      console.log("Error deleting");
      return;
    }
  
    let result = await response.json();
    showcontentList();
    document.getElementById("content-details").innerHTML = "";
    resetForm();
    showcontentList();
  }
  
  const populateEditForm = (content) => {
    const form = document.getElementById("add-edit-content-form");
    form._id.value = content._id;
    form.title.value = content.title;
    form.description.value = content.description;
  
    const genreP = document.getElementById("genre-boxes");
    genreP.innerHTML = "";
    console.log(content.genre);
  
    
    const input = document.createElement("input");
    input.type = "text";
    input.value = content.genre;
    genreP.append(input);
    
  };
  
  const addgenre = (e) => {
    e.preventDefault();
    const p = document.getElementById("genre-boxes");
    const input = document.createElement("input");
    input.type = "text";
    p.append(input);
  };
  
  
  const getcontent = async (_id) => {
    let response = await fetch(`/api/contentList/${_id}`);
    if (response.status != 200) {
      console.log("Error reciving content");
      return;
    }
  
    return await response.json();
  };
  
  const getgenre = () => {
    const inputs = document.querySelectorAll("#genre-boxes input");
    const genre = "";
  
    inputs.forEach((input) => {
      genre.push(input.value);
    });
    console.log(genre);
    return genre;
  };
  
  const resetForm = () => {
    const form = document.getElementById("add-edit-content-form");
    form.reset();
    form._id = "-1";
    document.getElementById("genre-boxes").innerHTML = "";
  };
  
  
  window.onload = () => {
    showcontentList();
    document.getElementById("add-genre").onclick = addGenre;
    document.getElementById("add-edit-content-form").onsubmit = addEditcontent;
    document.getElementById("add-link").onclick = showHideAdd;
  
    document.querySelector(".close").onclick = () => {
      document.querySelector(".dialog").classList.add("transparent");
    };
  };