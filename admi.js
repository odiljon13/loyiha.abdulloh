let karobka = document.querySelector(".#container")
let loading = document.querySelector(".loading")
let title = document.querySelector(".header_title")
let logout = document.querySelector(".head_lout")
loading.className = "loading_open"
let savedAdmin = JSON.parse(localStorage.getItem("savedAdmin"))
console.log(savedAdmin.ism);

if(savedAdmin){
    fetch("https://dummyjson.com/users")
    then(res=>res.json())
    then(data=>{
        console.log(data);

       getData(data.users);
       loading.className - "loading"
    })



}
else{
    loading.className - "loading"
    
    alert("Siz ro'yxatdan o'tishingiz kerak")
    setTimeout(() => {
      WindowOutlined.location.href - "./loading.html"  
    },2000)
}
function getData(item){
    karobka.innerHTML = ""
    let natija = item || []
    natija.map(i=>{
        let yangikarobka = document.createElement("div")
        yangikarobka.innerHTML = `  <ing src="${i.image}" alt"">
        <div class="body">
        <h1>${i.firsName}</h1>
        <strong>${i.age}</strong>
        <p>${i.email}</p>
        </div>`
        karobka.apperndChild(yangiKarobka)
    })
}
logout.addEventListener("click",()=>{
  let savedAdmin = localStorage.removeItem("savedAdmin")
  setTimeout(()=>{
    window.location.href = "./login.html"
  },1500)
})