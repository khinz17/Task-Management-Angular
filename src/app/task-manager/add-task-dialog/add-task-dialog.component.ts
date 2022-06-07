import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {
  title: string = "";

  taskManagerAddFormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  })

  constructor(private dialog: MatDialog, 
            public dialogRef: MatDialogRef<AddTaskDialogComponent>, //to close dialog
            @Inject(MAT_DIALOG_DATA) public data: string)
            { 
              this.title = data;
            }

  ngOnInit(): void {
    this.set()
  }

  set(){
    //this.taskManagerAddFormGroup.controls['name'].setValue('Task Name')
    //this.taskManagerAddFormGroup.controls['description'].setValue('Task Description')
  }

  SaveAddData(){
    this.dialog.open(TaskConfirmationDialogComponent,{})
  }

  CancelAddTask(){
    this.dialogRef.close()
  }

}
