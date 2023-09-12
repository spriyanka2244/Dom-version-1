// //examin the document object 
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123
// console.log(document.doctype);
//console.log(document.head);
// console.log(document.body);
// console.log(document.all);
//  console.log(document.all[10]);
//  document.all[10].textContent='Hello';
//sconsole.log(document.forms[0]);
//console.log(document.links);
// console.log(document.images);




// getElementById 
// console.log(document.getElementById('header-title'));
// var header=document.getElementById('header-title');
// console.log(header)
// textcontent
// header.textContent="welcome"
// innerText
// header.innerText="lcome"
// innerHtml
// header.innerHTML="<h4>come</h4>"
// console.log(header);

// style border
// var headerMain =document.getElementById("main-header")
// headerMain.style.borderBottom ="solid 3px #000"



// getElementByClassId
// var items=document.getElementsByClassName("list-group-item")
// items[1].textContent="helloWorld"
// items[1].style.backgroundColor="yellow"
// items[1].style.fontWeight="bold"


//get error because you can't say
// items.style.backgroundColor="#f4f4f4"

//iterative
// for(var i=0;i<=items.length;i++){
//     items[i].style.backgroundColor="#f4f4f4"

 

// queryselector input and last child nth-child

// var header=document.querySelector('#main-header');
// header.style.borderBottom="solid 4px #000"

// var input=document.querySelector('input')
// input.value='welcome'

// var input=document.querySelector('input[type="submit"]')
// SubmitEvent.value="send"

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color ='blue'

// var secondItem =document.querySelector
// ('.list-group-item:nth-child(2)');

// secondItem.style.color="black"


// query selector all
// var titles =document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent ='hello';

// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

