  function fetchcontact()
{
    fetch("http://localhost:3000/contact")
    .then(res => res.json())
    .then(res => {
        const gallery =document.querySelector("#contact")
        gallery.innerHTML = res.data.map(i =>
    ` <div style="width: 30%; 
              margin-bottom: 20px; 
              margin-left: 20px;
              border-radius: 10px; border: 2px solid black; font-weight: 500; 
              background-color: #0e0a3f;" class="imgContainer"> 
            <div><h3 style=" color: rgba(255, 255, 255, 1); text-align: centre;">
             Message Box</h3></div>
            <p style="  color: rgba(255, 255, 255, 1); text-align: left;">
            Name: ${i.username}</p>
            <p style=" color: rgba(255, 255, 255, 1); text-align: left;">
            Email Address: ${i.email}</p>
            <p style=" color: rgba(255, 255, 255, 1); text-align: left;">
            Phone Number: ${i.phone}</p>
            <p style=" color: rgba(255, 255, 255, 1); text-align: left;">
            Message: ${i.message}</p>
    </div>`

        ).join("")
    })
    .catch(err => console.log(err))
}
fetchcontact()