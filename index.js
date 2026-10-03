let box = document.querySelector("#container");
let inpSearch = document.querySelector(".search_product");
let logOut = document.querySelector(".logout");
let loading = document.querySelector(".loading_open");

// Check if user is logged in
let savedUser = localStorage.getItem("savedUser");
if (!savedUser) {
    window.location.href = "./login.html";
}

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        getData(data.products); 
        loading.className = "loading";
    });

function getData(item){
    box.innerHTML = "";
    let natija = item || [];
    natija.forEach(i => {
        let yangiKarobka = document.createElement("div");
        yangiKarobka.className = "product-card";
        yangiKarobka.innerHTML = `
            <img src="${i.thumbnail}" alt="${i.title}">
            <div class="body">
                <h1>${i.title}</h1>
                <strong>$${i.price}</strong> 
                <p>${i.description.substring(0, 80)}...</p> 
            </div>
        `;
        box.appendChild(yangiKarobka);
    });
}

inpSearch.addEventListener("keyup", (r) => {
    loading.className = "loading_open";
    box.innerHTML = "";
  
    fetch(`https://dummyjson.com/products/search?q=${r.target.value}`)
        .then(res => res.json())
        .then(data => {
            getData(data.products);
            loading.className = "loading";
        });
});

logOut.addEventListener("click", () => {
    localStorage.removeItem("savedUser");
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 500);
});