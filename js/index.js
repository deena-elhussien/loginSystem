var emailInput= document.getElementById("email");
var alertMsg= document.getElementById("alertMsg");
var login= document.getElementById("login");

// function for valid email
function validEmail(){
    // var text= emailInput.value;
    var regex=  /^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/;
    if(regex.test(emailInput)==true){
        alertMsg.classList.add("d-none")
        console.log("hi");
    }else{
        alertMsg.classList.remove("d-none")
        console.log("no");
    }

}

login.addEventListener("click" , function(){
    validEmail();
    window.open("third.html" , "_self")

})



// log out btn
var logout= document.querySelector("a.btn")
console.log(logout);
logout.addEventListener("click" , function(){
    window.open("index.html", "_self")
});


var fullName= document.querySelector(".fullName");
console.log(fullName);

function enterName(){
    var all= {
        result: fullName.value
    }
    console.log(all);

}
enterName()


