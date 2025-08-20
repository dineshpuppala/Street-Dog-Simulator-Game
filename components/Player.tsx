import React from 'react';
import { PlayerIcon } from './Icons';

interface PlayerProps {
  x: number;
  y: number;
}

const Player: React.FC<PlayerProps> = ({ x, y }) => {
  return (
    <div
      className="absolute z-30"
      style={{
        width: `${PLAYER_WIDTH}px`,
        height: `${PLAYER_HEIGHT}px`,
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 16ms linear'
      }}
    >
        <PlayerIcon className="w-full h-full text-stone-300" />
    </div>
  );
};

// Memoize the Player to prevent re-renders when props haven't changed
export default React.memo(Player);

const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 40;