import { Component, OnInit } from '@angular/core';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';
//import { FVs } from 'src/app/services/mock_forfaitvoyages'; //mock

@Component({
  selector: 'forfaits-y',
  templateUrl: './forfaits-y.component.html',
  styleUrls: ['./forfaits-y.component.scss'],
})
export class ForfaitsYComponent implements OnInit {
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
