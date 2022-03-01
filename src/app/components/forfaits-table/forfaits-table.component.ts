import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iForfait } from 'src/app/model/InterfaceForfait';
//import { FVs } from 'src/services/mock_forfaitvoyages'; //mock
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';
import { ForfaitFormComponent } from 'src/app/components/forfait-form/forfait-form.component';

@Component({
  selector: 'app-forfaits-table',
  templateUrl: './forfaits-table.component.html',
  styleUrls: ['./forfaits-table.component.scss'],
})
export class ForfaitsTableComponent implements OnInit {
  //fvs: iForfait[] = FVs; //mock
  fvs: iForfait[] = []; // tous les forfaits
  fv?: iForfait; // forfait sélectionné
  columnsToDisplay = [
    'id',
    'villeDepart',
    'destination',
    'dateDepart',
    'dateRetour',
    'nomHotel',
    'vedette',
    'actions',
  ];

  constructor(
    private forfaitAPIService: ForfaitAPIService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitAPIService.getForfaits().subscribe((res) => (this.fvs = res));
  }

  onDelete(fv: iForfait): void {
    this.forfaitAPIService
      .deleteForfait(fv.id)
      .subscribe((_) => (this.fvs = this.fvs.filter((p) => p !== fv)));
  }

  onSelect(fv?: iForfait): void {
    if (!fv) {
      this.fv = {
        id: 0,
        destination: '',
        villeDepart: '',
        hotel: {
          id: 0,
          nom: '',
          coordonnees: '',
          url: '',
          imagePath: '',
          nombreEtoiles: 0,
          nombreChambres: 0,
          caracteristiques: [],
        },
        dateDepart: new Date(),
        dateRetour: new Date(),
        prix: 0,
        taxes: '',
        rabais: 0,
        vedette: false,
      };
      console.log('forfait vide', this.fv);
    } else {
      fv.dateDepart = new Date(fv.dateDepart);
      fv.dateRetour = new Date(fv.dateRetour);
      this.fv = fv;
      console.log('forfait existent:', this.fv);
    }
    const forfaitForm = this.dialog.open(ForfaitFormComponent, {
      width: '30rem',
      data: this.fv,
    });

    forfaitForm.afterClosed().subscribe((_) => {
      this.fv = undefined;
      this.getForfaits();
    });
  }
}
