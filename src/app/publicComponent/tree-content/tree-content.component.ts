import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { PublicService } from "../../public-service/public-service.service";
import { UtilService } from "../../utilService/utilService";
import { HttpUrl } from "../../httpURL/httpURL";
import { Router } from "@angular/router";

@Component ({
    selector : 'app-tree-content',
    templateUrl : './tree-content.component.html',
    styleUrls : ['./tree-content.component.less']
})

export class TreeContentComponent implements OnInit {

    private isHasContent : boolean = true;
    private treeListArray : Array<any> = [];
    private treeContentDetails : string;
    private hasContentShow : boolean = false;
    private noContent : string;
    //分页
    private curPage : number = 0;
    private current : number = 1;   //当前页码
    private size : number = 20;      // 每页多少条
    private totalNum : number;      //总共多少条数据 total
    private totalPage : number;     //总的页数 pages
    private pageInfoObj : any;
    //列表内容  创建一个输出treeContent  to treeList
    @Output ()
    private pageNumberClick : EventEmitter<any> = new EventEmitter ();

    constructor ( private publicService : PublicService,
                  private httpUrl : HttpUrl,
                  private utilService : UtilService,
                  private router : Router ) {
    }


    ngOnInit () {
        this.publicService.pageInfo
            .subscribe (( res ) => {
                if ( res ) {
                    this.treeListArray = [];
                    if ( res.code === 200 ) {
                        this.isHasContent = true;
                        this.treeContentDetails = '';
                        this.treeListArray = res.message.records;
                        this.current = res.message.current;
                        this.totalNum = res.message.total;
                        this.totalPage = res.message.pages;
                        this.pageInfoObj = {
                            totalNum : res.message.total,
                            totalPage : res.message.pages
                        };
                        this.publicService.pageInfoObj.next (this.pageInfoObj);
                    }
                    else {
                        this.isHasContent = false;
                    }
                }
            });
    }

    getPageData ( pageNo ) {
        this.curPage = pageNo;
        this.pageNumberClick.emit (this.curPage);
    }

    articleDetails ( contentId ) {
        this.pageInfoObj = {
            totalNum : 0,
            totalPage : 0
        };
        this.publicService.pageInfoObj.next (this.pageInfoObj);
        let navUrl = this.httpUrl.getHttpURL ().getContentByIdUrl + '/' + contentId;
        this.utilService.httpGetRequest (navUrl)
            .subscribe (response => {
                if ( response.code === 200 ) {
                    this.treeListArray = [];
                    this.treeContentDetails = response.message.sysContentTxt.txt;
                    this.hasContentShow = false;
                }
                else {
                    this.hasContentShow = true;
                    this.noContent = '暂无内容';
                }
            });

    }

}


