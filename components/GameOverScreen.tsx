
import React from 'react';

interface GameOverScreenProps {
  score: number;
  onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score, onRestart }) => {
  return (
    <div className="text-center bg-gray-900/50 p-8 rounded-lg border-2 border-red-500 backdrop-blur-sm">
      <h1 className="text-5xl text-red-500 mb-4">Game Over</h1>
      <p className="text-2xl text-white mb-2">Your Score:</p>
      <p className="text-6xl text-yellow-400 mb-8">{score}</p>
      <button
        onClick={onRestart}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md text-2xl transition-transform transform hover:scale-105"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOverScreen;
