function fetchdata()
{
    fetch("http://localhost:3000/gallery")
    .then(res => res.json())
    .then(res => {
        const gallery =document.querySelector("#gallery")
        gallery.innerHTML = res.data.map(i =>
            ` <div style="width: 21%; 
              margin-bottom: 20px; 
              margin-left: 2%;
              border: 2px solid black;  
              font-weight: 500; color: #0e0a3f;"
               class="imgContainer"> 
              <img style="width: 100%; height: 90%; "
               src="${i.image}" alt="">
              <p style=" color: #0e0a3f; text-align: center;">
              ${i.title}</p>
              </div>` ).join("")
    })
    .catch(err => console.log(err))
}
fetchdata()

document.querySelector('#f1').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const i1 = document.querySelector('#i1')
    const i2 = document.querySelector('#i2')

    fetch("http://localhost:3000/gallery", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, 
        body:JSON.stringify({
            image:i1.value,
            title: i2.value
        })
    })
    
    .then(res => res.json())
    .then( res => {
        fetchdata()
        i1.value = ""
        i2.value = ""
    })
    .catch(err => console.log(err))
    

    
})

