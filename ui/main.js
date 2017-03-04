console.log('Loaded!');
var element=document.getElementById('kb');
element.innerHTML='This is the text';

var img=document.getElementById('pic');

var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
}
pic.onclick = function() {
    var interval = setinterval(moveRight,100);
};