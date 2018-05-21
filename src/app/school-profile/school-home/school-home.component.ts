import { Component, OnInit } from '@angular/core';
import { PublicService } from "../../public-service/public-service.service";
import { UtilService } from "../../utilService/utilService";
import { HttpUrl } from "../../httpURL/httpURL";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector : 'app-school-home',
    templateUrl : './school-home.component.html',
    styleUrls : ['./school-home.component.less']
})
export class SchoolHomeComponent implements OnInit {
    public menu : Array<any> = [];
    public menuId : any;
    public menuName : string;
    public pageNumberParent;

    constructor ( private utilService : UtilService,
                  private httpUrl : HttpUrl,
                  private activeRoute : ActivatedRoute,
                  private publicService : PublicService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getChildMenuTreeUrl;
        this.activeRoute.queryParams.subscribe (params => {
            if(params['menuId']){
                this.utilService.httpGetRequest (navUrl + '/' + params['menuId'])
                    .subscribe (response => {
                        console.info ('re000e', response);
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
        });

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
