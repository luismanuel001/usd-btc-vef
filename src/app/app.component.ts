import { Component } from '@angular/core';

// import { ConversionService } from './conversion/conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ConversionService]
})
export class AppComponent {
  title = 'USD to BTC to VEF';
}
