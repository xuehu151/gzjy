import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { Router } from "@angular/router";

@Component ({
    selector : 'app-manage-info',
    templateUrl : './manage-info.component.html',
    styleUrls : ['./manage-info.component.less']
})
export class ManageInfoComponent implements OnInit {

    private moduleTitle : string;
    private noContent : any = false;
    private hasContentShow : boolean = false;
    private ywModuleContent : Array<any> = [];

    constructor ( private httpUrl : HttpUrl,
                  private router : Router,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getByMenuIdsUrl + '?menuIds=1&type=3';
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info('response',response);
                if ( response.code === 200 && response.message.length ) {
                    this.hasContentShow = false;
                    response.message.forEach (( value, num, thisArg ) => {
                        this.moduleTitle = value.menu.menuName;
                        this.ywModuleContent = value.contentList;
                    });
                }
                else {
                    this.hasContentShow = false;
                    this.noContent = '暂无内容';
                }

            });
    }

    listDetails ( contentId ) {
        this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : contentId, 'moduleTitle' : this.moduleTitle } });
    }



}
