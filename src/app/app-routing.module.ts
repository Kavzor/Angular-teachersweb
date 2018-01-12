import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicRoomComponent } from './public-room/public-room.component';
import { StudentRoomComponent } from './student/student-room/student-room.component';
import { TeacherRoomComponent, OverviewComponent } from './teacher/teacher-room/teacher-room.component';

const routes: Routes = [
  { path: '', component: PublicRoomComponent },
  { path: 'student', component: StudentRoomComponent },
  { path: 'teacher', component: TeacherRoomComponent, children: [
      { path: 'overview', component: OverviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
