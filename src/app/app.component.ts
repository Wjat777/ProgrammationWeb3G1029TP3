/*
Par: William John Adam Trindade
2021-11-14
*/
import { Component } from '@angular/core';
import { iForfait, iHotel } from './model/InterfaceForfait';
import { FVs } from './services/mock_forfaitvoyages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titre = 'Composant racine (app-root)';
  fvs: iForfait[] = FVs;
}
