# Bataro at home

## Introduction

Just a fun little project to see how performant React Native is using a game like Balatro. I'm basically copying what they have here and have no intentions of ever selling this.

## How the cards get counted

Basically I have a function that is essentially a move generator. Each time that I run the function, it generates the next event that occurs. Once it returns `null` then the hand is over. With an example:

Let's say that I have two tens on the board.
The move generator will return an object like this:

```javascript
{
  cardIndex: 0,
  cardValue: 10,
  cardSuit: 'hearts',
  cardEffect: 'holo',
  cardEffectActivated: false,
  cardSeal: 'red',
  cardSealActivated: false,
}
```

The next time I call the function, I will pass the object that was last returned from the function, it should then return the next card that affects the score. This can also be a joker. I will still need to figure out how to ensure that I properly keep track of what the next move is going to be given the previous. It's not entirely obvious what the order of moves is from the current object passed. I could also have an object that states everything about the current card and the current jokers like so:

```javascript
{
  cardIndex: 0,
  cardValue: 10,
  cardSuit: 'hearts',
  cardEffect: 'holo',
  cardEffectActivated: false,
  cardSeal: 'red',
  cardSealActivated: false,
  jokerIndex: 0,
  jokerEffect: 'holo',
  jokerID: 20,
  jokerEffectActivated: false,
  jokerIndex: 1,
  jokerEffect: 'none',
  jokerID: 21,
  jokerEffectActivated: false,
}
```

Will still need to figure out how to keep track of those jokers with multiple activations like chad, or baron. Those might need some additional metadata to properly work. Since the generator returns the current move, I can then update react state with the current operation. This will allow me to display card value above, animate the cards, and then update score. Need to think on this a bit more.
