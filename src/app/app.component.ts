import { Component } from '@angular/core';
import { CoronaTrackerService } from './corona-tracker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'safezone';
  geoLocation:any;
  coranaData:any;
  districtData:any;

  constructor(private coronaTrackerService: CoronaTrackerService){}

  ngOnInit() {
    this.callTracker();
 }

  private callTracker() {
    
    
    this.coronaTrackerService.getCurrentMapLocation().subscribe( 
      result => {
          this.geoLocation = result;
         
          
          if(this.geoLocation.address.city != null){
            this.coronaTrackerService.getCurrentLocation().subscribe( 
              result => {
                  this.coranaData = result;
                  this.coranaData = this.coranaData.filter(t=>t.state == this.geoLocation.address.state);
           
                  this.districtData = this.coranaData[0].districtData;
                  
                  this.districtData = this.districtData.filter(t=>t.district == this.geoLocation.address.city);
                  
              })
          }
                
      })


    

    this.coronaTrackerService.getPosition().then(pos=>
      {
         console.log(`Positon: ${pos.lng} ${pos.lat}`);
      });

  }

}
