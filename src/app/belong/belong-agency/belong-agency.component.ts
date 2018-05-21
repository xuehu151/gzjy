import { Component, OnInit } from '@angular/core';
import { SecondMenuDataService } from "../../service-data/second-menu-data.service";
import { PublicService } from "../../public-service/public-service.service";
import { UtilService } from "../../utilService/utilService";
import { HttpUrl } from "../../httpURL/httpURL";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector : 'app-belong-agency',
    templateUrl : './belong-agency.component.html',
    styleUrls : ['./belong-agency.component.less']
})
export class BelongAgencyComponent implements OnInit {

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
                            if ( response.message[0].children.length === 0 ) {
                                this.publicService.sendTreeMenuId (response.message[0].data.menuId);
                            }
                            else {
                                this.publicService.sendTreeMenuId (response.message[0].children[0].data.menuId);
                            }
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
