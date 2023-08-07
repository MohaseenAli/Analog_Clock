setInterval(() => {
    todays = new Date();
    htime = todays.getHours();
    mtime = todays.getMinutes();
    stime = todays.getSeconds();
    date = todays.getDate();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    const dateHtml = document.getElementById("date")
    dateHtml.innerHTML = date;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);