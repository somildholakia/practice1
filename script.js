
let likesDocumentries = false
let likesStartups = false

if(likesDocumentries === true || likesStartups === true){
    recommendMovies()
} else {
    notFound()
}


function recommendMovies() {
 console.log("Hey! check this out, a new movie you might like.")
}

function notFound(){
    console.log("We did'nt found any movie you like.")
}