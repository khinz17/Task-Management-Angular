import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent implements OnInit {

  title: string = "";

  constructor(private dialog: MatDialog, 
            public dialogRef: MatDialogRef<AddTaskDialogComponent>, //to close dialog
            @Inject(MAT_DIALOG_DATA) public data: string)
            { 
              this.title = data;
            }

  ngOnInit(): void {
  }

  saveDelete(){
    this.dialog.open(TaskConfirmationDialogComponent,{})
  }
  
  cancelDelete(){
    this.dialogRef.close()
  }

}
