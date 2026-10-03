let karobka = document.querySelector("#container");
let loading = document.querySelector(".loading_open");
let title = document.querySelector(".header_title");
let logout = document.querySelector(".head_lout");

let savedAdmin = JSON.parse(localStorage.getItem("savedAdmin"));

if (savedAdmin) {
    if (savedAdmin.ism) {
        title.innerHTML = `Admin Panel - ${savedAdmin.ism}`;
    }
    fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => {
            getData(data.users);
            loading.className = "loading";
        });
} else {
    loading.className = "loading";
    alert("Siz admin sifatida ro'yxatdan o'tishingiz kerak!");
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 500);
}

function getData(item) {
    karobka.innerHTML = "";
    let natija = item || [];
    natija.forEach(i => {
        let yangiKarobka = document.createElement("div");
        yangiKarobka.className = "user-card";
        yangiKarobka.innerHTML = `
            <img src="${i.image}" alt="User Image">
            <div class="body">
                <h1>${i.firstName} ${i.lastName}</h1>
                <strong>Yosh: ${i.age}</strong>
                <p>${i.email}</p>
            </div>
        `;
        karobka.appendChild(yangiKarobka);
    });
}

logout.addEventListener("click", () => {
    localStorage.removeItem("savedAdmin");
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 500);
});

// Search functionality for admin users
let searchInput = document.querySelector(".searchName");
if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
        let query = e.target.value.toLowerCase();
        loading.className = "loading_open";
        karobka.innerHTML = "";
        
        fetch(`https://dummyjson.com/users/search?q=${query}`)
            .then(res => res.json())
            .then(data => {
                getData(data.users);
                loading.className = "loading";
            });
    });
}
