import { Component, OnInit } from '@angular/core';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
//import { FVs } from 'src/services/mock_forfaitvoyages'; //mock
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  //fvs: iForfait[] = FVs; //mock
  fvs: iForfait[] = [];

  constructor(private forfaitAPIService: ForfaitAPIService) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitAPIService.getForfaits().subscribe((res) => (this.fvs = res));
  }
}
