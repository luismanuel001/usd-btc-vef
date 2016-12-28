import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConversionService {

  private btcPriceInUsd = 900;
  private btcPriceInVef = 2700000;
  private refreshInterval = 5 * 1000; // In seconds 
  private btcPriceInUsdUrl = 'https://api.coinbase.com/v2/prices/buy?currency=USD';
  private btcPriceInVefUrl = 'https://api.blinktrade.com/api/v1/VEF/ticker?callback=JSONP_CALLBACK';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getBtcPriceInUsd(): Observable<number> {
    return this.http.get(this.btcPriceInUsdUrl)
      .map((res: Response) => res.json().data.amount)
      .catch(err => Observable.throw(err || 'Error getting btcPriceInUsd'));
  }

  getBtcPriceInVef(): Observable<number> {
    return this.jsonp.get(this.btcPriceInVefUrl)
      .map((res: Response) => res.json().sell)
      .catch(err => Observable.throw(err || 'Error getting btcPriceInVef'));
  }

  getBtcPrices(interval?: number): Observable<[number, number]> {
    let observable: Observable<[number, number]> = Observable.forkJoin(
      this.getBtcPriceInUsd(),
      this.getBtcPriceInVef()
    );

    if (interval) {
      return Observable.timer(0, interval).flatMapTo(observable);
    }

    return observable;
  }
}
