import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable ()
export class PublicService {

    public menuName : BehaviorSubject<number> = new BehaviorSubject<number> (0);
    public treeMenuId : Subject<any> = new Subject<any> ();
    public pageInfo : Subject<any> = new Subject<any>();
    public pageInfoObj : Subject<any> = new Subject<any>();
    public whichId : BehaviorSubject<any> = new BehaviorSubject<any>(0);


    sendMenuNameInfo ( menuName : any ) {
        this.menuName.next (menuName);
    }

    getMenuNameInfo () : Observable<any> {
        return this.menuName.asObservable ();
    }

    sendTreeMenuId (treeMenuId : any){
        this.treeMenuId.next (treeMenuId);
    }
    getTreeMenuId () : Observable<any> {
        return this.treeMenuId.asObservable ();
    }

    constructor () {

    }




}
