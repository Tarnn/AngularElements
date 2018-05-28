import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SomeService } from './some-service.service';

@Component({
    selector: 'app-alert',
    template: `
    <div>This is the alert: {{ message }}.
        <br>
        <button (click)="callService()">Service</button>
        <pre>{{ serviceContent | json }}</pre>
    </div>`,
    styles: [
        `
        div {
            border: 1px solid blue;
            background: yellowgreen;
            padding: 10px;
            text-align: center;
            color: red;
            font-family: Roboto;
            font-weight: bold;
        }
        pre {
            background: yellow;
            text-align: left;
        }
        `
    ],
    encapsulation: ViewEncapsulation.Native
    // CSS gets compiled down to Javascript with Native
})
export class AlertComponent implements OnInit {
    @Input() message: string;
    serviceContent: string;
    constructor(private someService: SomeService) { }

    ngOnInit(): void {
        console.log('Alert-Component loaded...');
     }

    callService(): void {
        this.someService.getData().subscribe(
            value => {
                console.log('Value: ', value);
                this.serviceContent = JSON.stringify(value);
            },
            error => {
                console.log('Error Occured..', error);
            }
        )
    }
}
