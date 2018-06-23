import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, GoogleMapOptions } from '@ionic-native/google-maps';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [GoogleMaps]
})
export class MapPage {

  public map: GoogleMap;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public googleMaps: GoogleMaps,
    public platform: Platform
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.platform.ready().then(() => {
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
             lat: 19.5561633,
             lng: -99.0238899
           },
           zoom: 18,
           tilt: 30
         }
      };  
      this.map = GoogleMaps.create('map', mapOptions);
  /*    
      this.map = this.googleMaps.create('map');

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        let myPosition: LatLng = new LatLng(19.5561633, -99.0238899);
        this.map.animateCamera({ target: myPosition, zoom: 10 });
      });
*/
    }).catch(err => {
      console.log('ERROR DETECTED ');
    });
  }

}
