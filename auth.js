



function login(){
    let name = document.getElementById("logn").value;
    let pwd = document.getElementById("logp").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let found = false;

    for(let i=0; i<users.length; i++){
        if(users[i].name === name && users[i].pwd === pwd){
            found = true;
            break;
        }
    }

    if(found){
        document.getElementById("rar").innerHTML = "✅ Logged in!";
        localStorage.setItem("loggedIn", "true"); 
        window.location = "loader.html"; 
    } else {
        document.getElementById("rar").innerHTML = "❌ User not found";
    }
}

function sign(){
    let name = document.getElementById("usern").value;
    let pwd = document.getElementById("userpwd").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({name: name, pwd: pwd});
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("rar").innerHTML = "✅ Signup successful!";
    localStorage.setItem("loggedIn", "true"); 
    window.location = "loader.html"; 
}