var bgImg = ['1.jpg', '2.jpg', '3.jpg'];
var key = 1;

setInterval(carouselImg, 5000);
function carouselImg() {
    if (key == bgImg.length) {
        key = 0;
    }

    var homepageBg = document.getElementsByClassName("homepage-bg");
    homepageBg[0].style.backgroundImage = 'url("assets/img/homepage-bg/' + bgImg[key] + '")';
    key++;

    var priorityDown = document.getElementsByClassName("homepage-bg");
    priorityDown[0].style.opacity = 1;

    document.getElementById("fade_out").className = "homepage-bg" + ' ' + "fade_out";
}