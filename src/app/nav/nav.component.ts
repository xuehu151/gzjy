import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpUrl } from "../httpURL/httpURL";
import { UtilService } from "../utilService/utilService";
import { PublicService } from "../public-service/public-service.service";
import { DialogService } from "../dialog/dialog.service";

@Component ({
    selector : 'app-nav',
    templateUrl : './nav.component.html',
    styleUrls : ['./nav.component.less']
})
export class NavComponent implements OnInit {
    private parentId : number = 0;
    public navBar : Array<any> = [];

    constructor ( private route : ActivatedRoute,
                  private router : Router,
                  private httpUrl : HttpUrl,
                  private dialogService : DialogService,
                  private publicService : PublicService,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        this.router.navigate (['/']);
        this.getNavData ();
    }

    getNavData () : void {
        let navUrl = this.httpUrl.getHttpURL ().getChildMenuUrl + '/' + this.parentId;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info (response);
                if ( response.code === 200 ) {
                    response.message.forEach (( value, num, navBar ) => {
                        if ( value.display === true ) {
                            switch ( value.menuId ) {
                                case 106:
                                    value.check = true;
                                    value.fileName = '/';
                                    break;
                                case 1:
                                    value.check = false;
                                    value.fileName = 'schoolProfile';
                                    break;
                                case 10:
                                    value.check = false;
                                    value.fileName = 'partyPersonnel';
                                    break;
                                case 11:
                                    value.check = false;
                                    value.fileName = 'belong';
                                    break;
                                case 12:
                                    value.check = false;
                                    value.fileName = 'educationExpress';
                                    break;
                                case 13:
                                    value.check = false;
                                    value.fileName = 'interactPlatform';
                                    break;
                                case 14:
                                    value.check = false;
                                    value.fileName = 'internetLaw';
                                    break;
                                case 15:
                                    value.check = false;
                                    value.fileName = 'teachIssues';
                                    break;
                                default:
                                    value.check = false;
                                    value.fileName = '**';
                            }
                            this.navBar.push (value);
                        }
                    });
                }
            });
    }

    clickNav ( num, menuId, menuName, fileName ) {
        this.navBar.forEach (( value, count, navBar ) => {
            this.navBar[count].check = false;
        });
        this.navBar[num].check = true;
        console.info (fileName);
        this.router.navigate ([fileName], { queryParams : { 'menuId' : menuId } });
        this.publicService.sendMenuNameInfo (menuName);




    }

}
