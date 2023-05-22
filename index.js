function convert1()
{
let n= document.getElementById("input").value;
let d=document.querySelector("input[name='degree']:checked");
if(d.id==="celsius")
{
   let f=(1.8*n)+32;
   document.getElementById("convertedtemp").value=f;
}
if(d.id==="farenheit")
{
   let c=(n-32)/1.8;
   c=c.toFixed(2);
   document.getElementById("convertedtemp").value=c;
}
}