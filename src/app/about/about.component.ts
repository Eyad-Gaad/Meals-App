import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";
@Component({
  selector: 'app-about',
  imports: [ContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title:string="About" //String Value For The Child Component(app-content)
}
