import { OnChanges, ViewChild, AfterViewInit } from '@angular/core';
/**
 * This is a generic table Component which can be extended to
 * handle all table View/action based components throughout this
 * application
 *
 * Input JSON expected
 * {
 * rowData : Array<object> // This contains the row data  to be shown
 * tColumns: Array<object> // Should be sent with column title and mapping
 * 								 e.g. [{displayName: 'Employee Name', id: 'e_name'}]
 * 								 specific columns of the table need to be shown.
 * config: isSearchable  // enables search on table
 * 		  isSortable    // enables sorting on columns
 * actions: <provisional> custom sort if needed, custom search if needed
 * }
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  rowData: Array<object>;
  @Input()
  config: {
    isSearchable?: boolean;
    filters?: object;
    isSortingEnabled?: boolean;
    sortableColumns?: Array<string>;
    hasTableActions?: boolean;
    actions?: any;
  } = {};
  @Input()
  tColumns;
  @Input()
  actions;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  matDataSource: MatTableDataSource<object>;
  displayedColumnIds: any[];
  displayedColumns: any[];

  constructor() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matDataSource.filter = filterValue.trim().toLowerCase();
  }

  addTableActions(data) {
    data = data.map((d: any) => {
      return { ...d, actions: true };
    });

    return data;
  }

  setTable() {
    let data = [...this.rowData];
    if (this.config.hasTableActions) {
      this.tColumns.push({ id: 'actions', displayName: 'Actions' });
      data = this.addTableActions(data);
    }
    this.displayedColumnIds = this.tColumns.map((col) => col.id);
    this.displayedColumns = this.tColumns.map((col) => col.displayName);
    this.matDataSource = new MatTableDataSource(data);
  }

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.rowData && this.rowData.length) {
      this.setTable();
    }
  }
}
