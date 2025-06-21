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

## Positioning of the cards

### Relative vs Global Positioning

The card containers such as the hand, deck, joker, and consumables keep track of the cards within them. Originally, they did so through relative positioning. The benefit of using relative positioning is that you get automatic card organization through the use of flexbox and an array containing the cards. No need to calculate where the cards should exist in the container as that is handled by flexbox. Each card was animated on its own which made each card easy to keep track of by itself. The problem is that cards can be manipulated in ways that affect the other cards. In Balatro, the biggest example of this is by changing the order of the cards so that joker effects can be properly timed. If the cards are relatively positioned, this would seem simple enough. The order of the cards in the array can be changed which gets reflected in the container. The issue is that card positioning is done through dragging and dropping which means that the container needs to have some idea of where the card exists within it relative to the other cards that are shown. Each card would need to know where it exists within the container and the container would need to know when the dragged card moves to another location. This isn't even taking into account when the hand is actually played where the cards would need to move from the hand into the played section which poses some unique challenges there. It seems a lot simpler to instead create a container that spans the entire play area and absolutely position the cards.

The global positioning container would have all the cards that are currently in game such as the hand, deck, current jokers and consumables. This container would be responsible for keeping track of the position of each card in the game as well as organizing the cards within each container. Unlike relative positioning, the global positioning container would not be able to use flexbox to automatically organize the cards. Instead, it would need to get global positioning data from each container to then calculate where each card should be positioned. The benefit being that card overlapping is now much easier to handle with the detriment of some React limitations.

In React Native, although components exist somewhere in the DOM, containers do not readily have access to their drawn position on the screen. Either the `onLayout` or `measure` methods need to be used to view the coordinates of the containers. They require a render pass to occur to get accurate positioning which needs to be accounted for. This should be okay for most of the game, but every time that these containers appear, there will be a slight delay before the cards can be positioned properly.

Global positioning of the cards also means that gesture handling of the cards needs to be handled globally as well. Cards with relative positioning keep track of their own positions which means that multiple cards can be dragged simultaneously whitout issue. To have the same effect with global positioning, all the card positions would need to be stored in a dictionary and updated accordingly. Because each card needs to use a `sharedValued`, it might not be easy to accomplish. Instead, it probably makes more sense to have only one card be manipulatable at a time like the original game.

If this were Unity or some other game engine, this would be a lot easier to accomplish obviously, but React Native still has some tools to make it work.
