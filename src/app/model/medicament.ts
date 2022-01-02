import { Forme } from "./forme.model";

export class Medicament {
    idMedicament : number;
    nomMedicament : string;
    prixMedicament : number;
     dateCreation : Date ;
     dateExpiree   : Date;
     quantite: number;
     forme :Forme;
    }