const getUrl = new URL(location).search;
//console.log(getUrl);
const getId =getUrl.substring(4)
const rowproduct =document.querySelector("#product-main .row ")
axios.get("https://api.tvmaze.com/shows")
.then(res=>{
  rowproduct.innerHTML=`
  <div class="col-6" >
  <img src="${res.data[getId].image.original}"  alt="..." >
  </div>
  <div class="col-6 mt-5 right">
    <p>Name : ${res.data[getId].name} </p>
    <p>Genres : ${res.data[getId].genres}</p>
    <p>Language : ${res.data[getId].language}</p>
    <span>Rating : ${res.data[getId].rating.average}</span>
    <p >${res.data[getId].summary}</p>
   <a href="${res.data[getId].officialSite}">Go to website</a>
  </div>
  `
})