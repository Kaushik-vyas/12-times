
setInterval(() => {
const put = document.getElementById('put');
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
a = "AM";

if (hour > 12){
    hour -= 12;
    a = "pm";
}

if (hour == 0 ){
    hour = 12;
    a = "AM";
}

let now = hour + ":" + min + ":" + sec +" "+ a;

put.innerHTML = now;

}, 1000);
