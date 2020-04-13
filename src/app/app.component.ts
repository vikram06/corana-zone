import { Component } from '@angular/core';
import { CoronaTrackerService } from './corona-tracker.service';
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
  options:any;

  constructor(private coronaTrackerService: CoronaTrackerService) { }


  map: any;

  ngOnInit() {
    this.callTracker();
  }

  private callTracker() {


    if (navigator.geolocation) {

      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
    
      navigator.geolocation.getCurrentPosition((position) => {
    
        this.coronaTrackerService.getCurrentMapLocation(position).subscribe(
          result => {
            this.geoLocation = result;
            if (this.isEmptyObj(this.geoLocation.results[0].locations[0].adminArea3)) {
              this.coronaTrackerService.getCoranaData().subscribe(
                result => {

                  this.coranaData = result;
                  this.coranaData = this.coranaData.filter(t => t.state == this.geoLocation.results[0].locations[0].adminArea3);

                  this.districtData = this.coranaData[0].districtData;

                  this.districtData = this.districtData.filter(t => t.district.includes(this.geoLocation.results[0].locations[0].adminArea5));
                 
                   alert(JSON.stringify(this.geoLocation.results[0].locations[0].adminArea5));

                })
            }else{
              alert("Problem is getting your location")
            }

          })

        this.map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
            zoom: 8
          })
        });
      }

      );

    }
    else {
      alert("Geolocation is not supported by this browser.");
    }

  }
  isEmptyObj(object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            return true;
        }
    }
  }
}
