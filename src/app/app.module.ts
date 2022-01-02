import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { FormsModule } from '@angular/forms';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParFormeComponent } from './recherche-par-forme/recherche-par-forme.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentsComponent,
    AddMedicamentComponent,
    UpdateMedicamentComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParFormeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
