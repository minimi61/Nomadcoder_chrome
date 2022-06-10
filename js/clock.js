const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    let hours = String(date.getHours()).padStart("2",0);
    let minutes = String(date.getMinutes()).padStart("2",0);
    let seconds =  String(date.getSeconds()).padStart("2",0);
    // if (minutes.toString().length < 2) {
    //     minutes = '0' + minutes;
    // } 
    
    // if (seconds.toString().length < 2) {
    //     seconds = '0' + seconds;
    // } 
    clock.innerText =hours+ ':'+ minutes +':'+ seconds
        // `${date.getHours()}:${minutes}:${seconds}`
}


getClock()
setInterval(getClock,1000)
