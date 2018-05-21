import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PublicService } from "../public-service/public-service.service";

@Component ({
    selector : 'app-page',
    templateUrl : './page.component.html',
    styleUrls : ['./page.component.less']
})
export class PageComponent implements OnInit {

    @Input () pageParams;// 父组件向子组件传值
    @Output () changeCurPage : EventEmitter<Number> = new EventEmitter ();// 子组件向父组件广播事件，触发改变当前页面的事件
    public pageList = [];

    constructor (private publicService : PublicService) {

    }

    ngOnInit () : void {
        this.publicService.pageInfoObj
            .subscribe (( page ) => {
                this.pageParams.totalPage = page.totalPage;
                this.pageParams.totalNum = page.totalNum;
                this.getPageList (this.pageParams);
            });


    }

    getPageList ( pageParams ) {
        this.pageList = [];
        /*分页设置*/
        if ( pageParams.totalPage <= 5 ) {
            //如果总的页码数小于5（前五页），那么直接放进数组里显示
            for ( let i = 0; i < pageParams.totalPage; i++ ) {
                this.pageList.push ({
                    pageNo : i + 1
                });
            }
        }
        else if ( pageParams.totalPage - pageParams.curPage < 5 && pageParams.curPage > 4 ) {
            //如果总的页码数减去当前页码数小于5（到达最后5页），那么直接计算出来显示
            this.pageList = [
                {
                    pageNo : pageParams.curPage - 4
                },
                {
                    pageNo : pageParams.curPage - 3
                },
                {
                    pageNo : pageParams.curPage - 2
                },
                {
                    pageNo : pageParams.curPage - 1
                },
                {
                    pageNo : pageParams.curPage
                }
            ];
        }
        else {//在中间的页码数
            let cur = Math.floor ((pageParams.curPage - 1) / 5) * 5 + 1;
            this.pageList = [
                {
                    pageNo : cur
                },
                {
                    pageNo : cur + 1
                },
                {
                    pageNo : cur + 2
                },
                {
                    pageNo : cur + 3
                },
                {
                    pageNo : cur + 4
                },
            ];
        }
    }

    changePage ( pageNo ) {
        let vm = this;
        console.info(pageNo);
        vm.pageParams.curPage = pageNo;
        vm.changeCurPage.emit (vm.pageParams.curPage);
        this.getPageList (this.pageParams);
    }




}
