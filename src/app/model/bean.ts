export enum VisitorType {
  GUEST = 0,
  TEACHER = 1,
  STUDENT = 2
}

export class Subject {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.positive = 0;
    this.negative = 0;
    this.comments = [];
  }
  name: string;
  id: number;
  positive: number;
  negative: number;
  comments: Array<string>;
}

export class Room {
  constructor() {
    this.subjects = new Array<Subject>();
    this.id = '';
    this.name = '';
    this.session = false;
  }
  id: any;
  name: string;
  session: boolean;
  subjects: Array<Subject>;
}

export class Visitor {
  constructor() {
    this.room = new Room();
    this.name = '';
    this.type = VisitorType.GUEST;
  }
  name: string;
  type: VisitorType;
  room: Room;
}
