import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

//--component
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskDialogComponent } from './task-manager/task-dialog/task-dialog.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TaskConfirmationDialogComponent } from './task-manager/task-confirmation-dialog/task-confirmation-dialog.component';
import { AddTaskDialogComponent } from './task-manager/add-task-dialog/add-task-dialog.component';
import { DeleteTaskDialogComponent } from './task-manager/delete-task-dialog/delete-task-dialog.component';
import { TranslateWordPipe } from './shared/pipes/translate-word.pipe';
import { RatingComponentComponent } from './shared/rating-component/rating-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    TaskDialogComponent,
    TaskConfirmationDialogComponent,
    AddTaskDialogComponent,
    DeleteTaskDialogComponent,
    TranslateWordPipe,
    RatingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
