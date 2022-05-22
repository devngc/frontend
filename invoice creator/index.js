const menuEl = document.getElementById("menu");
const washCarBtn = document.getElementById("wash-car");
const mowLawnBtn = document.getElementById("mow-lawn");
const pullWeedsBtn = document.getElementById("pull-weeds");
const invoiceBtn = document.getElementById("invoice-btn");
const totalEl = document.getElementById("total");
const itemsObj = {
  "wash-car": washCarBtn,
  "mow-lawn": mowLawnBtn,
  "pull-weeds": pullWeedsBtn,
};

let menuItemsIds = [];

function resetTable() {
  menuEl.innerHTML = "";
  totalEl.innerHTML = "$0";
  menuItemsIds = [];
}

function removeId(id) {
  const index = menuItemsIds.indexOf(id);
  if (index > -1) {
    menuItemsIds.splice(index, 1);
    renderItems();
  } else {
    resetTable();
  }
}

function renderItems() {
  let menuItems = "";
  let total = 0;
  for (let i = 0; i < menuItemsIds.length; i++) {
    const itemArray = itemsObj[menuItemsIds[i]].innerHTML.split(":");
    const itemName = itemArray[0];
    const itemPrice = itemArray[1].split("$")[1];
    total += parseInt(itemPrice);
    const divEl = `
          <div class="menu-items">
              
              <div class="sub-menu">
                  <p class="item-name">${itemName}</p>
                  <div id="btn-div">
                      <button class="remove-btn" onClick="removeId('${menuItemsIds[i]}')">Remove</button>
                  </div>
              </div>
              
              <div class="sub-menu">
                  <p class="dollar-sign">$</p>
                  <p class="item-price">${itemPrice}</p>
              </div>
              
          </div>
          `;
    menuItems += divEl;
    menuEl.innerHTML = menuItems;
    totalEl.innerHTML = `$${total}`;
  }
}

washCarBtn.addEventListener("click", function () {
  if (menuItemsIds.includes("wash-car") === false) {
    menuItemsIds.push("wash-car");
    renderItems();
  }
});

mowLawnBtn.addEventListener("click", function () {
  if (menuItemsIds.includes("mow-lawn") === false) {
    menuItemsIds.push("mow-lawn");
    renderItems();
  }
});

pullWeedsBtn.addEventListener("click", function () {
  if (menuItemsIds.includes("pull-weeds") === false) {
    menuItemsIds.push("pull-weeds");
    renderItems();
  }
});
invoiceBtn.addEventListener("click", function () {
  resetTable();
});
