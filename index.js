let peopleCount = 0;

function increment() {
  peopleCount += 1;
  document.getElementById("count-el").innerHTML = peopleCount;
}

function save() {
  console.log(peopleCount);
}
