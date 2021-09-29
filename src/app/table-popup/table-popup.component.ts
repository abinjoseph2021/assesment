import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-popup',
  templateUrl: './table-popup.component.html',
  styleUrls: ['./table-popup.component.css']
})
export class TablePopupComponent implements OnInit {

  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }

}
