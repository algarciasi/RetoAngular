import { Routes } from '@angular/router';
import { EmpresasListComponent } from './pages/empresas-list/empresas-list.component';

export const routes: Routes = [

    {path:"", pathMatch: "full", redirectTo: "home"},
    {path:"home", component: EmpresasListComponent},
    {path:"**", redirectTo: "home"},
];
