import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
@Component({
  selector: 'app-forfait-dialog',
  templateUrl: './forfait-dialog.component.html',
  styleUrls: ['./forfait-dialog.component.scss'],
})
export class ForfaitDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ForfaitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iForfait
  ) {}

  fermerDialogue(): void {
    this.dialogRef.close();
  }
}
