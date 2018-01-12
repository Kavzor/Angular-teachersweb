import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PublicRoomComponent } from './public-room/public-room.component';
import { StudentRoomComponent } from './student/student-room/student-room.component';
import { TeacherRoomComponent, OverviewComponent , RoomOverviewComponent } from './teacher/teacher-room/teacher-room.component';


import { VisitorService } from './service/visitor.service';
import { SessionToTextPipe } from './pipe/session-to-text.pipe';
import { ProgressConvertPipe } from './pipe/progress-convert.pipe';
import { ProgressDirective } from './directive/progress.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicRoomComponent,
    StudentRoomComponent,
    TeacherRoomComponent,
    OverviewComponent,
    RoomOverviewComponent,
    SessionToTextPipe,
    ProgressConvertPipe,
    ProgressDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ VisitorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
