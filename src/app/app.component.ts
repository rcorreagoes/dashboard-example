import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyMaskConfig } from 'ng2-currency-mask';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'leaf-dashboard';
}
