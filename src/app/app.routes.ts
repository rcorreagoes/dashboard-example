import { Routes } from '@angular/router';
import { ChartDoughnutComponent } from './view/chart/chart-doughnut.component';
import { ChartComponent } from './view/chart/line-chart/line-chart.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ButtonComponent } from './view/examples/button/button.component';
import { InputComponent } from './view/examples/input/input.component';
import { TableComponent } from './view/examples/table/table.component';
import { TestComponent } from './view/test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'button', component: ButtonComponent },
      { path: 'input', component: InputComponent },
      { path: 'table', component: TableComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'doughnut', component: ChartDoughnutComponent },
      { path: 'test', component: TestComponent },
    ],
  },

  { path: '**', redirectTo: 'notfound' },
];
