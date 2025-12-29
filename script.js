let hands = ["rock","paper","scissors"]

function random(){
    let number = Math.floor(Math.random() * 3)
    console.log(hands[number])
}

random()