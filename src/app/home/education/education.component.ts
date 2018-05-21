import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { Router } from "@angular/router";

@Component ({
    selector : 'app-education',
    templateUrl : './education.component.html',
    styleUrls : ['./education.component.less']
})
export class EducationComponent implements OnInit {

    private eduItem : number = 0;
    private noContent : string;
    private hasContentShow : boolean = false;
    private educationContent : Array<any> = [];
    private menuIds : string = '20,21,22,23,24,25,26,27,28';
    private type : number = 2;
    private moduleTitle : string;

    constructor ( private httpUrl : HttpUrl,
                  private router : Router,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getByMenuChildsUrl + '?menuIds=' + this.menuIds + '&type=' + this.type;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info ('234+', response);
                if ( response.code === 200 && response.message.length ) {
                    this.educationContent = response.message;
                    this.hasContentShow = false;
                }
                else {
                    this.hasContentShow = false;
                    this.noContent = '暂无内容';
                }

            });
    }

    educationClick ( num ) {
        this.eduItem = num;

    }

    listDetails ( contentId, menuName ) {
        this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : contentId, 'moduleTitle' : menuName } });
    }



}
