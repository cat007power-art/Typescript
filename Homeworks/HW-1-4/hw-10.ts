interface Card {
    cardSuit: 'spade' | 'diamond' | 'heart' | 'clubs';
    value: string;
    color: 'red' | 'black';
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

console.log(deck);

// 1. туз пик
const spadeAce: Card | undefined = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

// 2. Все шестёрки
const sixes: Card[] = deck.filter(card => card.value === '6');
console.log(sixes);

// 3. Все красные карты
const redCards: Card[] = deck.filter(card => card.color === 'red');
console.log(redCards);

// 4. Все бубны
const diamonds: Card[] = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

// 5. Все трефы от 9 до туза
const clubs: Card[] = deck.filter(card =>
    card.cardSuit === 'clubs' &&
    ['9','10','jack','queen','king','ace'].includes(card.value)
);
console.log(clubs);