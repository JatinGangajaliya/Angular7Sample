export class Card {
    good: Array<ICardDetails>;
    improve: Array<ICardDetails>;
    action: Array<ICardDetails>;
}

export class ICardDetails {
    id: number;
    title: string;
    description: string;
    votes: number;
}