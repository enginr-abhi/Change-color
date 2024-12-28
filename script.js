let i=0;
function changeColor(){
    let color=["red","blue","orange","yellow","green","purple"];
    document.getElementsByTagName("body")[0].style.background=color[i++];
    if(i>color.length-1)
        i=0;
}