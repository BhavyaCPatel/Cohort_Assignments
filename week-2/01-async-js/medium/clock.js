const currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

const count = () => {
    setTimeout(()=>{
        seconds += 1;
        if(seconds >= 60){
            seconds = 0;
            minutes += 1;
        }
        if(minutes >= 60){
            minutes = 0;
            hours += 1;
        }
        console.log(hours + ":" + minutes + ":" + seconds);
        count();
    }, 1000) 
}

count();