
// let email =  prompt("Email adresinizi daxil edin!");
// let password = prompt("Passwordu daxil edin!");

// if(email === "admin@gmail.com" && password === "12345"){
//     alert("Dogrudur");
// }
// else{
//     alert("Yanlisdir!");
// }


// function Add() {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     if(email === "admin@gmail.com" && password === "12345"){
//         alert("Dogrudur");
//     }
//     else{
//         document.getElementById("error").innerHTML = "Yanlisdir!"
//     }
// }

let start = prompt(" start Reqemi daxil edin")
let end = prompt(" end Reqemi daxil edin")

if (start < end) {
    while (start <= end) {
        if (start % 2 == 0) {
            console.log(start);
        }
        
        start++;

    }
}
else {
    alert("reqem secilmis araliqda deyildir!")
}



