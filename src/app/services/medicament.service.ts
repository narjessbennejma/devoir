import { Injectable } from '@angular/core';
import { Forme } from '../model/forme.model';
import { Medicament } from '../model/medicament';


@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
   
  medicamentsRecherche : Medicament[];
  medicaments : Medicament[];
  formes:Forme[];

  medicament =new Medicament();
  forme =new Forme();
  constructor() {
    this.formes = [ {idF : 1, nomF : "Solide"},
                   {idF : 2, nomF: "Liquides"},
                    {idF : 3, nomF: "Vaccin"}];

    this.medicaments =[
      {idMedicament : 1, nomMedicament : "PANADOL1000", prixMedicament : 4000, dateCreation : new Date("01/08/2021"), dateExpiree : new Date("02/08/2022"),quantite : 4, forme:{idF : 1, nomF : "Solide"}},
      {idMedicament : 2, nomMedicament : "DOLIPRANE", prixMedicament : 3000, dateCreation : new Date("05/10/2021"), dateExpiree : new Date("06/10/2022"),quantite : 8,forme:{idF : 1, nomF : "Solide"}},
      {idMedicament : 3, nomMedicament : "Vaccin insuline", prixMedicament : 4500, dateCreation : new Date("01/07/2011"), dateExpiree : new Date("02/07/2022"),quantite : 10,forme:{idF : 3, nomF: "Vaccin"}},
      {idMedicament : 4, nomMedicament : "Amoxicilline", prixMedicament : 6.000 , dateCreation : new Date("01/09/2021"), dateExpiree : new Date("02/09/2022"),quantite : 100, forme:{idF : 2, nomF: "Liquides"}},

 ];
   }
   listeMedicaments():Medicament[]
   {
       return this.medicaments
   }
   ajouterMedicament( med: Medicament){
    this.medicaments.push(med);
    }
    supprimerMedicament( med: Medicament){
      //supprimer le produit prod du tableau produits
      const index = this.medicaments.indexOf(med, 0);
      if (index > -1) {
      this.medicaments.splice(index, 1);
      }
      
    }
    consulterMedicamen(id:number): Medicament{
      this.medicament = this.medicaments.find(p => p.idMedicament == id);
      return this.medicament;
      }
   
   trierMedicament(){
    this.medicaments = this.medicaments.sort((n1,n2) => {
    if (n1.idMedicament > n2.idMedicament) {
    return 1;
    }
    if (n1.idMedicament < n2.idMedicament) {
    return -1;
    }
    return 0;
    });
    } 
    updateMedicament(m:Medicament){
     this.supprimerMedicament(m);
     this.ajouterMedicament(m);
     this.trierMedicament();
   }  
   listeForme():Forme[] {
    return this.formes;
    }
    
    consulterForme(id:number): Forme{    
      this.forme =  this.formes.find(f => f.idF  == id);
        return this.forme;
     }
      

     rechercherParForme(idF: number): Medicament[]
     {
      this.medicamentsRecherche = [];
      this.medicaments.forEach((cur, index) => {
      if(idF == cur.forme.idF) {
      console.log("cur "+cur);
      this.medicamentsRecherche.push(cur);
      }
    });
    return this.medicamentsRecherche; }
      
}
