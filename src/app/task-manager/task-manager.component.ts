import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  displayedColumns: string[] = ['position', 'taskName', 'taskDescription', 'status' , 'completionRating','taskCreated','taskCompleted','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }


  openEditDialog() {
    this.dialog.open(TaskDialogComponent, {
      data: 'Edit Task'
    })
  }

  openDeleteDialog(){
    this.dialog.open(DeleteTaskDialogComponent, {
      data: 'Delete Task'
    })
  }

  openAddDialog(){
    this.dialog.open(AddTaskDialogComponent, {
      data:'Create Task'
    })
  }

  search(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  notifyEvent(event: number){
      
  }

}

export interface PeriodicElement {

  position: number;
  taskName: string;
  taskDescription: string;
  status: string;
  taskCreated: Date;
  taskCompleted: Date;
  completionRating: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, taskName: 'Study', taskDescription: 'Learning C#', status: 'Complete', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 2, taskName: 'Study', taskDescription: 'Learning C#', status: 'Progress', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 3, taskName: 'Study', taskDescription: 'Learning C#', status: 'New', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 4, taskName: 'Study', taskDescription: 'Learning JS', status: 'Complete', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 5, taskName: 'Study', taskDescription: 'Learning JS', status: 'Progress', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 6, taskName: 'Study', taskDescription: 'Learning TS', status: 'Complete', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 7, taskName: 'Study', taskDescription: 'Learning TS', status: 'Progress', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 8, taskName: 'Study', taskDescription: 'Learning Angular', status: 'Complete', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 9, taskName: 'Study', taskDescription: 'Learning Angular', status: 'New', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()},
  {position: 10, taskName: 'Study', taskDescription: 'Learning Angular', status: 'Progress', completionRating: 5, taskCreated: new Date(), taskCompleted: new Date()}
];