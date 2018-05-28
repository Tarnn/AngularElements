import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coins } from './some-service.spec';


@Injectable({
    providedIn: 'root'
})
export class SomeService {
    ROOT_URL: string = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR';
    
    constructor(private http: HttpClient) { }
    getData(): Observable<Coins[]> {
        return this.http.get<Coins[]>(this.ROOT_URL);
    }
}