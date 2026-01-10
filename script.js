async function getApi() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")

        if(!response.ok){
            throw new Error(`Http error: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log("error occured",err)
    } 
}


getApi()