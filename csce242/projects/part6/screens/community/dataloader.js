const getData = async () => {
    const url = "../../data.json"

    try {
        const response = await fetch(url);
        return await response.json();
    } 
    catch (e) {
        console.log(e);
    }
}

const showData = async() => {
    let library = await getData();
    let 
}
