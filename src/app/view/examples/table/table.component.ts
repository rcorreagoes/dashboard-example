import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { CommonService, OTableComponent } from 'leaf-dashboard';
import { MOCK_FIELDS, MOCK_TABLE_1 } from './table.mock';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, OTableComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CommonService],
})
export class TableComponent {
  displayedColumns = MOCK_FIELDS;
  dataSource = MOCK_TABLE_1;

  constructor(
    @Inject(CommonService) private readonly commonService: CommonService,
  ) {
    this.commonService.setTitle('Table - Examples');
  }
}
