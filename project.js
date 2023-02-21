
for(var i=1; i<=16; i++){
    const box = document.createElement("div");
    let row_name=("row"+i);
    box.id=row_name;
    document.getElementById("container").appendChild(box);
    
    let d = document.getElementById(row_name);
    d.className += " flex"; 
for(var j=1;j<=15;j++){
    const box1 = document.createElement("div");
    box1.id="column";
    document.getElementById(row_name).appendChild(box1);
}
}



