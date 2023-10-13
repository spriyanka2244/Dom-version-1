//add event listener
var button = document.getElementById('button').addEventListener
('click',buttonClick);

function buttonClick(e){
    //console.log('button clicked')
    // document.getElementById('header-title').textContent="hello world"
    // document.querySelector('#main').style.backgroundColor="red"
  
    // target    
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    // gives array of dom taken list 
    console.log(e.target.classList);  
    
}