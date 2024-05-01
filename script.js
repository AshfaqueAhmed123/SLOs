// search SLOs
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    alert("search bar is not functional yet!! please bear.");
  }, 3000);
});


const form = document.querySelector(".search-form");
const input = document.getElementById('search-input');
form.addEventListner("submit",(e)=>{

e.preventDefault();
input.value="";
  
});
