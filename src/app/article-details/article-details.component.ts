import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../httpURL/httpURL";
import { UtilService } from "../utilService/utilService";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector : 'app-article-details',
    templateUrl : './article-details.component.html',
    styleUrls : ['./article-details.component.less']
})
export class ArticleDetailsComponent implements OnInit {

    private articleDetailsContent : string;
    private hasContentShow : boolean = false;
    private noContent : string;
    private moduleTitle : string;

    constructor ( private httpUrl : HttpUrl,
                  private activeRoute : ActivatedRoute,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        let navUrl = this.httpUrl.getHttpURL ().getContentByIdUrl;
        this.activeRoute.queryParams
            .subscribe (params => {
                this.moduleTitle = params.moduleTitle;
                this.utilService.httpGetRequest (navUrl + '/' + params['menuId'])
                    .subscribe (response => {
                        console.info ('re////nse', response);
                        if ( response.code === 200 ) {
                            this.articleDetailsContent = response.message.sysContentTxt.txt;
                            this.hasContentShow = false;
                        }
                        else {
                            this.hasContentShow = false;
                            this.noContent = '暂无内容';
                        }
                    });
            });

    }

}

