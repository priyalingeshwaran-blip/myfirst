let isLoggedIn = localStorage.getItem("loggedIn");
setTimeout(() => {
    window.location = "login.html"; 
}, 10000);
if(isLoggedIn === "true") {
    window.location.href = "loader.html";
} 
else {
    window.location.href = "login.html";
 }