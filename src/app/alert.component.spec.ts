import { SomeService } from './some-service.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;
    let someService: SomeService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AlertComponent],
            imports: [HttpClientTestingModule],
            providers: [SomeService]
        })
            .compileComponents();

        someService = TestBed.get(SomeService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async(inject([SomeService], (someService: SomeService) => {
        expect(component).toBeTruthy();
    })));
});
