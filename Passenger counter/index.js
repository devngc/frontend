let peopleCount = 0;

function increment() {
  peopleCount += 1;
  document.getElementById("count-el").textContent = peopleCount;
}

function save() {
  document.getElementById("save-el").textContent += " " + peopleCount + " - ";
  peopleCount = 0;
  document.getElementById("count-el").textContent = peopleCount;
}
