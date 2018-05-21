import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import {Ng2PaginationModule} from "ng2-pagination"


import { HttpUrl } from "./httpURL/httpURL";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from "@angular/forms";
import { CarouselComponent } from './carousel/carousel.component';
import { RecommenPhotoComponent } from './home/recommen-photo/recommen-photo.component';
import { OnlineDoComponent } from './home/online-do/online-do.component';
import { TrendCarouselComponent } from './home/recent-news/trend-carousel/trend-carousel.component';
import { ImgLinkComponent } from './home/img-link/img-link.component';
import { Code404Component } from "./code404/code404.component";
import { AppRoutingModule } from "./app-routing.module";
import { FooterComponent } from './footer/footer.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { IndexHomeComponent } from './home/index-home/index-home.component';
import { InteractHomeComponent } from './interact-platform/interact-home/interact-home.component';
import { PartyHomeComponent } from './party-personnel/party-home/party-home.component';
import { TeachHomeComponent } from './teach-issues/teach-home/teach-home.component';
import { SchoolHomeComponent } from './school-profile/school-home/school-home.component';
import { BelongAgencyComponent } from "./belong/belong-agency/belong-agency.component";
import { HomeComponent } from './home/home.component';
import { ManageInfoComponent } from './home/manage-info/manage-info.component';
import { PartyPersonComponent } from './home/party-person/party-person.component';
import { EducationComponent } from './home/education/education.component';
import { BelonghomeComponent } from './home/belonghome/belonghome.component';
import { TreeListComponent } from './publicComponent/tree-list/tree-list.component';
import { TreeContentComponent } from './publicComponent/tree-content/tree-content.component';
import { PageComponent } from './page/page.component';
import { SecondMenuDataService } from "./service-data/second-menu-data.service";
import { UtilService } from "./utilService/utilService";
import { PublicService } from "./public-service/public-service.service";
import { TreeContentService } from "./public-service/treeContentservice";
import { EducationExpressComponent } from './education-express/education-express.component';
import { InternetLawComponent } from './internet-law/internet-law.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { DeanMailboxComponent } from './dean-mailbox/dean-mailbox.component';
import { DialogService } from "./dialog/dialog.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule ({
    declarations : [
        AppComponent,
        NavComponent,
        CarouselComponent,
        RecommenPhotoComponent,
        OnlineDoComponent,
        BelongAgencyComponent,
        TrendCarouselComponent,
        Code404Component,
        ImgLinkComponent,
        FooterComponent,
        FooterBarComponent,
        IndexHomeComponent,
        InteractHomeComponent,
        PartyHomeComponent,
        TeachHomeComponent,
        SchoolHomeComponent,
        HomeComponent,
        ManageInfoComponent,
        PartyPersonComponent,
        EducationComponent,
        BelonghomeComponent,
        TreeListComponent,
        TreeContentComponent,
        PageComponent,
        EducationExpressComponent,
        InternetLawComponent,
        ArticleDetailsComponent,
        DeanMailboxComponent
    ],
    imports : [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2PaginationModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers : [
        UtilService,
        HttpUrl,
        PublicService,
        TreeContentService,
        DialogService,
        SecondMenuDataService,
        {
            provide : LocationStrategy,
            useClass : HashLocationStrategy
        }
    ],
    bootstrap : [AppComponent]
})
export class AppModule {


}
