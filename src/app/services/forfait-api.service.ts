import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iForfait, iHotel } from '../model/InterfaceForfait';

// Test laptop
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ForfaitAPIService {
  // forfaitAPIUrl = 'https://wjat.site/forfaitvoyageAPI/forfaitapi';//heberge dans mon site mais ne marche pas... retourne 301 The document has been permanently moved
  forfaitAPIUrl = 'http://localhost/api-forfaitvoyage-tp2/forfaitapi/';
  // hotelAPIUrl = 'https://wjat.site/forfaitvoyageAPI/hotelapi';//heberge dans mon site mais ne marche pas... retourne 301 The document has been permanently moved
  hotelAPIUrl = 'http://localhost/api-forfaitvoyage-tp2/hotelapi/';

  constructor(private http: HttpClient) {}

  getForfaits(): Observable<iForfait[]> {
    return this.http.get<iForfait[]>(this.forfaitAPIUrl);
  }
  postForfait(fvrequest: iForfait): Observable<iForfait> {
    return this.http.post<iForfait>(this.forfaitAPIUrl, fvrequest, httpOptions);
  }
  putForfait(fvrequest: iForfait): Observable<iForfait> {
    return this.http.put<iForfait>(
      this.forfaitAPIUrl + '?id=' + fvrequest.id,
      fvrequest,
      httpOptions
    );
  }
  deleteForfait(id: number): Observable<iForfait> {
    return this.http.delete<iForfait>(this.forfaitAPIUrl + '?id=' + id);
  }

  getHotels(): Observable<iHotel[]> {
    return this.http.get<iHotel[]>(this.hotelAPIUrl);
  }
  postHotel(hrequest: iHotel): Observable<iHotel> {
    return this.http.post<iHotel>(this.hotelAPIUrl, hrequest, httpOptions);
  }
  putHotel(hrequest: iHotel): Observable<iHotel> {
    return this.http.put<iHotel>(
      this.hotelAPIUrl + '?id=' + hrequest.id,
      hrequest,
      httpOptions
    );
  }
  deleteHotel(id: number): Observable<iHotel> {
    return this.http.delete<iHotel>(this.hotelAPIUrl + '?id=' + id);
  }
}
