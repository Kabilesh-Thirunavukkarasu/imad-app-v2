console.log('Loaded!');
//var element=document.getElementById('kb');
//element.innerHTML='This is the text';

var img=document.getElementById('pic');


var marginLeft = 0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
}
pic.onclick = function() {
    var interval = setInterval(moveRight,50);
};

var counter=0;
var button=document.getElementById('counter');
button.onclick = function(){
    
    //Render span
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};