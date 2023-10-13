var form =document.getElementById('addForm');
var itemList=document.getElementById('items');


// form submit event
form.addEventListener('submit',addItem);


// Add Item
function addItem(e){
// prevent Intial behaviour
e.prevent.default();
console.log(1);
}