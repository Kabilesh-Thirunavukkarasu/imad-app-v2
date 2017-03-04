console.log('Loaded!');
var element=document.getElementById('kb');
element.innerHTML='This is the text';

var imp=document.getElementById('pic');

var marginleft = 0;
function moveRight(){
    marginleft=marginleft+10;
    pic.style.marginleft=marginleft + 'px';
};
pic.onclick = function() {
    var interval = (moveRight,100);
};