async function getApi(){
    try {
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts")

    if(!response.ok){
        throw new Error(`Error occured: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    } catch(err) {
        console.log("error:",err)
    }

}

getApi()