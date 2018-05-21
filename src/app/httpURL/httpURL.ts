/**
 * Created by admin on 2018/4/20.
 */

let ipUrl = 'http://155v52p428.iask.in:56014';
export class HttpUrl {

    httpURL = {
        getChildMenuUrl: ipUrl +   '/api/menu/getChildMenu',
        sysContentUrl : ipUrl +  '/api/menu/getChildList',
        getByIdUrl : ipUrl +  '/api/menu/getById',
        getAllUrl : ipUrl +  '/api/menu/getAll',
        getChildMenuTreeUrl: ipUrl +   '/api/menu/getChildMenuTree',
        getByMenuIdsUrl : ipUrl +  '/api/content/getByMenuIds',
        contentListUrl : ipUrl +  '/api/content/selectPage',
        getContentByIdUrl : ipUrl +  '/api/content/getById',
        getByMenuChildsUrl: ipUrl +  '/api/content/getByMenuChilds',
        getNewestContentUrl : ipUrl +  '/api/content/getNewestContent'
    };

    /* 返回httpURL */
    getHttpURL () {
        return this.httpURL;
    }




}