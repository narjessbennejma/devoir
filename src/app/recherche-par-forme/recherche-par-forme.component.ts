import { Component, OnInit } from '@angular/core';
import { Forme } from '../model/forme.model';
import { Medicament } from '../model/medicament';
import { AuthService } from '../services/auth.service';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-recherche-par-forme',
  templateUrl: './recherche-par-forme.component.html',
  styles: [
  ]
})
export class RechercheParFormeComponent implements OnInit 
{
 medicaments :Medicament[]=[];
 IDForme:number;
 formes:Forme[];
  constructor(private medicamentService :MedicamentService,public authService: AuthService) { }

  ngOnInit(): void 
  {
    this.medicaments=[];
    this.formes=this.medicamentService.listeForme();
  }
  onChange()
   {
    this.medicaments = this.medicamentService.rechercherParForme(this.IDForme);
  }
  supprimerMedicament(m: Medicament)
{
    //console.log(m);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
   this.medicamentService.supprimerMedicament(m);
}
    

}
