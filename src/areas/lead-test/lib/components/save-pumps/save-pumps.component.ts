import { Component, OnInit, Inject } from '@angular/core';
import { DataElement } from '../../_model/data';
import { TaskService } from 'areas/lead-test/task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-save-pumps',
  templateUrl: './save-pumps.component.html',
  styleUrls: ['./save-pumps.component.scss']
})
export class SavePumpsComponent implements OnInit {
    data: DataElement = new DataElement();
    submitting = false ;
    error: string ;
  
    constructor(private service: TaskService , public dialogRef: MatDialogRef<SavePumpsComponent>) {}
  
    ngOnInit(): void {
    }
  
    onSubmit(pumpForm: FormGroup): void {
      this.error = null ;
      if (pumpForm.valid) {
        this.service.saveData(this.data).subscribe((response) => {
          if (response.status === 1) {
            this.dialogRef.close(response.Message) ;
          } else {
            this.error = response.Message ;
          }
        });
      }
    }
    cancel(): void {
      this.dialogRef.close();
  
    }
  

}
