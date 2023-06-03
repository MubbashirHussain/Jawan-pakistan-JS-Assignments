var Hour = 0;
var Mint = 0;
var Sec = 0;
var MilSec = 0;

var InterVal

var hr = document.getElementById("Hour")
var mn = document.getElementById("Mint")
var sc = document.getElementById("Sec")
var msc = document.getElementById("Milsec")
var Start_Btn = document.getElementById("StartBtn")
var Stop_Btn = document.getElementById("StopBtn")
var Reset_Btn = document.getElementById("ResetBtn")


function renderHtml() {
    msc.innerText = (MilSec <= 9) ? msc.innerText = "0" + MilSec : msc.innerText = MilSec;
    sc.innerText = (Sec <= 9) ? sc.innerText = "0" + Sec : sc.innerText = Sec;
    mn.innerText = (Mint <= 9) ? mn.innerText = "0" + Mint : mn.innerText = Mint;
    hr.innerText = (Hour <= 9) ? hr.innerText = "0" + Hour : hr.innerText = Hour;
}
function Stop_watch_timer() {

    MilSec++;
    if (MilSec == 99) {
        MilSec = 0;
        Sec++;
        if (Sec == 60) {
            Sec = 0;
            Mint++;
        }
        if (Mint == 60) {
            Hour++;
            Mint = 0
        }
    }

    renderHtml()
}


function StartBtn() {
    InterVal = setInterval(function () {
        Stop_watch_timer()
    }, 10)
    Stop_Btn.disabled = false
    Start_Btn.disabled = true
}

function StopBtn() {
    clearInterval(InterVal)
    renderHtml()
    Stop_Btn.disabled = true
    Start_Btn.disabled = false
}

function ResetBtn() {
    Hour = 0;
    Mint = 0;
    Sec = 0;
    MilSec = 0;
    renderHtml()
    StopBtn()
}



// ============== Timer Start ============

var timer_Hour = document.getElementById("timer-Hour")
var timer_Mint = document.getElementById("timer-Mint")
var timer_Sec = document.getElementById("timer-Sec")
var timer_Milsec = document.getElementById("timer-Milsec")
var timer_Start_Btn = document.getElementById("timer_StartBtn")
var timer_Stop_Btn = document.getElementById("timer_StopBtn")
var timer_Reset_Btn = document.getElementById("timer_ResetBtn")
var AllInput = document.querySelectorAll("input[type = number]")
AllInput.forEach(elm => elm.oninput = input => elm.value = (elm.value.length > elm.maxLength) ? elm.value = elm.value.slice(0,elm.maxLength): elm.value)

var Timer_hr = 00;
var Timer_mn = 00;
var Timer_sc = 10;
var Timer_msec = 99;
var Timer_interval;

function Focs (){
    Timer_hr = parseInt(AllInput[0].value)
    Timer_mn = parseInt(AllInput[1].value)
    Timer_sc = parseInt(AllInput[2].value)
    Timer_msec = parseInt(AllInput[3].value);
}

function Timer_render() {
    timer_Milsec.value = (Timer_msec <= 9) ? timer_Milsec.innerTexvalue = "0" + Timer_msec : timer_Milsec.value = Timer_msec;
    timer_Sec.value = (Timer_sc <= 9) ? timer_Sec.value = "0" + Timer_sc : timer_Sec.value = Timer_sc;
    timer_Mint.value = (Timer_mn <= 9) ? timer_Mint.value = "0" + Timer_mn : timer_Mint.value = Timer_mn;
    timer_Hour.value = (Timer_hr <= 9) ? timer_Hour.value = "0" + Timer_hr : timer_Hour.value = Timer_hr;
}
function Timer_timer() {
    if(Timer_msec > 0){
        Timer_msec--;
    }
    if(Timer_msec == 0 && Timer_sc > 0) {
        Timer_sc--;
        Timer_msec = 99;
    }
    if (Timer_sc == 00 && Timer_mn > 0){
        Timer_sc = 60;
        Timer_mn--
    }
    if (Timer_mn == 00 && Timer_hr > 0){
        Timer_hr--
        Timer_mn = 60
    }
    if(Timer_hr == 0 && Timer_mn == 0 && Timer_sc == 0 && Timer_msec == 0){
        timer_StopBtn()
    }
    Timer_render()
}
function timer_StartBtn() {

    Timer_interval = setInterval(function () {
        Timer_timer()
    }, 10)
    Focs()
    timer_Start_Btn.disabled = true
    timer_Stop_Btn.disabled = false
    AllInput.forEach(e=>{e.disabled = true})


}
function timer_StopBtn() {
    clearInterval(Timer_interval)
    timer_Start_Btn.disabled = false;
    timer_Stop_Btn.disabled = true;
    AllInput.forEach(e=>{e.disabled = false})
}
function timer_ResetBtn() {
    Timer_hr = 00;
    Timer_mn = 00;
    Timer_sc = 00;
    Timer_msec = 00;
    timer_StopBtn()
    Timer_render()
}
