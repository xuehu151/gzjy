/**
 * Created by admin on 2018/4/20.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { DialogService } from "../dialog/dialog.service";

@Injectable ()
export class UtilService {

    constructor ( private http : Http,
    private dialogService : DialogService) {
    }

    /*
     * @param {string} url地址
     * @param {any} [options]可选提交的参数
     * @param {any} [header]可选设置的头信息
     * @memberof ServiceBaseService
     * @title: 封装一个get请求的基础类
     */
    httpGetRequest ( url : string, options? : any, myheaders? : any ) : Observable<any> {
        // 配置请求头
        const myHeaders : Headers = new Headers ();
        // tslint:disable-next-line:forin
        for ( const key in myheaders ) {
            myHeaders.append (key, myheaders[key]);
        }
        return this.http.get (url, { headers : myHeaders })
                   .map (res => res.json ())
                   .catch (err => {
                       throw this.dialogService.alertFail (err.status);
                   });
    }

    /*
     * @param url地址
     * @param options提交的数据
     * @param myheaders可选参数设置头
     * @title:封装一个post请求数据的
     */
    httpPostRequest ( url : string, options : any, myheaders? : any ) : Observable<any> {
        const myHeaders : Headers = new Headers ();
        myHeaders.append ('Content-Type', 'application/json');
        // tslint:disable-next-line:forin
        for ( const key in myheaders ) {
            myHeaders.append (key, myheaders[key]);
        }
        return this.http.post (url, options, { headers : myHeaders })
                   .map (res => res.json ())
                   .catch (err => {
                       throw this.dialogService.alertFail (err.status);
                   });
    }



}



