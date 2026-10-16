let light = document.getElementById("light");
let dark = document.getElementById("dark");
let contrast = document.getElementById("contrast");

light.addEventListener("change", () => {
    document.body.classList.remove("contrast");
    document.body.classList.remove("dark");
});

dark.addEventListener("change", () => {
    document.body.classList.remove("contrast");
    document.body.classList.add("dark");
});

contrast.addEventListener("change", () => {
    document.body.classList.remove("dark");
    document.body.classList.add("contrast");
});