
setInterval(setClock, 10);

function setClock(){
    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);

}

function setRotation(element, rotRatio){
    element.style.setProperty('--rotation', rotRatio * 360);
}

// setClock()