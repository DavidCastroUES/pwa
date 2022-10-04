const container = document.querySelector(".container")
const coffees = [
  { name: "Samsung Galaxy S22", image: "images/smartphone1.jpg" },
  { name: "Huawei P50 Pro", image: "images/smartphone2.jpg" },
  { name: "Xiaomi Mi 11T", image: "images/smartphone3.jpg" },
  { name: "Sony Xperia I III", image: "images/smartphone4.jpg" },
  { name: " Oneplus 10 Pro", image: "images/smartphone5.jpg" },
  { name: " Google Pixel 6", image: "images/smartphone6.jpg" },

]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Comprar</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }