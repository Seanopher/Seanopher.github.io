const submitData = (e) => {
    e.preventDefault();
    document.getElementById("result-section").classList.remove("hidden");
  
    const form = document.getElementById("form-data");
    const title = form.elements["content-title"].value;
    const date = form.elements["release-date"].value;
    const dateEntered = date.toString();
    const termsChecked = form.elements["terms"].checked;
  
    console.log(dateEntered);
    document.getElementById("result-title").innerHTML += title;
    document.getElementById("media-type").innerHTML += getRadioValue("media-type");
    document.getElementById("release-date-tag").innerHTML += dateEntered;
  };
  
  const getRadioValue = (radioName) => {
    let radios = document.getElementsByName(radioName);
  
    for (let i in radios) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
    return "";
  };
  
  document.getElementById("form-data").onsubmit = submitData;