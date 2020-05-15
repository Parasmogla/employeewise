import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() type: string;
  tColumns: [];
  tableConfig = [{
    isSearchable: false,
    isSortingEnabled: false,
    hasTableActions: true,
    actions: {
      tableActions: {
        type: 'BUTTON',
        action: {
          onTrigger: this.applyLeave,
        },
      },
    },
  }]
  data: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public body: any) { }

  ngOnInit(): void {
    this.show()
  }

  applyLeave(e) {
    console.log(e)
  }

  show() {
    this.tColumns = this.body.tColumns;
    this.tableConfig = this.body.tableConfig;
    this.data = this.body.data;
    this.type = this.body.type;
    // this.genericModal.show();
  }

  // hide() {
  //   this.genericModal.hide();
  // }

}
