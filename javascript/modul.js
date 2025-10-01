
/*Модульне вікно - кнопка Зацікавитись*/
document.addEventListener("DOMContentLoaded",()=> {


const modul = document.getElementById("modul");
const interBtn = document.getElementById("inter");
console.log(interBtn);
const closeBtn = document.getElementById("close");

interBtn.addEventListener("click", (e) => {
    e.preventDefault(); // щоб не перезавантажувало сторінку
    modul.style.display = "flex" // показує модалку
});

closeBtn.addEventListener("click", () => {
    modul.classList.add("hide") // плавно ховаємо фон
    modul.querySelector(".modul-content").classList.add("hide") // плавно ховаємо вміст
    setTimeout (() => {
        modul.style.display = "none"; // після 0.3с ховаємо елемент
        modul.classList.remove("hide"); // прибираємо клас для наступного відкриття
        modul.querySelector(".modul-content").classList.remove("hide")
    }, 300);

});

window.addEventListener("click", (e) => {
    if (e.target === modul) {
        modul.classList.add("hide");
        modul.querySelector(".modul-content").classList.add("hide");
        
        setTimeout(() =>{
            modul.style.display = "none";
            modul.classList.remove("hide");
            modul.querySelector(".modul-content").classList.remove("hide");
        }, 300);
        
    }
    });
});
