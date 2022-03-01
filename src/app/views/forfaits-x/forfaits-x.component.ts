import { Component, OnInit } from '@angular/core';
import { iForfait, iHotel } from 'src/app/model/InterfaceForfait';
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';
//import { FVs } from 'src/app/services/mock_forfaitvoyages'; //mock

@Component({
  selector: 'forfaits-x',
  templateUrl: './forfaits-x.component.html',
  styleUrls: ['./forfaits-x.component.scss'],
})
export class ForfaitsXComponent implements OnInit {
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
