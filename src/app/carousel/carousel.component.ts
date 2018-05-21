import { Component, OnInit } from '@angular/core';
import * as Swiper from 'swiper';

@Component ({
    selector : 'app-carousel',
    templateUrl : './carousel.component.html',
    styleUrls : ['./carousel.component.less']
})


export class CarouselComponent implements OnInit {

    constructor () {

    }

    ngOnInit () {
        new Swiper ('.banner_box .swiper-container', {
            autoplay : 3000,
            pagination : '.swiper-pagination',
            paginationClickable : true
        })




    }




}
