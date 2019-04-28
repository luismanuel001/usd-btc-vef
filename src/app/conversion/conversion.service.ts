import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConversionService {

  private btcPriceInUsd = 900;
  private btcPriceInVes = 2700000;
  private refreshInterval = 5 * 1000; // In seconds
  private btcPriceInUsdUrl = 'https://cors-anywhere.herokuapp.com/localbitcoins.com/bitcoinaverage/ticker-all-currencies/';
  private btcPriceInVesUrl = 'https://cors-anywhere.herokuapp.com/localbitcoins.com/bitcoinaverage/ticker-all-currencies/';

  constructor(private http: Http, private jsonp: Jsonp) { }

  getBtcPriceInUsd(): Observable<number> {
    return this.http.get(this.btcPriceInUsdUrl)
      .map((res: Response) => res.json().USD['avg_1h'] || res.json().USD['avg_6h'])
      .catch(err => Observable.throw(err || 'Error getting btcPriceInUsd'));
  }

  getBtcPriceInVes(): Observable<number> {
    return this.http.get(this.btcPriceInVesUrl)
      .map((res: Response) => res.json().VES['avg_1h'] || res.json().VES['avg_6h'])
      .catch(err => Observable.throw(err || 'Error getting btcPriceInVes'));
  }

  getBtcPrices(interval?: number): Observable<[number, number]> {
    let observable: Observable<[number, number]> = Observable.forkJoin(
      this.getBtcPriceInUsd(),
      this.getBtcPriceInVes()
    );

    if (interval) {
      return Observable.timer(0, interval).flatMapTo(observable);
    }

    return observable;
  }
}
