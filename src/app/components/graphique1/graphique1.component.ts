import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { iHotel } from 'src/app/model/InterfaceForfait';
//import { FVs } from 'src/services/mock_forfaitvoyages'; //mock
import { ForfaitAPIService } from 'src/app/services/forfait-api.service';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css'],
})
export class Graphique1Component implements OnInit {
  hotels: iHotel[] = []; // tous les hotels

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins: [],
    options: { responsive: true, maintainAspectRatio: false },
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: [],
    datasets: [{ data: [], label: '' }],
  };

  constructor(private forfaitAPIService: ForfaitAPIService) {}

  ngOnInit(): void {
    this.getHotels();
    this.creteChart();
  }

  getHotels(): void {
    this.forfaitAPIService.getHotels().subscribe((res) => (this.hotels = res));
  }
  creteChart(): void {
    var i = 1;
    for (const element of this.hotels) {
      i++;
      const newDataset = {
        data: [element.nombreEtoiles],
        label: element.nom,
      };
      this.mesDonnees.datasets.push(newDataset);
    }
  }
}
