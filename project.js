
for(var i=1; i<=16; i++){
    const box = document.createElement("div");
    let row_name=("row"+i);
    box.id=row_name;
    document.getElementById("container").appendChild(box);
    
    let d = document.getElementById(row_name);
    d.className += " flex"; 

    for(var j=1;j<=16;j++){
        const box1 = document.createElement("div");
        let blockname = (row_name +" - "+j); 
        box1.id = blockname; 
        document.getElementById(row_name).appendChild(box1);

        let a = document.getElementById(blockname);
        a.className += "block";  
    }
}

let elements = document.getElementsByClassName("block");

for(let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() { colour(i) }); 
}


function colour(value) {
    elements[value].style.backgroundColor="black";
}


