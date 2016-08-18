(function () {
    var banner = document.getElementById('Gaming');
    var banner_img = document.getElementById('banner_img');
    var aDiv = banner_img.getElementsByTagName('div');
    var bottom_banner = document.getElementById('bottom_banner');
    var oUl = bottom_banner.getElementsByTagName('ul')[0];
    var aLi = bottom_banner.getElementsByTagName('li');
    var titleS=document.getElementById('titleS');
    var title=titleS.getElementsByTagName('div');
    var step = 0;
    var autoTimer = null;
    var interval = 3000;

//    渐隐渐现
    autoTimer = setInterval(autoMove, interval);
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        for (var i = 0; i < aDiv.length; i++) {
            var curEle = aDiv[i];
            if (i === step) {
                utils.css(curEle, 'zIndex', 2);
                zhufengAnimate(curEle, {opacity: 1}, 500, function () {
                    var siblings = utils.siblings(this);
                    for (var j = 0; j < siblings.length; j++) {
                        utils.css(siblings[j], 'opacity', 0);
                    }
                })
            } else {
                utils.css(curEle, 'zIndex', 0)
            }
        }
        bannerTip();
        getTitle();
    }
    function bannerTip(){
        for(var i=0;i<aLi.length;i++){
            aLi[i].className=i===step?'top_one':'';
        }
    }
    bottom_banner.onmousemove=function(){
        clearInterval(autoTimer);
    };
    bottom_banner.onmouseout=function(){
        autoTimer = setInterval(autoMove, interval);
    };

    headChange();
    function headChange() {
        for (var i = 0; i < aLi.length; i++) {
            (function(index){
                aLi[index].onclick=function(){
                    step=index;
                    setBanner()
                }
            })(i);
        }
    }
    function getTitle(){
        for(var i=0;i<title.length;i++){
            console.log(title[i]);
            title[i].className=i===step?"title_zIndex":"";
        }
    }
})();