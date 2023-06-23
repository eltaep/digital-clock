let thisday=document.querySelector('.day')
let minites=document.querySelector('.minites')
let numofhours=document.querySelector('.hours')
let amorpm=document.querySelector('.ampm')
setInterval(() => {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", {
      weekday: "short",
    });
    thisday.innerHTML=dayName;

    let hour = today.getHours();
if (hour < 12) {
  amorpm.innerHTML = "AM";
  numofhours.innerHTML=`${hour} hours`
} else {
  amorpm.innerHTML = "PM";
  numofhours.innerHTML=`${hour-12} hours`

}
minites.innerHTML=today.getMinutes()



    
}, 1000);


