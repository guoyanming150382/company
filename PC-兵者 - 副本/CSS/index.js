/**
 * Created by Administrator on 2017/3/31.
 */
window.onload = function() {
    var arrOfJson = [{
            width: 400,
            top: 70,
            left: 50,
            opacity: 0.2,
            "z-index": 2
        },
        {
            width: 600,
            top: 120,
            left: 0,
            opacity: 0.6,
            "z-index": 3
        },
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            "z-index": 4
        },
        {
            width: 600,
            top: 120,
            left: 600,
            opacity: 0.6,
            "z-index": 3
        },
        {
            width: 400,
            top: 70,
            left: 750,
            opacity: 0.2,
            "z-index": 2
        }
    ];
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = document.getElementById("arrow");
    var prev = arrow.children[0];
    var next = arrow.children[1];
    for (var i = 0; i < liArr.length; i++) {
        animate(liArr[i], arrOfJson[i]);
    }
    slide.onmouseover = function() {
        animate(arrow, { "opacity": 1 });
    }
    slide.onmouseout = function() {
        animate(arrow, { "opacity": 0 });
    }

    var bool = true;
    autoPlay();

    next.onclick = function() {
        if (bool) {
            autoPlay(true);
            bool = false;
        }
    }
    prev.onclick = function() {
        if (bool) {
            autoPlay(false);
            bool = false;
        }
    }

    function autoPlay(flag) {
        if (flag !== undefined) {
            if (flag) {
                arrOfJson.push(arrOfJson.shift());
            } else {
                arrOfJson.unshift(arrOfJson.pop());
            }
        }
        for (var i = 0; i < liArr.length; i++) {
            animate(liArr[i], arrOfJson[i], function() {
                bool = true;
            });
        }
    }
}