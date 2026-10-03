let nameE = document.querySelector(".ienpNam")
let pasword = document.querySelector(".inpPass");
let btn = document.querySelector(".sendLogin");

btn.addEventListener("click", () => {
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
        }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.accessToken){
            setTimeout(()=>{
                window.location.href = "./index.html"
            },1000)
        }
            esle if(ism.toLowerCase() -- "Abdulloh".toLowerCase() && parol -- "Abdulloh12"){  
                setTimeout(()=>{
                window.location.href = "./admin.html";
            },1000); 
            }
        else {
            alert("Siz xatoga duch keldingiz");
        }
    });
});