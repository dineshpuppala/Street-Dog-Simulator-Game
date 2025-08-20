import React from 'react';
import { GAME_WIDTH } from '../constants';

const DistantBuilding1: React.FC = () => (
  <div className="inline-block h-40 w-24 bg-gray-700/80 mx-1 relative self-end">
    <div className="absolute top-2 left-2 w-4 h-4 bg-sky-800/50"></div>
    <div className="absolute top-2 right-2 w-4 h-4 bg-sky-800/50"></div>
    <div className="absolute top-8 left-2 w-4 h-10 bg-sky-800/50"></div>
  </div>
);

const DistantBuilding2: React.FC = () => (
  <div className="inline-block h-48 w-32 bg-gray-800/80 mx-1 relative self-end">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900"></div>
    <div className="absolute top-8 left-2 w-4 h-4 bg-sky-800/50"></div>
    <div className="absolute top-8 right-2 w-4 h-4 bg-sky-800/50"></div>
    <div className="absolute top-14 left-2 w-4 h-4 bg-sky-800/50"></div>
    <div className="absolute top-14 right-2 w-4 h-4 bg-sky-800/50"></div>
  </div>
);

const MidBuilding1: React.FC = () => (
  <div className="inline-block h-64 w-40 bg-amber-900/90 border-x-2 border-black/20 mx-2 relative self-end">
    <div className="absolute top-4 left-4 w-8 h-10 bg-yellow-400/50"></div>
    <div className="absolute top-4 right-4 w-8 h-10 bg-yellow-400/50"></div>
    <div className="absolute top-20 left-4 w-8 h-10 bg-yellow-400/50"></div>
    <div className="absolute top-20 right-4 w-8 h-10 bg-yellow-400/50"></div>
  </div>
);

const MidBuilding2: React.FC = () => (
  <div className="inline-block h-56 w-32 bg-orange-800/90 border-x-2 border-black/20 mx-2 relative self-end">
     <div className="absolute top-4 left-4 w-10 h-6 bg-yellow-400/50"></div>
     <div className="absolute top-12 left-4 w-10 h-6 bg-yellow-400/50"></div>
     <div className="absolute top-20 left-4 w-10 h-6 bg-yellow-400/50"></div>
  </div>
);

const Tree: React.FC = () => (
    <div className="inline-block h-20 w-12 relative mx-4 self-end">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-amber-900"></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-800/90 rounded-full"></div>
    </div>
);

const CarShape: React.FC<{color: string}> = ({ color }) => (
    <div className={`inline-block h-8 w-16 ${color} rounded-t-md mx-1 relative`}>
        <div className="absolute -bottom-2 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
        <div className="absolute -bottom-2 right-2 w-4 h-4 bg-gray-800 rounded-full"></div>
    </div>
);


export const DistantCity: React.FC = () => (
    <div className="flex items-end" style={{ width: GAME_WIDTH, height: '100%' }}>
        <div className="flex-1"></div>
        <DistantBuilding1 />
        <DistantBuilding2 />
        <div className="w-16"></div>
        <DistantBuilding1 />
        <DistantBuilding2 />
        <div className="flex-1"></div>
        <DistantBuilding2 />
        <DistantBuilding1 />
    </div>
);

export const MidGround: React.FC = () => (
    <div className="flex items-end" style={{ width: GAME_WIDTH, height: '100%' }}>
        <MidBuilding1 />
        <Tree />
        <MidBuilding2 />
        <div className="flex-1 self-end mb-1"><CarShape color="bg-red-700/80" /></div>
        <MidBuilding1 />
        <Tree />
        <div className="flex-1 self-end mb-1"><CarShape color="bg-blue-700/80" /></div>
        <MidBuilding2 />
    </div>
);