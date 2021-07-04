let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
} else {
  myLeads = [];
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = null;
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
    <li>
      <a href="${myLeads[i]}" target='_blank'>${myLeads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItem;
}

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  renderLeads();
});
