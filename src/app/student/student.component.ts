import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
sname:string='raj'
sclass:string='CSE'
 
@Output() dataFromChild= new EventEmitter<any>();
  
dropdownupdate(tempvalue:any)
{
  this.dataFromChild.emit(tempvalue);

}
}
