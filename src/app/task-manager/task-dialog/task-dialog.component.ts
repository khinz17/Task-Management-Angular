import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskConfirmationDialogComponent } from '../task-confirmation-dialog/task-confirmation-dialog.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  title: string = "";

  taskManagerEditFormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
    //status: new FormControl(null, Validators.required)
  })


  constructor(private dialog: MatDialog, 
            public dialogRef: MatDialogRef<TaskDialogComponent>, //to close dialog
            @Inject(MAT_DIALOG_DATA) public data: string)
            { 
              this.title = data;
            }

  ngOnInit(): void {
    //console.log(this.taskManagerFormGroup)
    this.set()
  }

  set() {
    //this.taskManagerFormGroup.setValue({name: 'Task Name', discription: 'Task Description'})
    //this.taskManagerEditFormGroup.controls['name'].setValue('Task Name')
    //this.taskManagerEditFormGroup.controls['description'].setValue('Task Description')
  }

  save(){
    this.dialog.open(TaskConfirmationDialogComponent, {})
  }
  
  cancel(){
    this.dialogRef.close()
  }



}
