
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.NotStarted);
  const [score, setScore] = useState(0);

  const handleStartGame = useCallback(() => {
    setScore(0);
    setGameState(GameState.Playing);
  }, []);

  const handleGameOver = useCallback((finalScore: number) => {
    setScore(finalScore);
    setGameState(GameState.GameOver);
  }, []);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.Playing:
        return <GameScreen onGameOver={handleGameOver} />;
      case GameState.GameOver:
        return <GameOverScreen score={score} onRestart={handleStartGame} />;
      case GameState.NotStarted:
      default:
        return <StartScreen onStart={handleStartGame} />;
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-4">
       <div className="w-full max-w-4xl mx-auto">
        {renderGameState()}
      </div>
    </div>
  );
};

export default App;
