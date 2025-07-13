const URL = "https://official-joke-api.appspot.com/jokes/random/";

// const fetchData = async () => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
// }

const fetchData2 = async () => {
    const response = await fetch(URL);
    let res = await response.json();
    console.log(res);
    document.getElementById("type").innerText = "Type : " + res.type;  
    document.getElementById("setup").innerText = "Setup : " + res.setup;
    document.getElementById("punchline").innerText = "Punchline : " + res.punchline;
}

document.getElementById("btn").addEventListener("click", fetchData2);