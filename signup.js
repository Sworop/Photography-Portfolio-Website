  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const i1 = document.querySelector('#i1')
    const i2 = document.querySelector('#i2')
    const i3 = document.querySelector('#i3')

    fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify({
            username:i1.value,
            email: i2.value,
            password: i3.value
        })
    })
    
    .then(res => res.json())
    .then( res => {
       console.log("Saved to DB:", data)
        i1.value = ""
        i2.value = ""
        i3.value = ""
    })
    .catch(err => console.log(err))
    

    
})