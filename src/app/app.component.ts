import { Component } from '@angular/core';
import { CoronaTrackerService } from './corona-tracker.service';
import { FormBuilder, Validators } from "@angular/forms";
declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'safezone';
  geoLocation: any;
  coranaData: any;
  districtData: any;
  options: any;
  isSubmitted = false;
  confirmedCases:any;
  coranaZone:string;
  map: any;

  constructor(private coronaTrackerService: CoronaTrackerService, public fb: FormBuilder) { }


  ngOnInit() {
    this.callTracker();
  }

  private callTracker() {
    this.coronaTrackerService.getCoranaData().subscribe(
      result => {
        this.coranaData = result;
      });
  }

/*########### Form ###########*/
coranaForm = this.fb.group({
  stateName: ['', [Validators.required]],
  districtName: ['', [Validators.required]]
})


// Choose city using select dropdown
changeCity(e) {
  this.districtData = this.coranaData[e].districtData;
}

changeDistrict(e) {
  this.confirmedCases = this.districtData[e].confirmed;
  if(this.confirmedCases <= '5'){
   this.coranaZone = 'green';
  }else if(this.confirmedCases <= '25'){
    this.coranaZone = 'yellow';
  }else{
    this.coranaZone = 'red';
  }
  
}


}
