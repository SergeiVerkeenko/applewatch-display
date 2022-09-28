const watch = document.querySelector('.wrapper h2');
const date = document.querySelector('.wrapper p');
function doData(watch, date) {
    if (new Date().getMinutes() < 10) {
        watch.innerHTML = `${new Date().getHours()}-0${new Date().getMinutes()}`;
    } else {
        watch.innerHTML = `${new Date().getHours()}-${new Date().getMinutes()}`;
    }
    date.innerHTML = new Date().getFullYear();

}
setInterval(doData, 1000, watch, date)