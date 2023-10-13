var form =document.getElementById('addForm');
var itemList=document.getElementById('items').value;


// form submit event
form.addEventListener('submit',addItem);


// Add Item
function addItem(e){
// prevent Intial behaviour
e.prevent.default();

// get input value
var newItem=document.getElementById("item");

// create new li element
var li=document.createElement('li');
// add className
li.className="list-group-item";
// add text node with input value
li.appendChild(document.createTextNode(newItem));

itemList.appendChild(li);
}