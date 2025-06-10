import React, { useState, useEffect } from 'react';

const RansomwareGameUI = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showRansomwareScreen, setShowRansomwareScreen] = useState(true);

  const questions = [
    {
      id: 1,
      question: "What type of malware is used in this attack?",
      options: ["Virus", "Ransomware", "Trojan", "Spyware"],
      correctAnswer: "Ransomware",
      type: "multiple"
    },
    {
      id: 2,
      question: "Paying ransom to hacker will guarantee that the file will be decrypted?",
      options: ["Yes", "No"],
      correctAnswer: "No",
      type: "multiple"
    },
    {
      id: 3,
      question: "Hackers will mostly ask ransom in which currency?",
      options: ["US Dollar", "Crypto currency", "Euro", "Gold"],
      correctAnswer: "Crypto currency",
      type: "multiple"
    },
    {
      id: 4,
      question: "How to be safe from ransom attack?",
      options: ["Regular updates", "Creating backup", "Visiting malicious links", "Downloading software from unsecured links"],
      correctAnswer: "Creating backup",
      type: "multiple",
      note: "Multiple safety measures exist, but backup is the most crucial protection"
    },
    {
      id: 5,
      question: "UmFuc29tZXdhcmUgQXR0YWNr has been encrypted in base64 hash. What is the message?",
      options: ["Malware Attack", "Ransomware Attack", "Virus Attack", "Phishing Attack"],
      correctAnswer: "Ransomware Attack",
      type: "multiple"
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
        setShowResult(false);
      } else {
        setGameCompleted(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
    setGameCompleted(false);
    setShowRansomwareScreen(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const proceedToQuestions = () => {
    setShowRansomwareScreen(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-white border-opacity-20">
            
            {showRansomwareScreen && (
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-red-600 text-white p-6 rounded-lg mb-6">
                    <div className="text-2xl font-bold mb-4">⚠️ DEVICE COMPROMISED ⚠️</div>
                    <div className="text-lg mb-4">Your files have been encrypted!</div>
                  </div>
                  
                  <div className="bg-gray-900 text-red-400 p-6 rounded-lg text-left font-mono text-sm mb-6">
                    <div className="mb-4">
                      <div className="text-red-500 font-bold mb-2">🔒 ALL YOUR FILES ARE ENCRYPTED 🔒</div>
                      <p className="mb-2">Pay 2 BTC (crypto currency) as a ransom to the following wallet within 72 hours or lose your data forever.</p>
                      <p className="mb-2">Bitcoin Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                      <p className="mb-2">Contact us: decrypt@fakeemail.com</p>
{/*                       <div className="text-yellow-400 mt-4">
                        ⏰ Time remaining: 71:43:22
                      </div> */}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Educational Note:</strong> This is a simulation of a ransomware attack. 
                      Never pay ransoms in real attacks. Instead, restore from backups and report to authorities.
                    </p>
                  </div>

                  <button
                    onClick={proceedToQuestions}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium text-lg"
                  >
                    Continue to Security Assessment
                  </button>
                </div>
              </div>
            )}

            {!showRansomwareScreen && !gameCompleted && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-gray-700 font-medium">
                    Question {currentQuestion + 1} of {questions.length} | Score: {score}/{questions.length}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={resetGame}
                      className="px-4 py-2 bg-gray-200 bg-opacity-80 hover:bg-opacity-100 text-gray-700 rounded-lg transition-all duration-200 font-medium"
                    >
                      Restart
                    </button>
                    <button
                      onClick={handleClose}
                      className="px-4 py-2 bg-red-200 bg-opacity-80 hover:bg-opacity-100 text-red-700 rounded-lg transition-all duration-200 font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 border-opacity-60">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      {questions[currentQuestion].question}
                    </h3>

                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(option)}
                          disabled={showResult}
                          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                            selectedAnswer === option
                              ? showResult
                                ? option === questions[currentQuestion].correctAnswer
                                  ? 'bg-green-100 border-green-500 text-green-800'
                                  : 'bg-red-100 border-red-500 text-red-800'
                                : 'bg-blue-100 border-blue-500 text-blue-800'
                              : showResult && option === questions[currentQuestion].correctAnswer
                              ? 'bg-green-50 border-green-300 text-green-700'
                              : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                          } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer hover:border-gray-400'}`}
                        >
                          <div className="flex items-center">
                            <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center text-xs">
                              {String.fromCharCode(65 + index)}
                            </span>
                            {option}
                          </div>
                        </button>
                      ))}
                    </div>

                    {questions[currentQuestion].note && (
                      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>Note:</strong> {questions[currentQuestion].note}
                        </p>
                      </div>
                    )}

                    {!showResult && (
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer}
                        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200 font-medium"
                      >
                        Submit Answer
                      </button>
                    )}

                    {showResult && (
                      <div className="mt-6 p-4 rounded-lg border-2">
                        {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                          <div className="text-green-700 border-green-300 bg-green-50">
                            <div className="font-semibold mb-2">✅ Correct!</div>
                            <p>Well done! You identified the correct answer.</p>
                          </div>
                        ) : (
                          <div className="text-red-700 border-red-300 bg-red-50">
                            <div className="font-semibold mb-2">❌ Incorrect</div>
                            <p>The correct answer is: <strong>{questions[currentQuestion].correctAnswer}</strong></p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {gameCompleted && (
              <div className="p-8 text-center">
                <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 border-opacity-60">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">🎉 Assessment Complete!</h2>
                  
                  <div className="mb-8">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
                      {score}/{questions.length}
                    </div>
                    <div className="text-gray-600 text-lg">
                      Score: {Math.round((score / questions.length) * 100)}%
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-6 text-left">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Ransomware Protection Tips:</h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>• <strong>Regular Backups:</strong> Keep offline backups of important data</li>
                      <li>• <strong>Software Updates:</strong> Keep OS and software updated</li>
                      <li>• <strong>Email Caution:</strong> Don't click suspicious links or attachments</li>
                      <li>• <strong>Network Security:</strong> Use firewalls and antivirus software</li>
                      <li>• <strong>Never Pay:</strong> Paying ransom doesn't guarantee file recovery</li>
                    </ul>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={resetGame}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium"
                    >
                      Take Assessment Again
                    </button>
                    <button
                      onClick={handleClose}
                      className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-200 font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RansomwareGameUI;