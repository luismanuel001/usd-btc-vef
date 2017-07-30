import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConversionService {

  private btcPriceInUsd = 900;
  private btcPriceInVef = 2700000;
  private refreshInterval = 5 * 1000; // In seconds
  private btcPriceInUsdUrl = 'https://cors-anywhere.herokuapp.com/localbitcoins.com/bitcoinaverage/ticker-all-currencies/';
  private btcPriceInVefUrl = 'https://cors-anywhere.herokuapp.com/localbitcoins.com/bitcoinaverage/ticker-all-currencies/';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getBtcPriceInUsd(): Observable<number> {
    return this.http.get(this.btcPriceInUsdUrl)
      .map((res: Response) => res.json().USD['avg_6h'])
      .catch(err => Observable.throw(err || 'Error getting btcPriceInUsd'));
  }

  getBtcPriceInVef(): Observable<number> {
    return this.http.get(this.btcPriceInVefUrl)
      .map((res: Response) => res.json().VEF['avg_6h'])
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
