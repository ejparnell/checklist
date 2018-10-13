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


let appendListItem = function(item){
    $("#items").append(`<input type="checkbox" name="items" value="${item.id}"> ${item.name}<br>`)
};
items.forEach(appendListItem);
