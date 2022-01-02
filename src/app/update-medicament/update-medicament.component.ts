import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament';
import { MedicamentService } from '../services/medicament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Forme } from '../model/forme.model';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styles: [
  ]
})
export class UpdateMedicamentComponent implements OnInit
 {
  currentMedicament = new Medicament();
  formes: Forme[];
  updatedForme: Forme;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private medicamenService: MedicamentService) { }

  ngOnInit(): void 
  {
    //console.log(this.activatedRoute.snapshot.params.id);
    this.formes = this.medicamenService.listeForme();
   this.currentMedicament = this.medicamenService.consulterMedicamen(this.activatedRoute.snapshot.params.id);
   console.log(this.currentMedicament);  
  }
  updateMedicament() 
  {
    this.updatedForme = this.medicamenService.consulterForme(this.currentMedicament.forme.idF);
    this.currentMedicament.forme = this.updatedForme; 
    this.medicamenService.updateMedicament(this.currentMedicament);
    //console.log(this.currentMedicament);
    
    this.router.navigate(['medicaments']);
  }


}
