import { Injectable } from '@angular/core';
import { Visitor, VisitorType, Room } from '../model/bean';
import { environment } from '../../environments/environment';

@Injectable()
export class VisitorService {
 visitor: Visitor;

  getVisitor(): Visitor {
    if (!environment.production) {
      return {
        name: 'Greg',
        type: VisitorType.TEACHER,
        room: {
          id: 543543,
          name: 'SJK',
          session: false,
          subjects: [
            {
            name: 'Integrals', id: 0, positive: 20, negative: 80, comments: [
              'How to determine the lower and the upper boundary?',
              '"What\' the primitive of x powered by 2?',
              'I don\'t understand'
            ]},
            {
              name: 'Application of Primitive functions', id: 1, positive: 5, negative: 95, comments: [
              'What is a primitive function?',
              'Is it the same as anti-deriviate?',
              'I saw a cat once', 'Stones can bounce'
            ]},
            {
              name: 'Area under the curve', id: 2, positive: 70, negative: 30, comments: [
              'Why do I get a negative area?',
              'Does the negative area subtract from the positive?'
            ]},
            {
              name: 'Integration by parts', id: 3, positive: 45, negative: 55, comments: [
              'Can we have a tea this afternoon?',
              'Buy us cake next time you\'re late!',
              'When to use integration by parts?'
            ]},
            {
              name: 'Specific Integral solution', id: 4, positive: 50, negative: 50, comments: [
              'What if the boundaries are inf?',
              'I love this teachers web!',
              'Can I borrow some money?',
              'When does the class end? I\'m late for an appointment.'
            ]},
            {
              name: 'Generalized Integral', id: 5, positive: 30, negative: 70, comments: [
              'This is tricky...', 'When\'s the exam?',
              'Could you repeat exercise 1b?',
              'I meant 3b',
              'Could we have some extra credits for the exam if we pass this pre-test?',
              'At the next seminar, could we repeat what we did the last 15 minutes?'
            ]},
            {
              name: 'Summary', id: 6, positive: 100, negative: 0, comments: [
              'Crystal clear!',
              'You\'re an awesome teacher!',
              'I didn\'t quite understand question 3c section 3, but I guess I\'ll figure it out soon',
              'Can we do some exam questions next time?',
              'I love the examples you brought up, now I finally understand!',
              'I\'ll back a cake for the next seminar',
              '123'
            ]}
          ]
        }
      };
    } else {
      if (this.visitor === undefined) {
        this.visitor = new Visitor();
      }
      return this.visitor;
    }
  }

  setVisitor(visitor: Visitor) {
    this.visitor = visitor;
  }


}
