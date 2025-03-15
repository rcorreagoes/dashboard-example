import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartValues, LineChartComponent } from 'leaf-chart';

@Component({
  standalone: true,
  selector: 'app-line-chart',
  imports: [CommonModule, LineChartComponent],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class ChartComponent {
  chartValues: ChartValues = {
    dataset: [
      {
        name: 'Dataset 1',
        values: [50, 70, 20, 10, 30, 60, 100, 80],
        color: 'red',
      },
      {
        name: 'Dataset 2',
        values: [0, 60, 0, 20, 40, 30, 70, 50],
        color: 'blue',
      },
      {
        name: 'Dataset 3',
        values: [10, 30, 50, 90, 60, 40, 30, 90],
        color: 'green',
      },
      {
        name: 'Dataset 4',
        values: [100, 60, 50, 40, 60, 40, 20, 10],
        color: 'yellow',
      },
    ],
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
    ],
  };
}
