import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { Router } from "@angular/router";

@Component ({
    selector : 'app-belonghome',
    templateUrl : './belonghome.component.html',
    styleUrls : ['./belonghome.component.less']
})
export class BelonghomeComponent implements OnInit {
    // private moduleTitle : string;
    private blongModuleContent : Array<any> = [];
    private hasContentShow : boolean = false;
    private noContent : string;

    constructor ( private httpUrl : HttpUrl,
                  private router : Router,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getChildMenuUrl + '/11';
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info ('1111111', response);
                if ( response.code === 200 && response.message.length ) {
                    this.blongModuleContent = response.message;
                    this.hasContentShow = true;
                }
                else {
                    this.hasContentShow = true;
                    this.noContent = '暂无内容';
                }
            });
    }

    listDetails ( contentId ) {
       // this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : contentId } });
    }

}
