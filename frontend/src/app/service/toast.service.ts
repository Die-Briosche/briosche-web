import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackbar: MatSnackBar) { }


  openToast(message: string, action: string) {
    this.snackbar.open(message, action);
  }

  openTimeoutToast(message: string, action: string, time: number) {
    this.snackbar.open(message, action, {
      duration: time,
    })
  }
}
