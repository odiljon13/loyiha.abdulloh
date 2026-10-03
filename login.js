let nameE = document.querySelector(".ienpNam")
let pasword = document.querySelector(".inpPass");
let btn = document.querySelector(".sendLogin");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("working");
    
    let ism = nameE.value;
    console.log(ism);

    let parol = pasword.value; // Password o'rniga pasword (inputdan olingan o'zgaruvchi) yozildi
    console.log(ism, parol);
    
    fetch("https://dummyjson.com/auth/login", {
        method: "POST", 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: ism,
            password: parol,
            expiresInMins: 30, // optional, defaults to 60
        }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.accessToken){
            localStorage.setItem("savedUser", JSON.stringify(data));
            setTimeout(()=>{
                window.location.href = "./index.html"
            },1000)
        } else if(ism.toLowerCase() === "abdulloh" && parol === "Abdulloh12"){  
            localStorage.setItem("savedAdmin", JSON.stringify({ism: ism}));
            setTimeout(()=>{
                window.location.href = "./admin.html";
            },1000); 
        } else {
            alert("Siz xatoga duch keldingiz yoki parol xato");
        }
    });
});