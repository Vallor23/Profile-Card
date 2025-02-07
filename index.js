function updtateTimeUTC () {
    const utcTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
    const date = new Date();
    const utcDate = date.toUTCString();
    utcTimeElement.textContent = `Current UTC time ${utcDate}`
}
 updtateTimeUTC();
setInterval(updtateTimeUTC, 1000);