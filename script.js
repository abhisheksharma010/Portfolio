var typing=new Typed(".text-write", {
    strings: ["", "Flutter Developer", "Freelancer", " Competivtive Programmer", "Android Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
// var icon = document.getElementById("icon");
// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme");
// }
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme")
})