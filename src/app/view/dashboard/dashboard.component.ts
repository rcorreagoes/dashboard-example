import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { About, Menu, ODashboardComponent, Settings } from 'leaf-dashboard';
import { ABOUT_MOCK, MENU_MOCK, SETTINGS_MOCK } from './dashboard-mock';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ODashboardComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  aboutItens: About = ABOUT_MOCK;
  appName = 'Leaf Development';
  menuItens: Menu[] = MENU_MOCK;
  settings: Settings[] = SETTINGS_MOCK;
  username = 'Bem-vindo, Rodrigo';
}
