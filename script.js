let randomColor=()=>{
    let val="0123456789ABCDEF"
    let hash="#"
    for(i=0;i<6;i++){
        hash=hash+val[Math.floor(Math.random()*val.length)]

    }
    return hash
}
btn.addEventListener("click",()=>{
document.body.style.backgroundColor=randomColor()
})