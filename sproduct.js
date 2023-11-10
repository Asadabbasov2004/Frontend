const getUrl = new URL(location).search;
const getId =getUrl.substring(4)
const rowproduct =document.querySelector("#product-main .row")
axios.get("https://api.tvmaze.com/shows")
.then(res=>{
  rowproduct.innerHTML=`
  <img src="${res.data[getId].image.medium}" class="m-2" alt="..." >
  `
})