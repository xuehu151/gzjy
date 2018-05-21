import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Code404Component } from "./code404/code404.component";
import { InteractHomeComponent } from "./interact-platform/interact-home/interact-home.component";
import { PartyHomeComponent } from "./party-personnel/party-home/party-home.component";
import { TeachHomeComponent } from "./teach-issues/teach-home/teach-home.component";
import { SchoolHomeComponent } from "./school-profile/school-home/school-home.component";
import { BelongAgencyComponent } from "./belong/belong-agency/belong-agency.component";
import { HomeComponent } from "./home/home.component";
import { EducationExpressComponent } from "./education-express/education-express.component";
import { InternetLawComponent } from "./internet-law/internet-law.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { DeanMailboxComponent } from "./dean-mailbox/dean-mailbox.component";

const routes : Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path : 'home',//首页
        // loadChildren : './home/home.module#HomeModule'
        component : HomeComponent
    },
    {
        path : 'schoolProfile',//院务信息
        component : SchoolHomeComponent
    },
    {
        path : 'partyPersonnel',//党务人事
        component : PartyHomeComponent
    },
    {
        path : 'belong',//院属机构
        component : BelongAgencyComponent
    },
    {
        path : 'educationExpress',//教育快递
        component : EducationExpressComponent
    },
    {
        path : 'interactPlatform',//互动平台
        component : InteractHomeComponent
    },
    {
        path : 'internetLaw',//网上办事
        component : InternetLawComponent
    },
    {
        path : 'teachIssues',//教研刊物
        component : TeachHomeComponent
    },
    {
        path : 'articleDetails',//文章详情
        component : ArticleDetailsComponent
    },
    {
        path : 'deanMailbox',//院长信箱
        component : DeanMailboxComponent
    },
    {
        path : '**',
        component : Code404Component
    }
];

@NgModule ({
    imports : [
        RouterModule.forRoot (routes, {useHash:true})
    ],
    exports : [
        RouterModule
    ],
    providers : [],
})
export class AppRoutingModule {


}
