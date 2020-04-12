import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServiceutilServiceService } from './serviceutil-service.service';

@Injectable({
  providedIn: 'root'
})
export class CoronaTrackerService {

  constructor(private serviceutilService: ServiceutilServiceService) { }

  getCurrentLocation() {
    return this.serviceutilService.get("https://api.covid19india.org/v2/state_district_wise.json");
  }

  getCurrentMapLocation(){
    return this.serviceutilService.get("https://nominatim.openstreetmap.org/reverse?format=json&lat=12.9769291&lon=80.1986642");
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

}

