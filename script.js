fetch('https://dog.ceo/api/breeds/image/random')
.then(Response => {
    return Response.json()
})
.then(data => {
    const imageElement = document.createElement('img')
    imageElement.src = data.message
    imageElement.alt = "Random dog photo"
    document.getElementById("main-container").appendChild(imageElement)
})