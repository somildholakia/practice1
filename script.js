let change_text = document.getElementById("main-container")
let paragraph = document.getElementById("text")
change_text.addEventListener("click", function () {
   change_text.innerHTML += "<button onclick='buy()'> BUY! </button><br>"
})


function buy(){
    change_text.innerHTML += "<p> Thank you for buyings</p>"
    console.log("purchased")
}
