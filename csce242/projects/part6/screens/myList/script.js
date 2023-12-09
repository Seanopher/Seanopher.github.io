const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hidden");
}

const addEditcontent = async (e) => {
    e.preventDefault();
  
    const form = document.getElementById("add-edit-content-form");
    const formData = new FormData(form);
    formData.append("genre", getgenre());
    console.log(...formData);
    let response;
    console.log(form._id.value > 0 && form._id.value.length);
    if (form._id.value == -1) {
      formData.delete("_id");
      response = await fetch("/api/contentList", {
        method: "POST",
        body: formData,
      });
    } else {
      console.log("editting");
      response = await fetch(`/api/contentList/${form._id.value}`, {
        method: "PUT",
        body: formData,
      });
    }
  
    if (response.status != 200) {
      console.log("ERROR posting data");
      return;
    }
  
    let result = await response.json();
  
    if (form._id.value != -1) {
      const content = await getcontent(form._id.value);
      displayDetails(content);
    }
  
    document.querySelector(".dialog").classList.add("transparent");
    resetForm();
    showcontentList();
  };

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}