let items = [
    { 
        id: 1, 
        name: "milk", 
        checked: false 
    },
    { 
        id: 2, 
        name: "cookies", 
        checked: true 
    }
];


let appendItems = function(items){
    $("#items").append(items)
};
function generatetHtml(items) {
    let stringToInject = "";
    items.forEach(element => {
        let builtHtml = buildHtml(element);
        stringToInject = stringToInject + builtHtml;
    });
    deleteItems();
    appendItems(stringToInject);
}

function deleteItems() {
    $("#items").empty();
}

function buildHtml(item) {
    let checkString = "";
    if (item.checked === true){
        checkString = "checked";
    }
    return `<input type="checkbox" ${checkString} name="items" value="${item.id}"> ${item.name}<br>`;
}
function saveItem() {
  let val = $("#inputBox").val();
  items.push({
      id:3, name:val, checked:false
  })
  generatetHtml(items);
  localStorage.setItem("toDoItems", JSON.stringify(items));
}

items = JSON.parse(localStorage.getItem("toDoItems")) || items;


generatetHtml(items);
generatetHtml(items);
