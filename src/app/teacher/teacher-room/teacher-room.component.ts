import { Component, OnInit, Input } from '@angular/core';
import { VisitorService } from '../../service/visitor.service';
import { Visitor, Room, Subject, VisitorType } from '../../model/bean';
import { environment } from '../../../environments/environment';
import { Location } from '@angular/common';
import { element } from 'protractor';


@Component({
  selector: 'app-teacher-room',
  templateUrl: 'teacher-root.component.html',
  styleUrls: ['./teacher-room.component.css']
})
export class TeacherRoomComponent implements OnInit {
  visitor: Visitor;
  redirect: boolean;

  constructor(private location: Location, private visitorService: VisitorService) {
    this.visitor = visitorService.getVisitor();
    this.redirect = this.visitor.type === VisitorType.GUEST;
  }

  ngOnInit() {
    if (this.redirect) {
      this.exitSession();
    }
  }

  exitSession() {
    this.visitorService.setVisitor(undefined);
    this.location.back();
  }
}

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['teacher-room.component.css']
})
export class OverviewComponent implements OnInit {
  visitor: Visitor;
  errorMessage: string;
  fieldSubject: string;
  minCharacters = 2;
  showDevTools: boolean;

  ngOnInit() {
    if (!environment.production) {
      this.showDevTools = true;
    }
    this.visitor = this.visitorService.getVisitor();
    console.log(this.visitor);
  }

  constructor(private visitorService: VisitorService) {}

  subjectExist(name) {
    const subjects = this.visitor.room.subjects;
    let subjectExist = false;
    let index = 0;
    while (!subjectExist && index < subjects.length) {
      const subject = subjects[index];
      if (subject !== undefined && subject.name === name) {
        subjectExist = true;
      } else {
        index++;
      }
    }
    return subjectExist;
  }
  getSubjectListIndex(name, index: number = 0) {
    const subjects = this.visitor.room.subjects;
    if (subjects[index].name !== name) {
      return this.getSubjectListIndex(name, ++index);
    } else {
      return index;
    }
  }

  onRemoveSubject(name) {
    this.visitor.room.subjects.splice(this.getSubjectListIndex(name), 1);
  }

  onAddSubject() {
    this.errorMessage = '';
    const subjects = this.visitor.room.subjects;
    const name = this.fieldSubject;
    if (this.subjectExist(name)) {
      this.errorMessage = name + ' already exist in the list';
    } else {
      if (name !== undefined && name.length >= this.minCharacters) {
        if (subjects.length < 8) {
          subjects.push(new Subject(name, subjects.length - 1));
        } else {
          this.errorMessage = 'Unable to add more subjects';
        }
      } else {
        this.errorMessage = 'Subjects must be atleast 2 characters';
      }
    }
    this.fieldSubject = '';
  }
}

@Component({
  selector: '<app-room-overview>',
  templateUrl: './room-overview.component.html',
  styleUrls: ['teacher-room.component.css']
})
export class RoomOverviewComponent {
  @Input() room: Room;

  isEditState = false;

  constructor(private visitorService: VisitorService) {
  }

  toggleEditState(editState) {
    this.isEditState = editState;
  }

  setSession(session) {
    this.room.session = session;
  }
}
