interface Card {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: string;
    color: 'red' | 'black';
}

interface PackedDeck {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
}

const suits: Card['cardSuit'][] = ['spade', 'diamond', 'heart', 'clubs'];
const values: string[] = ['6','7','8','9','10','jack','queen','king','ace'];

const deck: Card[] = [];

for (const suit of suits) {
    for (const value of values) {
        const color: 'red' | 'black' = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
        deck.push({ cardSuit: suit, value: value, color: color });
    }
}

const packedDeck: PackedDeck = deck.reduce<PackedDeck>((acc, card) => {
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'clubs') acc.clubs.push(card);
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(packedDeck);