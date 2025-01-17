import { Component } from '@angular/core';
import { SupervisorComponent } from "../supervisor/supervisor.component";
@Component({
  selector: 'app-teams',
  imports: [SupervisorComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  show:boolean = true; //Switch For Show or Hide 
}
