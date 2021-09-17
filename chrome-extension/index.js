let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = null;
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
