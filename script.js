let hour = document.querySelector('#Hours');
let minute = document.querySelector('#Minutes')
let second = document.querySelector('#Seconds');

let hh = document.querySelector('#hh');
let mm = document.querySelector('#mm');
let ss = document.querySelector('#ss');

let ap = document.querySelector('#apm');

let hh_dot = document.querySelector('.hh_dot');
let mm_dot = document.querySelector('.mm_dot');
let ss_dot = document.querySelector('.ss_dot');

setInterval(() => {
  let h_hour = new Date().getHours()> 12 ? new Date().getHours()-12 : new Date().getHours();
  let m_minutes = new Date().getMinutes();
  let s_second = new Date().getSeconds();

  hour.innerHTML = h_hour<10 ? `0${h_hour}`:h_hour;
  minute.innerHTML = m_minutes<10 ? `0${m_minutes}`:m_minutes;
  second.innerHTML = s_second<10 ? `0${s_second}`:s_second;

   hh.style.strokeDashoffset = new Date().getHours()>12 ?  440-(440*(new Date().getHours()-12))/12 :440-(440*((new Date().getHours())))/12;
   mm.style.strokeDashoffset = 440-(440*(new Date().getMinutes()))/60;
   ss.style.strokeDashoffset = 440-(440*(new Date().getSeconds()))/60;

   new Date().getHours()>=12 ? ap.innerHTML = "PM" : ap.innerHTML = "AM"

   hh_dot.style.transform = new Date().getHours()>12 ?  `rotate(${new Date().getHours()*30}deg)` :`rotate(${(new Date().getHours()*30)}deg)`;
   mm_dot.style.transform = `rotate(${(new Date().getMinutes())*6}deg)`;
   ss_dot.style.transform = `rotate(${(new Date().getSeconds()) * 6}deg)`;

document.querySelector('body').style.backgroundColor = ap.innerHTML == "AM" ? '#b8babc':'#2f363e';

});



