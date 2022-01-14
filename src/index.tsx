import "./index.scss";
// Write your code here
console.log("Hello World!");
// Write your code here
const menu = document.getElementById("menu")
const navigation = document.getElementsByClassName("cec92063641b1475a94e0154fc3e918a8__mobile__modal")
const close = document.getElementById("close-navigation")
menu.addEventListener("click",function() {
    navigation[0].classList.add("is-show")
    close.classList.add("is-show")
})

close.addEventListener("click",function() {
    document.getElementById("navigation").classList.remove("is-show")
    close.classList.remove("is-show")
})


const mobile_submenu = Array.from(document.querySelectorAll(".cec92063641b1475a94e0154fc3e918a8__mobile__item"));
mobile_submenu.forEach((element) => {
    const submenu = element.querySelector(".cec92063641b1475a94e0154fc3e918a8__mobile__submenu") as HTMLElement;
    if (!submenu) { return; }
    element.addEventListener("pointerenter", (e) => {
        submenu.style.height = "auto";
        let height = submenu.offsetHeight;
        submenu.style.height = "0px";
        setTimeout(() => {
            submenu.style.height = `${height}px`;
        }, 16);
    });
    element.addEventListener("pointerleave", (e) => {
        submenu.style.height = null;
    });
});