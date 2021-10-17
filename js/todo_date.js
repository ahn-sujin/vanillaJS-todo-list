const appMonth = document.querySelector('.month');
const appDate = document.querySelector('.date');
const appYear = document.querySelector('.year');
const appDay = document.querySelector('.day');



function getDate(){
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.','Nov.','Dec.']
    const days =  ['Sunday', 'Monday', 'Tuesday', 'Wedesday', 'Thursday','Friday', 'Saturday']
    
    const today =  new Date();
    const monthName = months[today.getMonth()];
    const dayName = days[today.getDay()];
    const yearName = today.getFullYear();
    const dateName = today.getDate();

    appYear.innerText = `${yearName}`;
    appMonth.innerText = `${monthName}`;
    appDay.innerText = `${dayName}`;
    appDate.innerText = `${dateName}`;


}

getDate();

