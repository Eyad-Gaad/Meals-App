import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) Meal!:Imeals;
}
export interface Imeals{
  idMeal:string
  strMeal:string,
  strMealThumb:string,
  Desc:string,
}