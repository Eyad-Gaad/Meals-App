import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-supervisor',
  imports: [],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.css'
})
export class SupervisorComponent {
  show:boolean=true;
  @Output() trigger:EventEmitter<boolean>=new EventEmitter(); //Trigger Event For Sending Boolean Data To The Parent Component
  click(){
    if(this.show==true){
      this.show = false; //Switch
      this.trigger.emit(false); //When Fired Send "false" To Parent Component
    }
    else{
      this.show = true; //Switch
      this.trigger.emit(true); //When Fired Send "true" To Parent Component
    }
  }
}