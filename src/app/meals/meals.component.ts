import { Component } from '@angular/core';
import { RouterOutlet , RouterLink , RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-meals',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
