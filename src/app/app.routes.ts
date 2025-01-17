import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:"",redirectTo:"Home", pathMatch:"full"},
    {path:"Home",component:HomeComponent,title:"Home"},
    {path:"About",component:AboutComponent,title:"About"},
    {path:"Meals",component:MealsComponent,title:"Meals",children:[
        {path:"",redirectTo:"Seafood",pathMatch:"full"},
        {path:"Seafood",component:SeafoodComponent},
        {path:"Pasta",component:PastaComponent},
        {path:"Breakfast",component:BreakfastComponent}
    ]},
    {path:"Team",component:TeamsComponent,title:"Team"},
    {path:"Contacts",component:ContactsComponent,title:"Contact"},
    {path:"**",component:NotfoundComponent,title:"Not Found Page !"},
];
