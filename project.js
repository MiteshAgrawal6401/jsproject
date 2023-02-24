
for(var i=1; i<=16; i++){
    const box = document.createElement("div");
    let row_name=("row"+i);
    box.id=row_name;
    document.getElementById("container").appendChild(box);
    
    let d = document.getElementById(row_name);
    d.className += " flex"; 
for(var j=1;j<=15;j++){
    const box1 = document.createElement("div");
    let column_name=("row"+i+" -"+j);
    box1.id=column_name;
    document.getElementById(row_name).appendChild(box1);

    let b= document.getElementById(column_name);
    b.className += " block"; 

    
}
}

let element=document.getElementsByClassName(" block");

for( let i=0 ; i<element.length; i++){
    element[i].addEventListener("click",function(){mark(i)});
}
    
function mark(value){
    element[value].style.backgroundColor="black";
}




