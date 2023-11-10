let row = document.querySelector("#home-main .row")


localStorage.setItem("send_id",2)


// fetch("https://api.tvmaze.com/shows")
// .then(res => res.json())
// .then(data =>console.log(data))
axios.get("https://api.tvmaze.com/shows")
.then(res=>console.log(res))

axios.get("https://api.tvmaze.com/shows")
.then(res=>{
  for (let i= 0; i < res.data.length; i++) {
    
      let summary =res.data[i].summary.split(" ")
      let data =summary.slice(0,15).join(" ")
    
    row.innerHTML +=`    
  <div class="card mb-3" style="width: 18rem;"  onclick="send(this)" id="${res.data[i].id}">
  <img src="${res.data[i].image.medium}" class="m-2" alt="..." >

  <div class="card-body ">
    <h5 class="card-title">${res.data[i].name}</h5>
    <p class="card-text">${data}</p>
    <a href="./sproduct.html?id=${[i]}" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    
  }  
})



{/* <a href="./sproduct.html">
<img src="${res.data[i].image.medium}" class="m-2" alt="..." >
</a>  */}