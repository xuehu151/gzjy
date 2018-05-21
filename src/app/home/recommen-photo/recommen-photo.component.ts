import { Component, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { Router } from "@angular/router";
import * as Swiper from 'swiper';

@Component ({
    selector : 'app-recommen-photo',
    templateUrl : './recommen-photo.component.html',
    styleUrls : ['./recommen-photo.component.less']
})
export class RecommenPhotoComponent implements OnInit {

    private imgageArray : Array<any> = [];
    private type : number = 1;
    private imgUrl : string = 'http://jiang292925649.imwork.net:40119';

    constructor ( private httpUrl : HttpUrl,
                  private router : Router,
                  private utilService : UtilService ) {
    }

    ngOnInit () {
        new Swiper ('.showBanner .swiper-container', {
            autoplay : 3000,
            speed : 3000,
            slidesPerView : 'auto',
            observer : true,
            // loop : true,
            loopedSlides : 20
        });

        let navUrl = this.httpUrl.getHttpURL ().getNewestContentUrl + '?type=' + this.type;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                console.info (response);
                if ( response.code === 200 && response.message.length ) {
                    this.imgageArray = response.message;
                }
            });

    }

    photoCarousel ( obj ) {
        console.info (obj);
        this.router.navigate (['/articleDetails'], { queryParams : { 'menuId' : obj.contentId, 'moduleTitle' : '最新图文' }});
    }


}
