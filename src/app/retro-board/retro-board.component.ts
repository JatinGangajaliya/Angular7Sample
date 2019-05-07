import { Component, OnInit } from '@angular/core';
import { Card, ICardDetails } from '../card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewMoreModalContentComponent } from '../view-more-modal-content/view-more-modal-content.component';
import { MessageService } from '../services/message-service.service';

@Component({
  selector: 'app-retro-board',
  templateUrl: './retro-board.component.html',
  styleUrls: ['./retro-board.component.scss']
})
export class RetroBoardComponent implements OnInit {
  public cards: Card;
  public subscribe: any;

  constructor(
    public modalService: NgbModal,
    private messageService: MessageService) {
    this.cards = {
      good: [
        { id: 0, title: 'Mr. Nice', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 1, title: 'Narco', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 2, title: 'Bombasto', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 3, title: 'Celeritas', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 4, title: 'Magneta', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 5, title: 'RubberMan', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 6, title: 'Dynama', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 7, title: 'Dr IQ', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 8, title: 'Tornado', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 9, title: 'Magma', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 }
      ],
      improve: [
        { id: 10, title: 'Mr. Nice', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 11, title: 'Narco', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 12, title: 'Bombasto', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 13, title: 'Celeritas', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 14, title: 'Magneta', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 15, title: 'RubberMan', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 16, title: 'Dynama', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 17, title: 'Dr IQ', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 18, title: 'Tornado', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 19, title: 'Magma', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 }
      ],
      action: [
        { id: 20, title: 'Mr. Nice', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 21, title: 'Narco', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 22, title: 'Bombasto', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 23, title: 'Celeritas', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 24, title: 'Magneta', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 25, title: 'RubberMan', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 26, title: 'Dynama', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 27, title: 'Dr IQ', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 28, title: 'Tornado', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 },
        { id: 29, title: 'Magma', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', votes: 0 }
      ]
    };

    this.subscribe = this.messageService.getMessage().subscribe((res: any) => {
      let selectedType: Array<ICardDetails> = this.cards[res.type];
      selectedType.forEach(x => {
        if (x.id == res.card.id) {
          x = res.card;
        }
      });
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  openModal(card: Card, type: string) {
    const modalRef = this.modalService.open(ViewMoreModalContentComponent);
    modalRef.componentInstance.card = Object.assign({}, card);
    modalRef.componentInstance.type = type;
  }
}
