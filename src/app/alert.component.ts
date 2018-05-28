import { SomeService } from './some-service.service';
import { Component, OnInit, Input } from '@angular/core';

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
    ]
})
export class AlertComponent implements OnInit {
    @Input() message: string;
    serviceContent: string;
    constructor(private someService: SomeService) { }

    ngOnInit(): void { }

    callService(): void {
        this.someService.getData().subscribe(
            value => {
                console.log('Value: ', value);
                this.serviceContent = value;
            },
            error => {
                console.log('Error Occured..', error);
            }
        )
    }
}
