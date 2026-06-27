const clock = document.querySelector("#clock");
console.log(clock);

// const time = new Date();

// clock.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

setInterval(function(){
   const time = new Date();
   clock.innerHTML = time.toLocaleTimeString();
},1000);