import { Component, OnInit } from '@angular/core';
import { UtilService } from "../../utilService/utilService";
import { HttpUrl } from "../../httpURL/httpURL";

@Component ({
    selector : 'app-index-home',
    templateUrl : './index-home.component.html',
    styleUrls : ['./index-home.component.less']
})
export class IndexHomeComponent implements OnInit {

    constructor ( private utilService : UtilService,
                  private httpUrl : HttpUrl ) {
    }

    ngOnInit () {
        // let navUrl = this.httpUrl.getHttpURL ().getAllChildListUrl;
        // this.utilService.httpGetRequest (navUrl)
        //     .subscribe (response => {
        //         console.info ('首页', response);
        //
        //     });
    }




}
