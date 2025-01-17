import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";
@Component({
  selector: 'app-home',
  imports: [ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string="Home" //String Value For The Child Component(app-content)
}
