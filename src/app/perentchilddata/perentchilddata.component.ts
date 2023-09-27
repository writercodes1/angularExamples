import { Component,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-perentchilddata',
  templateUrl: './perentchilddata.component.html',
  styleUrls: ['./perentchilddata.component.scss']
})
export class PerentchilddataComponent {
  v1_name:any=''
 
  v1_caller(){
    console.log(this.v1_name)
  }
  @Input() v1_name_p=''
}
