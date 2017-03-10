var button=document.getElementById("sort-btn");
button.onclick=function(){
    var arr=document.querySelectorAll("#source>li");
    var ul=document.getElementById("resort");
    [].slice.call(arr).map(x=>{
        return x.innerText.split("：");
    }).sort((x1,x2)=>{
        return x2[1]-x1[1];
    }).forEach(x=>{
        if(ul.childNodes.length<=6){
            var li=document.createElement("li");
            li.innerHTML=x[0]+":"+x[1];
            ul.appendChild(li);
        }
    });
}