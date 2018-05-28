import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SomeService } from './some-service.service';
import { HttpClient } from '@angular/common/http';

export interface Coins {
    BTC: number,
    USD: number,
    EUR: number
};

describe('SomeService', () => {
    let service: SomeService;
    let httpMock: HttpTestingController;
    let httpClient: HttpClient;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SomeService]
        });

        service = TestBed.get(SomeService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient = TestBed.get(HttpClient);
    });

    it('should be created', async(inject([SomeService],
        (service: SomeService) => {
        expect(service).toBeTruthy();
    })));

    it('should retrieve coins from cryptocompare', () => {
        const dummyCoins: Coins[] = [{
            BTC: 0.005,
            USD: 522.01,
            EUR: 449.99
        }];

        service.getData().subscribe(coins => {
            expect(coins.length).toBe(1);
            expect(coins).toBe(dummyCoins);
        });

        const request = httpMock.expectOne(`${service.ROOT_URL}`)

        expect(request.request.method).toBe('GET');

        request.flush(dummyCoins);
    });
});
