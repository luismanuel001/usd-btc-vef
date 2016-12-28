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
  _vef: number;
  _btcPriceInUsd: number;
  _btcPriceInVef: number;

  get usd(): number {
      return this._usd || 0;
  }

  set usd(value: number) {
      this._usd = value;
      this._btc = this._usd * ( 1 / this._btcPriceInUsd );
      this._vef = this._btc * this._btcPriceInVef;
  }

  get btc(): number {
      return this._btc || 0;
  }

  set btc(value: number) {
      this._btc = value;
  }

  get vef(): number {
      return this._vef || 0;
  }

  set vef(value: number) {
      this._vef = value;
      this._btc = this._vef / this._btcPriceInVef;
      this._usd = this._btc * this._btcPriceInUsd;
  }

  get btcPriceInUsd(): number {
      return this._btcPriceInUsd;
  }

  set btcPriceInUsd(rate: number) {
      this._btcPriceInUsd = rate;
  }

  get btcPriceInVef(): number {
      return this._btcPriceInVef;
  }

  set btcPriceInVef(rate: number) {
      this._btcPriceInUsd = rate;
  }

  constructor(private conversionService: ConversionService) { }

  ngOnInit() {
    this.conversionService.getBtcPrices(5000)
        .subscribe( prices => {
            this._btcPriceInUsd = prices[0];
            this._btcPriceInVef = prices[1];
            this.usd = this.usd;
        });
  }

}
