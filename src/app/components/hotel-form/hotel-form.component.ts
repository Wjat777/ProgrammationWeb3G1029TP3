import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iHotel } from 'src/app/model/InterfaceForfait';
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss'],
})
export class HotelFormComponent implements OnInit {
  @Input() hotel: iHotel = {
    id: 0,
    nom: '',
    coordonnees: '',
    url: '',
    imagePath: '',
    nombreEtoiles: 0,
    nombreChambres: 0,
    caracteristiques: [],
  };

  @Output() majTableau = new EventEmitter();
  constructor(private forfaitAPIService: ForfaitAPIService) {}
  ngOnInit(): void {}
  onSave(hotelForm: NgForm) {
    if (hotelForm.valid) {
      if (this.hotel.id != null && this.hotel.id != 0) {
        // Si on a un id, on doit modifier le produit
        this.forfaitAPIService.putHotel(this.hotel).subscribe((_) => {
          this.majTableau.emit();
        });
      } else {
        // Sinon, on doit ajouter le hotel
        this.forfaitAPIService.postHotel(this.hotel).subscribe((_) => {
          this.majTableau.emit();
        });
      }
    }
  }

  onCancel() {
    this.majTableau.emit();
  }
}
