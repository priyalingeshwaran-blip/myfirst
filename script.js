function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-250px";
  document.getElementById("overlay").style.display = "none";
}

function main(){
  window.open("https://www.youtube.com", "_blank");
}

function spt(){
  window.open("https://www.spotify.com", "_blank");
}

function pt(){
  window.open("https://www.youtube.com/watch?v=8TZMtslA3UY", "_blank");
}

function kt(){
window.open("kt.html","_blank");
}
function toggleDark() {
  document.body.classList.toggle("dark");
}
function togglePhotos() {
  let x = document.getElementById("photos");
  x.classList.toggle("show");
}
function logout(){
  localStorage.removeItem("loggedIn");
  window.location = "login.html"; 
}