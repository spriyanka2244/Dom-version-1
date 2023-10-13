//add event listener
// var button = document.getElementById('button').addEventListener
// ('click',buttonClick);

// function buttonClick(e){
    //console.log('button clicked')
    // document.getElementById('header-title').textContent="hello world"
    // document.querySelector('#main').style.backgroundColor="red"
  
    // target    
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // // gives array of dom taken list 
    // console.log(e.target.classList);  
    // // output the stuff
    //  var output=document.getElementById('output');
    // output.innerHTML='<h3>' +e.target.id+ '</h3>';
    
    //   type of event
    // console.log(e.type);

    // mouse event 
    // // window actual position  by x and y axis
    // console.log(e.clientX);
    // console.log(e.clientY);
    // // actual element position 
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // if you click using alt/ctrl/shift its true else output as false in inspect
    // console.log(e.altKey);
    // console.log(e.ctrlkey);
    // console.log(e.shiftKey);
// }

// mouse event 
var button = document.getElementById('button')
var box=document.getElementById('box');
// var output=document.getElementById('output');

// button.addEventListener('click',runEvent);
// button.addEventListener('dbclick',runEvent);
// mouse down when u click the event occure
//  button.addEventListener('mousedown',runEvent);
// click and hold nothing happens when you free the hold of the  click event occur
// button.addEventListener('mouseup',runEvent);

// will be for outer element only  
// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)

//will be for inner element also like in the box u have text hello if you mouseour the event ocure
// box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)

// it count how many times thhe mouse moved in thhe box
// box.addEventListener('mousemove',runEvent)

// submit value you get
var itemInput=document.querySelector('input[type="text"]'); 
var form=document.querySelector('form');
var select=document.querySelector('select');


// it count what ever you type in submit box when you enter
//  itemInput.addEventListener('keydown',runEvent);

// it count what ever you type in submit box when you enter and hold out it will count
// itemInput.addEventListener('keyup',runEvent);

// when you press any key
// itemInput.addEventListener('keypress',runEvent);

// the submit box will focus 
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// anything you do in submit box
// itemInput.addEventListener('input',runEvent);
select.addEventListener('change',runEvent)

function runEvent(e){
    console.log("event type:" +e.type);
    // document.body.style.display='none'

    // to catch the value in submit box
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

//    output.innerHtml='<h3>MouseX:' +e.offsetX+'</h3> <h3>MouseX' +e.offsetY +'</h3>';
// box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
// document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
}

