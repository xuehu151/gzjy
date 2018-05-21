import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component ({
    selector : 'app-online-do',
    templateUrl : './online-do.component.html',
    styleUrls : ['./online-do.component.less']
})
export class OnlineDoComponent implements OnInit {

    constructor (private router : Router) {
    }

    ngOnInit () {
    }

    clicImg ( menuId ) {
        this.router.navigate (['/internetLaw'], { queryParams : { 'menuId' : menuId } });
    }

}
