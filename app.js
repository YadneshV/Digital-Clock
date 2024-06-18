function showTime(){

    let day = new Date();
    let hrs = day.getHours();
    let mins = day.getMinutes();
    let sec = day.getSeconds();
    let session;

     if(hrs>=12){
        session = "PM"

    }else{session = "AM"}

    if(hrs > 12){
         hrs = hrs-12;
     }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    sec = sec < 10 ? "0" + sec : sec;




    let time = hrs + " : " + mins + " : " + sec +" "+session;

    document.getElementsByTagName('h1')[0].innerText = time;

    setTimeout(showTime,1000);

}