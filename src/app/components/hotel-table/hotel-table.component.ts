import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iHotel } from 'src/app/model/InterfaceForfait';
//import { FVs } from 'src/services/mock_forfaitvoyages'; //mock
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';
import { HotelFormComponent } from 'src/app/components/hotel-form/hotel-form.component';

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrls: ['./hotel-table.component.scss'],
})
export class HotelTableComponent implements OnInit {
  hotels: iHotel[] = []; // tous les hotels
  hotel?: iHotel; // hotel sélectionné

  columnsToDisplay = ['id', 'nom', 'coordonnees', 'nombreEtoiles', 'actions'];
  constructor(
    private forfaitAPIService: ForfaitAPIService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.forfaitAPIService.getHotels().subscribe((res) => (this.hotels = res));
  }

  onDelete(hotel: iHotel): void {
    this.forfaitAPIService
      .deleteHotel(hotel.id)
      .subscribe((_) => (this.hotels = this.hotels.filter((p) => p !== hotel)));
  }

  onSelect(hotel?: iHotel): void {
    if (!hotel) {
      this.hotel = {
        id: 0,
        nom: '',
        coordonnees: '',
        url: '',
        imagePath: '',
        nombreEtoiles: 0,
        nombreChambres: 0,
        caracteristiques: [],
      };
      console.log('hotel vide', this.hotel);
    } else {
      this.hotel = hotel;
      console.log('hotel existent:', this.hotel);
    }
    const hotelForm = this.dialog.open(HotelFormComponent, {
      width: '30rem',
      data: this.hotel,
    });

    hotelForm.afterClosed().subscribe((_) => {
      this.hotel = undefined;
      this.getHotels();
    });
  }
}
