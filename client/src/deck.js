import _ from 'lodash'

export default class Deck {
  constructor() {
    this.deck = [
      
      { rank: '2', suit: 'H' },
      { rank: '3', suit: 'H' },
      { rank: '4', suit: 'H' },
      { rank: '5', suit: 'H' },
      { rank: '6', suit: 'H' },
      { rank: '7', suit: 'H' },
      { rank: '8', suit: 'H' },
      { rank: '9', suit: 'H' },
      { rank: 'T', suit: 'H' },
      { rank: 'J', suit: 'H' },
      { rank: 'Q', suit: 'H' },
      { rank: 'K', suit: 'H' },
      { rank: 'A', suit: 'H' },

      { rank: '2', suit: 'D' },
      { rank: '3', suit: 'D' },
      { rank: '4', suit: 'D' },
      { rank: '5', suit: 'D' },
      { rank: '6', suit: 'D' },
      { rank: '7', suit: 'D' },
      { rank: '8', suit: 'D' },
      { rank: '9', suit: 'D' },
      { rank: 'T', suit: 'D' },
      { rank: 'J', suit: 'D' },
      { rank: 'Q', suit: 'D' },
      { rank: 'K', suit: 'D' },
      { rank: 'A', suit: 'D' },

      { rank: '2', suit: 'C' },
      { rank: '3', suit: 'C' },
      { rank: '4', suit: 'C' },
      { rank: '5', suit: 'C' },
      { rank: '6', suit: 'C' },
      { rank: '7', suit: 'C' },
      { rank: '8', suit: 'C' },
      { rank: '9', suit: 'C' },
      { rank: 'T', suit: 'C' },
      { rank: 'J', suit: 'C' },
      { rank: 'Q', suit: 'C' },
      { rank: 'K', suit: 'C' },
      { rank: 'A', suit: 'C' },

      { rank: '2', suit: 'S' },
      { rank: '3', suit: 'S' },
      { rank: '4', suit: 'S' },
      { rank: '5', suit: 'S' },
      { rank: '6', suit: 'S' },
      { rank: '7', suit: 'S' },
      { rank: '8', suit: 'S' },
      { rank: '9', suit: 'S' },
      { rank: 'T', suit: 'S' },
      { rank: 'J', suit: 'S' },
      { rank: 'Q', suit: 'S' },
      { rank: 'K', suit: 'S' },
      { rank: 'A', suit: 'S' }

    ]
  }

  shuffle() {
    this.deck = _.shuffle(this.deck)
  }

  pullCard() {
    const card = _.head(this.deck)
    this.deck = _.drop(this.deck)
    return card
  }
}