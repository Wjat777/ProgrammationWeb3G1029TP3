import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';

@Component({
  selector: 'app-forfait-form',
  templateUrl: './forfait-form.component.html',
  styleUrls: ['./forfait-form.component.scss'],
})
export class ForfaitFormComponent implements OnInit {
  hotels: iHotel[] = [];
  hotelEmpty: iHotel = {
    id: 0,
    nom: '',
    coordonnees: '',
    url: '',
    imagePath: '',
    nombreEtoiles: 0,
    nombreChambres: 0,
    caracteristiques: [],
  };

  @Input() fv: iForfait = {
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

  @Output() majTableau = new EventEmitter();

  constructor(private forfaitAPIService: ForfaitAPIService) {}
  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.forfaitAPIService.getHotels().subscribe((res) => (this.hotels = res));
  }

  selectedHotel = this.fv.hotel.id;

  selectHotel(event: Event) {
    this.selectedHotel = parseInt((event.target as HTMLSelectElement).value);
    this.fv.hotel =
      this.hotels.find((element) => element.id == this.selectedHotel) ??
      this.hotelEmpty;
  }

  onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.fv.id != null && this.fv.id != 0) {
        // Si on a un id, on doit modifier le produit
        this.forfaitAPIService.putForfait(this.fv).subscribe((_) => {
          this.majTableau.emit();
        });
      } else {
        // Sinon, on doit ajouter le produit
        console.log(this.fv);
        this.forfaitAPIService.postForfait(this.fv).subscribe((_) => {
          this.majTableau.emit();
        });
      }
    }
  }

  onCancel() {
    this.majTableau.emit();
  }
}
