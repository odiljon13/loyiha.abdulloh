let box = document.querySelector("#container")
let inpSearch = document.querySelector(".search_product")
let logOut = document.querySelector(".logout")
let loading = document.querySelector(".loading")
loading.className = "loading_open"

fetch(('https://dummyjson.com/products'))
.then(res=>res.json())
.then(data=>{
getData(data.products); 
loading.className = "loading"

});
function getData(item){
  box.innarHTML = ""
  let natija = item || []
natija.map(i=>{
    let yangiKarobka = document.createElement("div")
    yangiKarobka.innerHTML  = `    <image src="${i.thumbnail}" alt="">
    <div class ="body">
      <h1>${i.title}</h1>
      <strong>${i.price}</strong> 
      <p>${i.description}</p> 
     </div>`
     console.log(yangiKarobka);
     box.appendChild(yangiKarobka)


     
   })
}
inpSearch.addEventListener("keyup",(r)=>{
  loading.className = "loading_open"
  
fetch(`httlps://dummyjson.com/products/search?q=${r.target.value}`)
.then(res=>res.json())
.then(data=>{
  getData(data.products);
  
loading.className = "loading"

})


})
logOut.addEventListener("click",()=>{
  setTimeout(()=>{
    window.location.href = "./login.html"
  },2000)
})