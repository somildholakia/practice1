async function getApi(){
    try {
    const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts",
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'holiday nightmares',
                body: 'When i was Kidnapped in scotland',
                id: 100
            }),

            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }

        })

   

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