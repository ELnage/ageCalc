let show = document.querySelector(".show")
document.querySelector(".btn").onclick = function () {
  show.innerHTML = "";
  let now = new Date();
  let bd = new Date(`${document.querySelector(".birthday").value}T00:00:00`);
  let years = ((now - bd) / 1000 / 60 / 60 / 24 / 365.25)
  let days = (years - Math.floor(years))*365.25
  let hours = now.getHours() - bd.getHours()
  let mins = now.getMinutes() - bd.getMinutes();
  let sec = now.getSeconds() - bd.getSeconds();
  // let hours = (days - Math.floor(days))*24
  // let mins = (hours - Math.floor(hours))*60;
  // let sec = (mins - Math.floor(mins))*60
  if (now > bd) {
    let result = document.createElement("span");
    result.className = "result"
    result.textContent = `عمرك هو =>
    ${Math.floor(years)} سنة , 
    ${Math.floor(days)} يوم ,
    ${Math.floor(hours)} ساعة , 
    ${Math.floor(mins)} دقيقة , 
    ${Math.floor(sec)} ثانية `;
    let details = document.createElement("div")
    details.className = "details"
    let spanDay = document.createElement("span")
    spanDay.textContent = `عمرك بالايام هو ${(Math.floor((now - bd) / 1000 / 60 / 60 / 24))}`;
    let spanHours = document.createElement("span")
    spanHours.textContent = `عمرك بالساعات هو ${ Math.floor(((now - bd) / 1000 / 60 / 60 ))}`
    let spanMin = document.createElement("span")
    spanMin.textContent = `عمرك بالدقائق هو ${ Math.floor(((now - bd) / 1000 / 60 ))}`
    let spanSec = document.createElement("span")
    spanSec.textContent = `عمرك بالثواني هو ${Math.floor((now - bd) / 1000)}`;
    details.append(spanDay , spanHours , spanMin , spanSec)
    show.append(result , details);
  } else {
    let errorSpan = document.createElement("span")
    errorSpan.className = "Error"
    errorSpan.textContent = "تاريخ ميلاد غير صالح"
    show.append(errorSpan)
  }
};
