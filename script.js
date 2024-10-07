const bodyele = document.querySelector("body");
bodyele.addEventListener("mousemove",(e)=>{
     const xcord =e.offsetX
     const ycord = e.offsetY
    const spanele = document.createElement("span")
   
    spanele.style.left =`${xcord}px`
    spanele.style.top =`${ycord}px`
    const size =Math.random()*100
    spanele.style.width =`${size}px`
    spanele.style.height=`${size}px`
    bodyele.appendChild(spanele)

setTimeout(()=>{
    spanele.remove()
    
},1000)


})
