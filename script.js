let mujDiv = document.querySelector ("div")

// programátor dává z toho sůvodu že tam schválně nic nedal
let newLeft = null
let newTop = null

window.addEventListener ("keydown", function(event){
    // console.log(event.key);
    if(event.key == "ArrowLeft"){
    newLeft = newLeft - 10
    mujDiv.style.left = newLeft + "px"
    mujDiv.style.backgroundColor = "red"
} else if(event.key =="ArrowRight"){
    newLeft = newLeft + 10
    mujDiv.style.left = newLeft + "px"
    mujDiv.style.backgroundColor = "green"
}else if (event.key == "ArrowUp"){
    newTop = newTop - 10
    mujDiv.style.top = newTop + "px"
    mujDiv.style.backgroundColor = "yellow"
}else if (event.key == "ArrowDown"){
    newTop = newTop + 10
    mujDiv.style.top = newTop + "px"
    mujDiv.style.backgroundColor = "blue"
}
})