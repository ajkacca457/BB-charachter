const ccont=document.querySelector(".ccont");
const btn=document.querySelector("#btn");

function getchar(url){

const xhr= new XMLHttpRequest();

xhr.open("GET",url,true);

xhr.onload=function(){
if(this.status===200){
  const charachter=JSON.parse(this.responseText);
  console.log(charachter);
  ccont.innerHTML=`
  <h3 class="text-center bg-primary text-white py-1">You are:</h3>
  <h3 class="text-center">Name : ${charachter[0].name}</h3>
  <h5 class="text-center">Occupation : ${charachter[0].occupation.map((item)=>item)}</h5>
  <img src="${charachter[0].img}">
  <h5 class="text-center my-2">Nickname : ${charachter[0].nickname}</h5>
  `
}

}

xhr.send();
}


btn.addEventListener("click",()=>{
getchar("https://www.breakingbadapi.com/api/character/random");
})
