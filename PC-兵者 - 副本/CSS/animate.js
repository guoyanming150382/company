/**
 * Created by Administrator on 2017/4/1.
 */

function animate(ele, json, fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        var bool = true;
        for (var k in json) {
            if (k === "z-index") {
                ele.style.zIndex = json[k];
            } else if (k === "opacity") {
                var leader = parseInt(getStyle(ele, k) * 10) || 10;
                var step = (parseInt(json[k] * 10) - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader / 10;
                //����ie678:
                ele.style.filter = "alpha(opacity=" + leader * 10 + ")";
                if (parseInt(json[k] * 10) !== leader) {
                    bool = false;
                }
            } else {
                //��������,����һ���߼�
                var leader = parseInt(getStyle(ele, k)) || 0;
                var step = (json[k] - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                if (json[k] !== leader) {
                    bool = false;
                }
            }
        }
        console.log(1);
        if (bool) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}

function getStyle(ele, attr) {
    if (ele.currentStyle !== undefined) {
        return ele.currentStyle[attr];
    } else {
        //����ȸ�ie9+֧�ֵķ���
        return window.getComputedStyle(ele, null)[attr];
    }
}

function scroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop
    };
}

//�����ƶ�.
function animate1(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
        var step = target > ele.offsetLeft ? 10 : -10;
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 10);
}