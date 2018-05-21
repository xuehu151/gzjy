import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";

@Component ({
    selector : 'app-party-person',
    templateUrl : './party-person.component.html',
    styleUrls : ['./party-person.component.less']
})
export class PartyPersonComponent implements OnInit {

    private noContent : string;
    private moduleTitle : string;
    private hasContentShow : boolean = false;
    private dwModuleContent : Array<any> = [];

    constructor ( private httpUrl : HttpUrl,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getByMenuIdsUrl + '?menuIds=10&type=3';
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                //console.info('response',response);
                if ( response.code === 200 && response.message.length ) {
                    response.message.forEach (( value, num, thisArg ) => {
                        this.moduleTitle = value.menu.menuName;
                        if(value.contentList.length){
                            this.dwModuleContent = value.contentList;
                        }
                        else {
                            this.hasContentShow = true;
                            this.noContent = '暂无内容';
                        }
                    });
                }
                else {
                    this.hasContentShow = true;
                    this.noContent = '暂无内容';
                }

            });
    }

}
