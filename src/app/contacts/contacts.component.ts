import { Component } from '@angular/core';
import { ContentComponent } from "../content/content.component";
@Component({
  selector: 'app-contacts',
  imports: [ContentComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  title:string="Contacts" //String Value For The Child Component(app-content)
}
