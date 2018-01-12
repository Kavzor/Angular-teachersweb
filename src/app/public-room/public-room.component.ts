import { Component, OnInit } from '@angular/core';
import { Visitor, VisitorType } from '../model/bean';
import { VisitorService } from '../service/visitor.service';

@Component({
  selector: 'app-public-room',
  templateUrl: './public-room.component.html',
  styleUrls: ['./public-room.component.css']
})
export class PublicRoomComponent implements OnInit {
  visitor: Visitor;

  constructor(private visitorService: VisitorService) {}

  ngOnInit() {
    this.visitorService.setVisitor(undefined);
    this.visitor = this.visitorService.getVisitor();
  }

  registerStudent() {
    this.visitor.type = VisitorType.STUDENT;
    this.visitorService.setVisitor(this.visitor);
  }

  registerTeacher() {
    this.visitor.type = VisitorType.TEACHER;
    this.visitorService.setVisitor(this.visitor);
  }
}
