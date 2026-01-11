async function getApi(url){

    const response = await fetch(url)

    if(!response.ok){
        throw new Error("Endpoint Error")
    }

    const data = await response.json()

    return new Promise((resolve,reject) => {
        const newImg = new Image()
        newImg.src = data.message
        newImg.alt = "A dog Photo"

        newImg.addEventListener("load",() => {
            resolve(newImg)
        })

        newImg.addEventListener("error", ()=> {
            reject("Error Occured")
        })
    })

}


try {

    const ImageEl = await getApi("https://dog.ceo/api/breeds/image/random")
    document.getElementById("main-container").appendChild(ImageEl)

} catch(err) {
    console.log(err)
}