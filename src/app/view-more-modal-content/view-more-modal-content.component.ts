import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/message-service.service';
import { Card } from '../card';

@Component({
  selector: 'app-view-more-modal-content',
  templateUrl: './view-more-modal-content.component.html',
  styleUrls: ['./view-more-modal-content.component.scss']
})
export class ViewMoreModalContentComponent implements OnInit {
  @Input() public card;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  
  constructor(
    public activeModal: NgbActiveModal,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  passBack() {
    this.passEntry.emit(this.card);
  }

  saveCardDetails(card: Card, type: string) {
    this.messageService.saveCard(card, type);
    this.activeModal.dismiss();
  }

}
