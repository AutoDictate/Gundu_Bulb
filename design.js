function changeImg(){
    var pic = document.getElementById("bulb");
    
    if(pic.src.match("ON"))
    {
        console.log("ON");
        pic.src = "OFF.jpg";
    }
    else{
        console.log("OFF");
        pic.src = "ON.jpg"
    }
}