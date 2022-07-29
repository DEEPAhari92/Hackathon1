var div = document.createElement('div')
div.innerHTML = `<nav><h1>KNOW THE NATIONALITY</h1></nav>`

div.style.textAlign= "center"
var div1 = document.createElement('div')
div1.innerHTML = `<input type = "text" id = "txt">
<button type = "button" onclick = "nationality()">Search</button></br>
<div2 id="nationality"></div2></br>
<div3 id="probability"><div3>`

div1.style.textAlign = "center"
document.body.append(div,div1)

async function nationality(){
    try{
    let name =  document.getElementById("txt").value;
    console.log(name)
 let res = await fetch(`https://api.nationalize.io?name=${name}`)
 let res1 = await res.json();
 console.log(res1);
 let res2 = res1.country;

 console.log(res2);
 document.getElementById("nationality").innerText=`Nationality of the person : ${res2[0].country_id} and  ${res2[1].country_id}`
 document.getElementById("probability").innerText = `Probability Value :${res2[0].probability}`
 }
 catch(err){
    document.getElementById("nationality").innerText=`Not Found`

}
}