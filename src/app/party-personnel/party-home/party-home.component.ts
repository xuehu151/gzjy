import { Component, OnInit } from '@angular/core';
import { PublicService } from "../../public-service/public-service.service";
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector : 'app-party-home',
    templateUrl : './party-home.component.html',
    styleUrls : ['./party-home.component.less']
})
export class PartyHomeComponent implements OnInit {

    public menu : any;
    public menuName : string;
    public pageNumberParent : any;

    constructor ( private publicService : PublicService,
                  private utilService : UtilService,
                  private activeRoute : ActivatedRoute,
                  private httpUrl : HttpUrl ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getChildMenuTreeUrl;
        this.activeRoute.queryParams.subscribe (params => {
            if ( params['menuId'] ) {
                this.utilService.httpGetRequest (navUrl + '/' + params['menuId'])
                    .subscribe (response => {
                        if ( response.code === 200 ) {
                            response.message.forEach (( value, num, thisArg ) => {
                                response.message[num].listIndex = num;
                            });
                            this.menu = response.message;
                            this.publicService.sendTreeMenuId (response.message[0].data.menuId);
                        }
                        else {
                            alert (response.error);
                        }
                    });
            }
        })
            .unsubscribe ();

        this.publicService.getMenuNameInfo ()
            .subscribe (menuName => {
                this.menuName = menuName;
            });
    }

    passingNumber ( event : number ) {
        console.log ('number', event);
        this.pageNumberParent = event;
    }

}
