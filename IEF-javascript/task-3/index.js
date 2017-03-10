var button=document.getElementById("sort-btn");
button.onclick=function(){
    var source=document.getElementById("source");
    var arr=source.getElementsByTagName("li");
    var ul=document.getElementById("resort");
    var arr1=[];
    for(var i=0;i<arr.length;i++){
          arr1.push(arr[i].innerText);
    }
    arr1.forEach((x,i)=>{
        arr1[i]=x.split("：");
    });
    arr1.sort((x1,x2)=>{
        if(x1[1]<x2[1]) return 1;
        else return 0;
    }).forEach(x=>{
        var li=document.createElement("li");
        li.innerHTML=x[0]+":"+x[1];
        ul.appendChild(li);
    })
}