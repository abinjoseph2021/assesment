import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-piechart-popup',
  templateUrl: './piechart-popup.component.html',
  styleUrls: ['./piechart-popup.component.css']
})
export class PiechartPopupComponent implements OnInit {

  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }

}
