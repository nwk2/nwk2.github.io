// slider
document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1) {
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function (e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
 
});

// magic icon
function hand() {
    var a;
    a = document.getElementById("div1").style;
    setTimeout(function () {
        a = "color: #eee";
    }, 500);
    setTimeout(function () {
        a = "color: black";
    }, 1000);
}
hand();
setInterval(hand, 2000);