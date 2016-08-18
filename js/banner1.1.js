/**
 * Created by xiao lei on 2016/7/7.
 */
function Banner(idName, interval) {
    this.oBox = document.getElementById(idName);

    this.oBoxInner = this.oBox.getElementsByTagName('div')[0];

    this.aDiv = this.oBoxInner.getElementsByTagName('div');

    this.aImg = this.oBoxInner.getElementsByTagName('img');
    this.oBoxInner_Two = this.oBox.getElementsByTagName('div')[7];

    this.oUl = this.oBoxInner_Two.getElementsByTagName('ul')[0];
    this.aLi = this.oUl.getElementsByTagName('li');

    this.oBoxInner_Thr = this.oBox.getElementsByTagName('div')[8];
    this.aDiv_Two = this.oBoxInner_Thr.getElementsByTagName('div');

    this.oBtnLeft = this.oBox.getElementsByTagName('a')[0];
    this.oBtnRight = this.oBox.getElementsByTagName('a')[1];
    this.autoTimer = null;
    this.step = 0;
    this.interval = interval || 1000;
    this.init();//初始化函数init中都是函数调用的思路
}
Banner.prototype = {
    constructor: Banner,
    init: function () {
        var _this = this;
        //获取数据
        //this.getData();
        //绑定数据
        //this.bind();
        //延迟加载
        //this.lazyImg();
        //自动轮播
        clearInterval(this.autoTimer);
        this.autoTimer = setInterval(function () {
            _this.autoMove();//焦点轮播在autoMove里的setBanner里调用
        }, this.interval);
        //鼠标移入移出
        this.overOut();
        //点击焦点切换
        this.handleChange();
        //左右按钮切换
        //this.leftRight();

    },

    autoMove: function () {
        if (this.step >= this.aDiv.length - 1) {
            this.step = -1;
        }
        this.step++;
        this.setBanner();
    },
    setBanner: function () {
        for (var i = 0; i < this.aDiv.length; i++) {
            var curEle = this.aDiv[i];
            if (i === this.step) {
                utils.css(curEle, 'zIndex', 2);
                zhufengAnimate(curEle, {opacity: 1}, 500, function () {
                    var siblings = utils.siblings(this);
                    for (var j = 0; j < siblings.length; j++) {
                        utils.css(siblings[j], 'opacity', 0)
                    }
                })
            } else {
                utils.css(curEle, 'zIndex', 0);
            }
        }
        this.bannerTip();
        this.getTitle();
    },
    bannerTip: function () {
        for (var i = 0; i < this.aLi.length; i++) {
            this.aLi[i].className = i === this.step ? 'top_one' : '';
        }
    },
    overOut: function () {
        var _this = this;
        this.oUl.onmouseover = function () {
            clearInterval(_this.autoTimer);
        };
        this.oUl.onmouseout = function () {
            _this.autoTimer = setInterval(function () {
                _this.autoMove();
            }, _this.interval);
        }
    },
    handleChange: function () {
        var _this = this;
        for (var i = 0; i < this.aLi.length; i++) {
            (function (index) {
                _this.aLi[index].onclick = function () {
                    _this.step = index;
                    _this.setBanner();
                }
            })(i);
        }
    },
    //leftRight:function(){
    //    var _this=this;
    //    this.oBtnRight.onclick=function(){
    //        _this.autoMove();
    //    };
    //    this.oBtnLeft.onclick=function(){
    //        if(_this.step<=0){
    //            _this.step=_this.aDiv.length;
    //        }
    //        _this.step--;
    //        _this.setBanner();
    //    }
    //}

    getTitle: function () {

        for (var i = 0; i < this.aDiv_Two.length; i++) {

            this.aDiv_Two[i].className = i === this.step ? "title_zIndex" : "";
        }
    }
};