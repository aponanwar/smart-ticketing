const seats = document.getElementsByTagName('button');
console.log(seats);
let mySeatsName=[];
for (let index = 3; index < 39; index++) {
  const element = seats[index];
//   console.log(element);
  console.log(element.innerText);
    mySeatsName.push(element.innerText);
    
}



