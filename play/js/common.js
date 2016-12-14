
    /*rem字体*/
    var body_width=750;
    body_width = $(window).width() <= 750 ? $(window).width() : 750;
    var docEl = document.documentElement,myfontSize;
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            //设置根字体大小
            myfontSize = body_width/750*100;
            // console.log(myfontSize);
            if(myfontSize > 100){
                myfontSize = "100px";
            }
            docEl.style.fontSize = myfontSize + 'px'; 
        };
    //绑定浏览器缩放与加载时间
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false); 