/*
Par: William John Adam Trindade
2021-11-14
*/
import { Component, Input } from '@angular/core';
import { iForfait } from 'src/app/model/InterfaceForfait';

@Component({
  selector: 'forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.scss'],
})
export class ForfaitCompletComponent {
  @Input() forfait: iForfait = {
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

  constructor() {}
}
