import React, { useState, useEffect } from 'react';

const GameUI = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const cardPairs = [
    { id: 1, term: "Phishing", definition: "Fraudulent emails to steal personal info" },
    { id: 2, term: "Malware", definition: "Malicious software that harms systems" },
    { id: 3, term: "Firewall", definition: "Network security barrier" },
    { id: 4, term: "VPN", definition: "Encrypts internet connection for privacy" },
    { id: 5, term: "2FA", definition: "Two-step verification for accounts" },
    { id: 6, term: "Encryption", definition: "Scrambles data to protect it" },
    { id: 7, term: "Ransomware", definition: "Locks files until ransom is paid" },
    { id: 8, term: "Social Engineering", definition: "Tricks people to reveal secrets" }
  ];

  // Create cards array with both terms and definitions
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const allCards = [];
    cardPairs.forEach(pair => {
      allCards.push({ id: pair.id * 2 - 1, content: pair.term, type: 'term', pairId: pair.id });
      allCards.push({ id: pair.id * 2, content: pair.definition, type: 'definition', pairId: pair.id });
    });
    // Shuffle cards
    setCards(allCards.sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (cardId) => {
    if (flippedCards.length === 2 || flippedCards.includes(cardId) || matchedPairs.includes(cardId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      const card1 = cards.find(card => card.id === newFlippedCards[0]);
      const card2 = cards.find(card => card.id === newFlippedCards[1]);

      if (card1.pairId === card2.pairId) {
        // Match found
        setMatchedPairs([...matchedPairs, ...newFlippedCards]);
        setFlippedCards([]);
        
        if (matchedPairs.length + 2 === cards.length) {
          setGameWon(true);
        }
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameWon(false);
    const allCards = [];
    cardPairs.forEach(pair => {
      allCards.push({ id: pair.id * 2 - 1, content: pair.term, type: 'term', pairId: pair.id });
      allCards.push({ id: pair.id * 2, content: pair.definition, type: 'definition', pairId: pair.id });
    });
    setCards(allCards.sort(() => Math.random() - 0.5));
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const isCardFlipped = (cardId) => {
    return flippedCards.includes(cardId) || matchedPairs.includes(cardId);
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-white border-opacity-20">
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-700 font-medium">
                Moves: {moves}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-gray-200 bg-opacity-80 hover:bg-opacity-100 text-gray-700 rounded-lg transition-all duration-200 font-medium"
                >
                  New Game
                </button>
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-red-200 bg-opacity-80 hover:bg-opacity-100 text-red-700 rounded-lg transition-all duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`relative h-32 cursor-pointer transition-all duration-300 ${
                    matchedPairs.includes(card.id) ? 'opacity-60' : ''
                  }`}
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
                      isCardFlipped(card.id) ? 'transform' : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isCardFlipped(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Card Back */}
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="w-full h-full bg-white bg-opacity-90 backdrop-blur-sm border-2 border-gray-200 border-opacity-60 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-80"></div>
                      </div>
                    </div>

                    {/* Card Front */}
                    <div 
                      className="absolute inset-0 w-full h-full"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className={`w-full h-full rounded-lg flex items-center justify-center p-4 text-center shadow-lg backdrop-blur-sm ${
                        card.type === 'term' 
                          ? 'bg-blue-50 bg-opacity-90 border-2 border-blue-200 border-opacity-60' 
                          : 'bg-green-50 bg-opacity-90 border-2 border-green-200 border-opacity-60'
                      }`}>
                        <p className={`text-sm font-medium ${
                          card.type === 'term' ? 'text-blue-800' : 'text-green-800'
                        }`}>
                          {card.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {gameWon && (
              <div className="text-center">
                <div className="inline-block bg-green-50 bg-opacity-90 backdrop-blur-sm border border-green-200 border-opacity-60 text-green-800 px-6 py-4 rounded-xl shadow-lg">
                  🎉 Congratulations! You matched all pairs in {moves} moves!
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameUI;