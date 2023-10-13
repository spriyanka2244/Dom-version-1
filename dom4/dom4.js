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

// create del button element
var delbut=document.createElement('button');
// add class to del butn
delbut.className='btn btn-danger btn-sm float-right delete';

delbut.appendChild(document.createTextNode('X'));

// append button to li
li.appendChild(delbut);

// append li to list
itemList.appendChild(li);
}