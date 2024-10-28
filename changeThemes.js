function changeThemes(){
    const summer = document.getElementById("summer");
    const winter = document.getElementById("winter");
    const spring = document.getElementById("spring");
    const fall = document.getElementById("fall");
    
    const theme = document.getElementById("theme");
    if(summer.checked === true){
        theme.className = "summer";
    }
    if(winter.checked === true) {
        theme.className = "winter";
    }
    if(spring.checked === true) {
        theme.className = "spring";
    }
    if(fall.checked === true) {
        theme.className = "fall";
    }
}