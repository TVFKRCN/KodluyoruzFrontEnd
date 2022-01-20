let fullName = prompt("Lutfen Adinizi Giriniz: ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d = date.getDay();
  
    if (d == 1) {
      d = "Pazartesi";
    } else if (d == 2) {
      d = "Salı";
    } else if (d == 3) {
      d = "Çarşamba";
    } else if (d == 4) {
      d = "Perşembe";
    } else if (d == 5) {
      d = "Cuma";
    } else if (d == 6) {
      d = "Cumartesi";
    } else if (d == 7) {
      d = "Pazar";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + d;
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(showTime, 1000);
  }

  showTime();