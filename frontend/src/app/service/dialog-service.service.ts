import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {



  constructor(private dialog: MatDialog) { }


  public openConfirmDialog(
    title: string,
    message: string,
    yes: string,
    no: string
  ): Observable<any> {
    const reference = this.dialog.open(ConfirmDialogComponent, {
      width: 'auto',
      data: {
        title: title,
        message: message,
        buttonNo: no,
        buttonYes: yes,
      }
    });
    return reference.afterClosed();
  }

}
