import { Component, OnInit } from '@angular/core';

@Component ({
    selector : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls : ['./footer.component.less']
})
export class FooterComponent implements OnInit {

    public moveX : number = 1;
    public moveY : number = 1; //判断横竖轴反向用   1表示正向运动，-1表示反向运动
    public speed : number = 3; //运动速度
    public clientWidth : number = 0;
    public clientHeight : number = 0;
    public iTargetWidth : number = 0;
    public iTargetHeight : number = 0;
    public scrollTop : number = 0;
    public timer : any = null;

    constructor () {
    }

    ngOnInit () {
        // this.startMove ();
        //this.onresize ();
    }

    startMove ( ) {
        let that = this;
        let oDiv = document.getElementById ("piao");
        //初始化或resize需调用   用于检测客户端可视区域大小
        this.clientWidth = document.documentElement.clientWidth;
        this.clientHeight = document.documentElement.clientHeight;
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.iTargetWidth = this.clientWidth - oDiv.offsetWidth - 5;
        //可视区域能飘动的距离
        this.iTargetHeight = this.clientHeight - oDiv.offsetHeight - this.scrollTop;

        that.timer = setInterval (function () {
            //X轴运动
            if ( that.moveX == 1 && oDiv.offsetLeft >= that.iTargetWidth ) {
                that.moveX = -1;
            }
            else if ( that.moveX == -1 && oDiv.offsetLeft <= 0 ) {
                that.moveX = 1;
            }
            oDiv.style.left = oDiv.offsetLeft + that.speed * that.moveX + 'px';

            // Y轴运动
            if ( that.moveY == 1 && oDiv.offsetTop >= that.iTargetHeight ) {
                that.moveY = -1;
            }
            else if ( that.moveY == -1 && oDiv.offsetTop <= 0 ) {
                that.moveY = 1;
            }
            oDiv.style.top = oDiv.offsetTop + that.speed * that.moveY + 'px';
        }, 30);
    }

    clearTimer () {
        let that = this;
        clearInterval (that.timer);
    }

    startTimer () {
        this.startMove ();
    }




}
