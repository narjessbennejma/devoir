import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forme } from '../model/forme.model';
import { Medicament } from '../model/medicament';
import { MedicamentService } from '../services/medicament.service';
@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  
})
export class AddMedicamentComponent implements OnInit {
  newMedicament = new Medicament();
  message : string;
  formes : Forme[];
  newIdFO : number;
  newforme : Forme;
  constructor(private medicamentService :MedicamentService,private router :Router ) { 
    this.medicamentService.ajouterMedicament(this.newMedicament) }

  ngOnInit(): void {
    this.formes = this.medicamentService.listeForme();
  }
  addMedicament()
    {
      //console.log(this.newMedicament);
      this.newforme=this.medicamentService.consulterForme(this.newIdFO);
      this.newMedicament.forme=this.newforme;
      this.medicamentService.ajouterMedicament(this.newMedicament);
      //this.message=" Medicament "+this.newMedicament.nomMedicament +" ajouter avec succes !";
      this.router.navigate(['medicaments']);
    }

}
