let change_text = document.getElementById("main-container")
let paragraph = document.getElementById("text")
change_text.addEventListener("click", function () {
   change_text.innerHTML += "<button onclick='buy()'> BUY! </button><br>"
})


function buy(){
    change_text.innerHTML += "<p> Thank you for buyings</p>"
    console.log("purchased")
}


const recipient = "somil"

const email = `Hey ${recipient}! How is it going? Cheers ritik`
console.log(email)


function logAnswer(a1,a2){
    console.log(`The answer is ${a1} of course! If you got that right, give yourself ${a2}.`)
}

console.log("What is the capital of peru")

setTimeout(logAnswer,4000,'meeee','chocolate')


const speedWarning = speed => {
    console.log(speed)
    return `you are going at a very high speed `
    
}

console.log(speedWarning(40))

let link = url(https://apis.scrimba.com/dog.ceo/api/breeds/image/random)
console.log(link)