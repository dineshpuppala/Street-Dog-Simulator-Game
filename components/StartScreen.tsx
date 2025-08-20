
import React from 'react';
import { PlayerIcon } from './Icons';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center bg-gray-900/50 p-8 rounded-lg border-2 border-yellow-400 backdrop-blur-sm">
      <h1 className="text-4xl md:text-5xl text-yellow-400 mb-4">Street Dog</h1>
      <h2 className="text-2xl md:text-3xl text-amber-200 mb-8">Simulator</h2>
      <div className="my-8 flex justify-center">
        <PlayerIcon className="w-24 h-24 text-stone-300" />
      </div>
      <p className="text-stone-300 mb-8 max-w-md mx-auto">You are a street dog in India. Survive as long as you can! Dodge kids, traffic, and the dreaded dog catcher.</p>
      <p className="text-white mb-8 text-lg">Press SPACE to jump.</p>
      <button
        onClick={onStart}
        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-md text-2xl transition-transform transform hover:scale-105"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;
