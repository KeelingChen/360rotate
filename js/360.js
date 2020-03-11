window.onload = function () {
    var x = 0;
    var oImg = document.getElementById('img1');
    var lastX = 0;
    var iSpeed = 0;
    var timer = null;

    this.document.onmousedown = function (ev) {
        clearInterval(timer);
        var oEvent = ev || event;
        var disX = oEvent.clientX - x; //鼠标点击文档时的初始位置

        document.onmousemove = function (ev) {
            var oEvent = ev || event;
            x = oEvent.clientX - disX; //当前鼠标的位置减去初始位置
            move();
            iSpeed = x - lastX;
            lastX = x;

        }

        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;

            //在松手之后图片继续转动直到停止
            timer = setInterval(function () {
                x += iSpeed;
                if (iSpeed > 0) {
                    iSpeed--;
                } else {
                    iSpeed++;
                }
                if (iSpeed == 0) {
                    clearInterval(timer);
                }
                move();

            }, 30)
            document.title = iSpeed;

        }

        //图片变换时切换的函数
        function move() {
            var l = parseInt(-x / 5); //新建一个变量l.-x为了改正图片的转向
            if (l > 0) {
                l = l % 77;
            } else {
                l = l + -(Math.floor(l / 77) * 77);
            }
            oImg.src = 'img/miaov (' + l + ').jpg';
        }

        return false;

    }

}