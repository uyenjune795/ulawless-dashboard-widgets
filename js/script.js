
var cycleBG = (function () {
    var bgLayout = document.querySelector('.layout'),
        progressBar = document.querySelector('#bgProgress'),
        duration = 8000,
        bgImages = [
            "images/quote-1.jpg",
            "images/quote-2.jpg",
            "images/quote-3.jpg",
            "images/quote-4.jpg",
            "images/quote-5.jpg",
            "images/quote-9.jpg"
            
        ],
        i = 0,
        x = 0;

    function changeBg() {
        //if i >= bgImages.length -1
        (i >= bgImages.length - 1) ? i = 0:
            //else
            i++;

        //change bg image
        bgLayout.style.backgroundImage = 'url(' + bgImages[i] + ')';
    }

    changeBg();

    setInterval(function () {
        x === 100 ?
            (x = 0, changeBg()) :
            x++;
        progressBar.style.width = x + '%';
    }, (duration / 100));
}());
