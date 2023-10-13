//add event listener
var button = document.getElementById('button').addEventListener
('click',buttonClick);

function buttonClick(){
    //console.log('button clicked')
    document.getElementById('header-title').textContent="hello world"
    document.querySelector('#main').style.backgroundColor="red"
}