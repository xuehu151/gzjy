import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHomeComponent } from './school-home.component';

describe ('SchoolHomeComponent', () => {
    let component : SchoolHomeComponent;
    let fixture : ComponentFixture<SchoolHomeComponent>;

    beforeEach (async (() => {
        TestBed.configureTestingModule ({
            declarations : [SchoolHomeComponent]
        })
               .compileComponents ();
    }));

    beforeEach (() => {
        fixture = TestBed.createComponent (SchoolHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges ();
    });

    it ('should create', () => {
        expect (component).toBeTruthy ();
    });
});
