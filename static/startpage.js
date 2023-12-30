function renderDatetime() {
    // declaring a list of all months in a year & days in a week
    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // get datetime now
    const now = new Date();
    const currentDisplaySecond = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds() ;
    const currentDisplayMinute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes() ;
    const currentDisplayHour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours() ;
    const currentDisplayDate = now.getDate() < 10 ? '0' + now.getDate() : now.getDate() ;
    const currentDisplayDay = dayList[now.getDay()].slice(0, 3);
    const currentDisplayMonth = monthList[now.getMonth()].slice(0, 3);
    const currentDisplayYear = now.getFullYear();

    // construct display datetime
    const displayDate = [
        currentDisplayDay,
        currentDisplayDate,
        currentDisplayMonth,
        currentDisplayYear
    ].join(separator=" ");
    const displayTime = [
        currentDisplayHour,
        currentDisplayMinute,
        currentDisplaySecond
    ].join(separator=":");

    // print current date and time to the DOM
    document.getElementById("displayCurrentDate").innerHTML = displayDate;
    document.getElementById("displayCurrentTime").innerHTML = displayTime;

    // refresh every 1000 ms
    setTimeout(renderDatetime, 1000);
}

window.addEventListener("load", () => {
    renderDatetime();
});