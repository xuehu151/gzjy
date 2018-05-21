import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from "@angular/material";

@Injectable ()
export class DialogService {

    constructor ( public snackBar : MdSnackBar ) {
    }

    // 配置 MdSnackBar 属性
    actionButtonLabel : string = '确定';
    action : boolean = true;
    setAutoHide : boolean = true;
    autoHide : number = 3000;
    addExtraClass : boolean = false;

    // 成功
    alertSuccess ( msg ) {
        let config = new MdSnackBarConfig ();
        config.duration = this.autoHide;
        config.extraClasses = ['alertSuccess']; // 设置样式alertSuccess
        this.snackBar.open (msg, this.action && this.actionButtonLabel, config);
    }


    // 警告
    alertWarning ( msg ) {
        // debugger;
        let config = new MdSnackBarConfig ();
        config.duration = this.autoHide;
        config.extraClasses = ['alertWarning']; // 设置样式alertWarning
        this.snackBar.open (msg, this.action && this.actionButtonLabel, config);
    }

    // 失败
    alertFail ( msg ) {
        // debugger;
        let config = new MdSnackBarConfig ();
        config.duration = this.autoHide;
        config.extraClasses = ['alertFail']; // 设置样式alertFail
        this.snackBar.open (msg, this.action && this.actionButtonLabel, config);
    }




}
