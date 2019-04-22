import { Component, OnInit } from '@angular/core';

import { ConversionService } from './conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  _usd: number;
  _btc: number;
  _ves: number;
  _btcPriceInUsd: number;
  _btcPriceInVes: number;

  get usd(): number {
      return this._usd || 0;
  }

  set usd(value: number) {
      this._usd = value;
      this._btc = this._usd * ( 1 / this._btcPriceInUsd );
      this._ves = this._btc * this._btcPriceInVes;
  }

  get btc(): number {
      return this._btc || 0;
  }

  set btc(value: number) {
      this._btc = value;
  }

  get ves(): number {
      return this._ves || 0;
  }

  set ves(value: number) {
      this._ves = value;
      this._btc = this._ves / this._btcPriceInVes;
      this._usd = this._btc * this._btcPriceInUsd;
  }

  get btcPriceInUsd(): number {
      return this._btcPriceInUsd;
  }

  set btcPriceInUsd(rate: number) {
      this._btcPriceInUsd = rate;
  }

  get btcPriceInVes(): number {
      return this._btcPriceInVes;
  }

  set btcPriceInVes(rate: number) {
      this._btcPriceInUsd = rate;
  }

  constructor(private conversionService: ConversionService) { }

  ngOnInit() {
    this.conversionService.getBtcPrices(5000)
        .subscribe( prices => {
            this._btcPriceInUsd = prices[0];
            this._btcPriceInVes = prices[1];
            this.usd = this.usd;
        });
  }

}
