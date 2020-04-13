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

  getCoranaData() {
    return this.serviceutilService.get("https://api.covid19india.org/v2/state_district_wise.json");
  }

  getCurrentMapLocation(position){
        return this.serviceutilService.get("https://nominatim.openstreetmap.org/reverse?format=json&lat="+position.coords.latitude+"&lon="+position.coords.longitude);
     
  }  
  
}

