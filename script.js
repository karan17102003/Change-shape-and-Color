let contaner=document.getElementById("contaner");
let colorContainer=document.createElement("div");
colorContainer.classList.add("color-continer");
contaner.append(colorContainer);
console.log("colorContainer");



function randonColor(){
    let str="0123456789abcdef";
    let colorStr="#";
    for(let i=0;i<6;i++){
        let randomIndex=Math.floor(Math.random()*str.length);
        colorStr+=str[randomIndex];
    }
    return colorStr;
}
randonColor();
let bntColor=document.getElementById("bnt_color");
bntColor.addEventListener("click" ,()=>{
let newColor=randonColor();
colorContainer.style.backgroundColor=newColor;
});
 function shapes(){
    let str="123";
    let Index=Math.floor(Math.random()*str.length);
    let shape=str[Index];
    return shape;

 }
 shapes();
 let shapeco=document.getElementById("shapeco");
 let bntShape=document.getElementById("bnt_shape");
 let shapeContainer=document.createElement("div");
 shapeContainer.classList.add("shape-continer");
 shapeco.appendChild(shapeContainer);
 bntShape.addEventListener("click",()=>{
    if(shapes()==1){
        shapeContainer.style.height="100px";
        shapeContainer.style.width="100px";
        shapeContainer.style.borderRadius="0";
        shapeContainer.style.margin=" 45px ";
        shapeContainer.style.backgroundColor=randonColor()  ;
        
    }
    else if(shapes()==2){
        shapeContainer.style.height="100px";
        shapeContainer.style.width="150px";
        shapeContainer.style.borderRadius="0";
        shapeContainer.style.margin=" 45px 25px";
        shapeContainer.style.backgroundColor=randonColor()  ;

        
    }
    else if(shapes()==3){
        shapeContainer.style.height="100px";
        shapeContainer.style.width="100px";
        shapeContainer.style.borderRadius="50%";
        shapeContainer.style.margin=" 45px";
        shapeContainer.style.backgroundColor=randonColor()  ;
       
    }
    
 })
