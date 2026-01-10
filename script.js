function getImg(url){
    return new Promise((resolve,reject) => {
        const image = new Image()
        image.src = url
        image.alt = "A Dog Photo"

        image.addEventListener("load", ()=> {
            resolve(image)
        })
        image.addEventListener("error", ()=> {
            reject("Image not loaded")
        })
    })
}

try {
    const result = await getImg("https://dog.ceo/img/dog-api-fb.jpg")
    console.log(result)

    document.getElementById("main-container").appendChild(result)
} catch(error){
    console.log(error)
}