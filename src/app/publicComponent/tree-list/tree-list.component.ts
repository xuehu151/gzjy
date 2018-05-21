import { Component, Input, OnInit } from '@angular/core';
import { HttpUrl } from "../../httpURL/httpURL";
import { UtilService } from "../../utilService/utilService";
import { PublicService } from "../../public-service/public-service.service";

@Component ({
    selector : 'app-tree-list',
    templateUrl : './tree-list.component.html',
    styleUrls : ['./tree-list.component.less']
})
export class TreeListComponent implements OnInit {
    private current : number = 1;
    private size : number = 20;
    private showClassNumber : number = 0;
    private initMenuId : number;

    @Input () treelists : any;// page 接收上级的值 ,
    @Input () //接收分页传递的页码
    public set listContent ( pageNum : number ) {
        if ( pageNum ) {
            this.current = pageNum;
            this.publicService.whichId.subscribe (( res ) => {
                this.getTreeListData (res, this.current);
            });
        }
    };

    constructor ( private httpUrl : HttpUrl,
                  private utilService : UtilService,
                  private publicService : PublicService ) {
    }

    ngOnInit () {
        this.publicService.getTreeMenuId ()
            .subscribe (menuId => {
                this.getTreeListData (menuId, this.current);
            });
    }

    itemClick ( num ) {
        this.treelists.forEach (( value, count, thisArg ) => {
            value.leaf = false;
        });
        // 建立一个服务来接收这个值, 或者借助双向绑定, 处理动作
        num.leaf = !num.leaf;  // 本例只简单演示开关, 借助 treelists本身实现
        this.current = 1;
        this.showClassNumber = num.listIndex;
        if ( num.children.length === 0 ) {
            this.initMenuId = num.data.menuId;
        }
        else {
            this.initMenuId = num.children[0].data.menuId;
        }
        this.publicService.whichId.next (this.initMenuId);//借助服务解决initMenuId不变的问题
        this.getTreeListData (this.initMenuId, this.current);
        num.children.forEach (( value, count, thisArg ) => {
            num.children[count].listIndex = count;
        });
    }

    getTreeListData ( menuId, current ) {
        let navUrl = this.httpUrl.getHttpURL ().contentListUrl;
        let data = {
            fieldParam : menuId,
            current : current,
            size : this.size,
            fieldName : "",
            sortField : "",
            sortParam : "",
            data : {}
        };
        console.info (data);
        this.utilService.httpPostRequest (navUrl, data)
            .subscribe (response => {
                if ( response.code === 200 && response.message.records.length != 0 ) {
                    this.publicService.pageInfo.next (response);
                }
                else {
                    this.publicService.pageInfo.next ('暂无内容');
                }

            });
    }




}
