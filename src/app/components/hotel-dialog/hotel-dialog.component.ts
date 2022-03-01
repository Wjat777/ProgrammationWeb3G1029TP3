import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iHotel } from 'src/app/model/InterfaceForfait';

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.scss'],
})
export class HotelDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HotelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iHotel
  ) {}

  fermerDialogue(): void {
    this.dialogRef.close();
  }
}
