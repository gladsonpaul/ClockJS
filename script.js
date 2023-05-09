

let time = document.getElementById('time');
let day = document.getElementById('day');


setInterval(clocktiming, 1000)

function clocktiming() {
    let a = new Date()
    let days = a.getDay()
    // let h = a.getHours()
    // let m = a.getMinutes()
    // let s = a.getSeconds()
    // time.innerHTML = (`${h}:${m}:${s} `)

    let times = a.toLocaleTimeString()

    time.innerHTML = times
    day.innerHTML = days

}