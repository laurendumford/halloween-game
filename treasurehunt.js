var pickOne = Math.floor(Math.random() * 9)
var pickTwo = Math.floor(Math.random() * 9)
var pickThree = Math.floor(Math.random() * 9)
var pickFour = Math.floor(Math.random() * 9)
var pickFive = Math.floor(Math.random() * 9)
var pickSix = Math.floor(Math.random() * 9)
var pickSeven = Math.floor(Math.random() * 9)
var pickEight = Math.floor(Math.random() * 9)
var pickNine = Math.floor(Math.random() * 9)
var clickCount = 0;
console.log(pickOne)
console.log(pickTwo)
console.log(pickThree)
console.log(pickFour)
console.log(pickFive)
console.log(pickSix)
console.log(pickSeven)
console.log(pickEight)
console.log(pickNine)

const treasure = (id) => {
  if (id === pickOne)
  {document.getElementById(pickOne).innerHTML = "<img src='pumpkin.png'width='150px'>"
    setTimeout(function(){confirm("YOU WON! You found the candy! Try not to eat it all in one night");
    window.location.reload();}, 300);
}
  else if (id === pickTwo)
  {document.getElementById(pickTwo).innerHTML = "<img src='clown.png' width='150px'>"
    setTimeout(function(){alert("Mwhaha! Picking wrong isn't so funny is it?!")}, 300)
}
  else if (id === pickThree)
  {document.getElementById(pickThree).innerHTML = "<img src='bat.png' width='150px'>"
  setTimeout(function(){alert("Playing with bats? Watch out for rabies!")}, 300)
}
else if (id === pickFour)
  {document.getElementById(pickFour).innerHTML = "<img src='cat.png' width='150px'>"
  setTimeout(function(){alert("What a cat-astrophe! Are you even trying to find the candy?")}, 300)
}
else if (id === pickFive)
  {document.getElementById(pickFive).innerHTML = "<img src='mummy.png' width='150px'>"
  setTimeout(function(){alert("We really do have the location on that candy under wraps.")}, 300)
}
else if (id === pickSix)
  {document.getElementById(pickSix).innerHTML = "<img src='poison.png' width='150px'>"
  setTimeout(function(){alert("At least you found something you could digest. Although I wouldn't reccomend it...")}, 300)
}
else if (id === pickSeven)
  {document.getElementById(pickSeven).innerHTML = "<img src='tombstones.png' width='150px'>"
  setTimeout(function(){alert("I knew you were dying to find this candy, but really?!")}, 300)
}
else if (id === pickEight)
  {document.getElementById(pickEight).innerHTML = "<img src='vampire.png' width='150px'>"
  setTimeout(function(){alert("Don't you wish you could just sink your fangs into that candy?")}, 300)
}
else if (id === pickNine)
  {document.getElementById(pickNine).innerHTML = "<img src='zombie.png' width='150px'>"
  setTimeout(function(){alert("Well it looks like you're the one on the menu now!")}, 300)
}
else
  {document.getElementById(id).innerHTML = "<img src='owl.png' width='150px'>"
  setTimeout(function(){alert("Whooooo is even looking for the candy? Because with these picks I know it isn't you.")}, 300)
}
const counter = () => {
    clickCount = clickCount + 1;
    if (clickCount === 3 && id !== pickOne) {
    alert("Sorry you ran out of tries! Start over.");
      document.location.reload();
    }
    document.getElementById("counter").innerHTML = `${clickCount}`;
  };
  counter();
}
