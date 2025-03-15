import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {
  AButtonComponent,
  ButtonTypeStyle,
  CommonService,
} from 'leaf-dashboard';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [AButtonComponent, CommonModule, MatDividerModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  ButtonTypeStyle = ButtonTypeStyle;
  constructor(private readonly commonService: CommonService) {
    this.commonService.setTitle('Button - Examples');
  }
}
