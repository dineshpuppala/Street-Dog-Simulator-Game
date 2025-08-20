import React from 'react';
import { ObstacleState, ObstacleType } from '../types';
import { StoneIcon, RickshawIcon, DogCatcherIcon } from './Icons';

const Obstacle: React.FC<ObstacleState> = ({ type, x, y, width, height }) => {
  const renderObstacle = () => {
    switch (type) {
      case ObstacleType.Stone:
        return <StoneIcon className="w-full h-full text-gray-500" />;
      case ObstacleType.Rickshaw:
        return <RickshawIcon className="w-full h-full" />;
      case ObstacleType.DogCatcher:
        return <DogCatcherIcon className="w-full h-full" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="absolute z-30"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${x}px, ${y}px)`,
        transition: 'transform 16ms linear'
      }}
    >
      {renderObstacle()}
    </div>
  );
};

export default React.memo(Obstacle);