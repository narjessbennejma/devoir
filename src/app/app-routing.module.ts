import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MedicamentGuard } from './medicament.guard';
import { RechercheParFormeComponent } from './recherche-par-forme/recherche-par-forme.component';
const routes: Routes = [
  {path: "medicaments", component : MedicamentsComponent},
  {path: "add-medicament", component : AddMedicamentComponent ,canActivate:[MedicamentGuard]},
  {path: "updateMedicament/:id", component: UpdateMedicamentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: "rechercheParForme", component : RechercheParFormeComponent},
  {path: "",redirectTo: "medicaments", pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
