import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Card } from '../card';

@Injectable()
export class MessageService {
    private subject = new Subject<any>();

    saveCard(card: Card, type: string) {
        this.subject.next({'card': card, 'type': type});
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}