import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart-doughnut',
  imports: [CommonModule],
  templateUrl: './chart-doughnut.component.html',
  styleUrl: './chart-doughnut.component.css',
})
export class ChartDoughnutComponent {
  @ViewChild('doughnutCanvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      this.drawDoughnutChart(ctx);
    }
  }

  private drawDoughnutChart(ctx: CanvasRenderingContext2D) {
    const data = [30, 20, 15, 25, 10]; // Valores de cada fatia
    const colors = ['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb']; // Cores
    const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
    const total = data.reduce((a, b) => a + b, 0);

    const centerX = 200;
    const centerY = 200;
    const radius = 100;
    const holeRadius = 50;

    let startAngle = 0;

    // Desenhar as fatias
    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (data[i] / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i];
      ctx.fill();

      startAngle += sliceAngle;
    }

    // Desenhar o buraco no centro
    ctx.beginPath();
    ctx.arc(centerX, centerY, holeRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Adicionar legenda
    this.addLegend(labels, colors);
  }

  private addLegend(labels: string[], colors: string[]) {
    const legendContainer = document.createElement('div');
    legendContainer.classList.add('legend');

    labels.forEach((label, i) => {
      const legendItem = document.createElement('span');
      legendItem.innerHTML = `
        <span class="color-box" style="background-color: ${colors[i]}"></span>
        ${label}
      `;
      legendContainer.appendChild(legendItem);
    });

    // Adicionar a legenda ao componente
    this.canvas.nativeElement.parentElement?.appendChild(legendContainer);
  }
}
