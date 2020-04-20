import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Pet } from '../interfaces/pet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar
    ) {}

  createPet(pet: Pet) {
    const id = this.db.createId();
    return this.db
      .doc(`pets/${id}`)
      .set(pet)
      .then(() => {
        this.snackBar.open(`ペットを作成しまた`, null, {
          duration: 2000
        });
      });
  }
}
