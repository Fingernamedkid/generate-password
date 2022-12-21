//Tri tran 26-10-22
const miniscule = "abcdefghijklmnopqrstuvwxyz";
const majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "1234567890";
const characters = "!@#$%^&*(){}[]=<>/,."
const random = ["1","2","3","4"];
const conditions = ["majuscule","miniscule","number","other"];
const rs = document.getElementById("longeur");
const changeelmt = document.getElementById("button");
const ouput = document.querySelector("#password");
const copy = document.querySelector("#copy")
function iftrue(a,b,c){
  if (document.getElementById(a).checked === true)
  {
    c.push(b)
  }
}


function randomadd(a, b) {
  return a.push(b[Math.floor(Math.random() * b.length)])
}

function checker(a, b){
  return a.every(elem => b.includes(elem));
}

changeelmt.addEventListener("click",() => {
var password = [];
var randoms = []
for (var i = 0; i < 4; i++){
  iftrue(conditions[i], random[i],randoms)
  console.log(i)
}
console.log(rs.value)

while (true) {
    let yy = [];

    for (let index = 0; index < rs.value; index++) {
        randomadd(yy, randoms);

    }
    console.log(yy)
    console.log(randoms)
    if (checker(randoms, yy) === true) {
      yy.forEach(ii => {
          if (ii === "1") {

              randomadd(password, miniscule);
          } else if (ii === "2") {

              randomadd(password, majuscule);
          } else if (ii === "3") {

              randomadd(password, number);
          } else {

              randomadd(password, characters);

          }

      });

      break
    }
    else{
      continue;
    }

}
console.log(password)
ouput.style.display= "block";
ouput.innerText = password.join("");
copy.addEventListener("click",() =>{
  var r = document.createRange();
  r.selectNode(document.getElementById("password"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
})
}) 