import { Component,  } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //title = 'onetwowaydata';
  

  // city: string = '';
  // weatherData: any;
  // icon = '';
  // imageurl = "";
  // constructor(private http: HttpClient) {}
  // getWeather() {
  //   if (this.city) {
  //     const apiKey = 'edd126b9fade18f89566e6a5fb04c0b8';
  //     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;
  
  //     this.http.get(apiUrl).subscribe((data: any) => {
  //       this.weatherData = data;
  //       this.icon = this.weatherData.weather[0].icon;
  //       this.imageurl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
  //     });
  //   }
  // }
    

   // newvar_v1:any='check me'
 // dropdata:any=['listening music','MMA']
  //parentdatahandler(val:any)
  //{
   //  this.dropdata.push(val);
  //}
 
  //   constructor(private serviceProvider:AppseriveService){}

  //   ngOnInit(){
  //      this.Caller()
  //   }
  //   Caller(){
  //     this.serviceProvider.callerForApi().subscribe((res)=>{this.apidata=res})
  //   }
 

}
 