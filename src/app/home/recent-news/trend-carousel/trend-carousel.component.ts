import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../../httpURL/httpURL";
import { UtilService } from "../../../utilService/utilService";
import { Router } from "@angular/router";
import * as Swiper from 'swiper';

@Component ({
    selector : 'app-trend-carousel',
    templateUrl : './trend-carousel.component.html',
    styleUrls : ['./trend-carousel.component.less']
})
export class TrendCarouselComponent implements OnInit {

    private navItem : number = 0;
    private noContent : string;
    private hasContentShow : boolean = false;
    private navTabsContent : Array<any> = [];
    private menuIds : string = '3,16,29';
    private type : number = 1;
    private imgageArray : Array<any> = [];
    private imgUrl : string = 'http://jiang292925649.imwork.net:40119';

    constructor ( private httpUrl : HttpUrl,
                  private router : Router,
                  private utilService : UtilService ) {
        this.autoCarousel ();
    }

    ngOnInit () {
        new Swiper ('.dynamicMain .swiper-container', {
            autoplay : 3000,
            observer : true,//修改swiper自己或子元素时，自动初始化swiper
            pagination : '.swiper-pagination'
        });

        let navUrl = this.httpUrl.getHttpURL ().getByMenuIdsUrl + '?menuIds=' + this.menuIds + '&type=' + this.type;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                if ( response.code === 200 && response.message.length ) {
                    this.navTabsContent = response.message;
                    this.hasContentShow = false;
                }
                else {
                    this.hasContentShow = false;
                    this.noContent = '暂无内容';
                }
            });

    }

    autoCarousel () {
        let navUrl = this.httpUrl.getHttpURL ().getNewestContentUrl + '?type=' + this.type;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info(response);
                if ( response.code === 200 && response.message.length ) {
                    this.imgageArray = response.message;
                    this.imgageArray.length = 6;
                }
            });
    }

    clickCarousel ( obj ) {
        console.info (obj);
        this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : obj.contentId, 'moduleTitle' : '最新动态'  } });
    }


    navClick ( num ) {
        this.navItem = num;
    }

    listDetails ( contentId, menuName ) {
        this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : contentId, 'moduleTitle' : menuName } });
    }


}
