var pro = document.querySelector(".para")
var inp = document.querySelector(".input")
var btn = document.querySelector(".btn")
var day = new Date().getDay()

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]



btn.addEventListener("click",weekend)

function weekend(){
    pro.innerHTML = "Hallo " + inp.value + "."+ "Today is " + days[day]+ "!." + " only " + (5 - day) + " Day to the Weekend"
    btn.style.display = "none"
    inp.style.display = "none"
    
}