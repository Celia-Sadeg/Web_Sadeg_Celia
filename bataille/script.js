// script.js

const suits = ["coeur", "carreau", "trefle", "pique"];
const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi", "As"];

const suitSymbols = {
  'coeur': '♥',
  'carreau': '♦',
  'trefle': '♣',
  'pique': '♠'
};

const cardColor = (suit) => (suit === 'coeur' || suit === 'carreau') ? 'red' : 'black';

const createDeck = () => {
  const deck = [];
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push({ rank, suit });
    });
  });
  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

let deck = shuffleDeck(createDeck());

let scorePlayer1 = 0;
let scorePlayer2 = 0;

const drawCard = () => {
  if (deck.length < 2) {
    document.getElementById('result').textContent = 'Plus de cartes à tirer!';
    return;
  }

  const card1 = deck.pop();
  const card2 = deck.pop();

  displayCard('player1-card', card1);
  displayCard('player2-card', card2);
  updateDeckDisplay();

  const result = determineWinner(card1, card2);
  document.getElementById('result').textContent = result;

  // Mise à jour des scores
  updateScores(result);
};

const displayCard = (elementId, card) => {
  const cardElement = document.getElementById(elementId);
  cardElement.textContent = `${card.rank} ${suitSymbols[card.suit]}`;
  cardElement.className = `card ${cardColor(card.suit)}`;
};

const updateDeckDisplay = () => {
  const deckDisplay = document.getElementById('deck-cards');
  deckDisplay.textContent = ` ${deck.length}`;
};

const updateScores = (result) => {
  if (result === 'Joueur 1 gagne!') {
    scorePlayer1++;
  } else if (result === 'Joueur 2 gagne!') {
    scorePlayer2++;
  }
  document.getElementById('score-player1').textContent = scorePlayer1;
  document.getElementById('score-player2').textContent = scorePlayer2;
};

const determineWinner = (card1, card2) => {
  const rankValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Valet': 11, 'Dame': 12, 'Roi': 13, 'As': 14 };
  const value1 = rankValues[card1.rank];
  const value2 = rankValues[card2.rank];

  if (value1 > value2) return 'Joueur 1 gagne!';
  if (value2 > value1) return 'Joueur 2 gagne!';
  return 'Égalité!';
};
// script.js

const toggleRules = () => {
    const rulesCard = document.getElementById('rules-card');
    if (rulesCard.style.display === 'none' || rulesCard.style.display === '') {
      rulesCard.style.display = 'block';
    } else {
      rulesCard.style.display = 'none';
    }
  };
  
  // Initialiser le jeu (si nécessaire)
  document.getElementById('rules-card').style.display = 'block'; // Affiche les règles au chargement
  
// Afficher le nombre initial de cartes dans le paquet
updateDeckDisplay();

