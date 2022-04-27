var efficency = 0;

document.getElementsByName("steam")[0].onclick = (event) =>{
  efficency=20;
}
document.getElementsByName("gasoline")[0].onclick = (event) =>{
  efficency=40;
}
document.getElementsByName("hydrogen")[0].onclick = (event) =>{
  efficency=60;
}
document.getElementsByName("submit")[0].onclick = (event) =>{
  let distance = document.getElementsByName("distance")[0].value;
  let result = Math.round(distance/efficency);
  document.getElementById("result").innerHTML = result+" kg";
  document.getElementsByClassName("image")[0].src = "IMG/hydrogen.png";
}