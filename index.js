let t;
let time;
let date;
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

setInterval(() => {
    t= new Date();
    date=t.toLocaleDateString(undefined,options);
    time = t.getHours() + ":" + t.getMinutes() +':'+ t.getSeconds();
    document.getElementById("time").innerHTML = time +" <br> on " + date;
}, 1000);

console.log(document.getElementById("time"))