import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useGameLoop } from '../hooks/useGameLoop';
import Player from './Player';
import Obstacle from './Obstacle';
import { DistantCity, MidGround } from './Background';
import { PlayerState, ObstacleState, ObstacleType } from '../types';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  GROUND_HEIGHT,
  PLAYER_WIDTH,
  PLAYER_HEIGHT,
  PLAYER_INITIAL_X,
  PLAYER_INITIAL_Y,
  GRAVITY,
  JUMP_FORCE,
  INITIAL_GAME_SPEED,
  GAME_SPEED_INCREMENT,
  MAX_GAME_SPEED,
  OBSTACLE_SPAWN_RATE_MIN,
  OBSTACLE_SPAWN_RATE_MAX,
} from '../constants';

interface GameScreenProps {
  onGameOver: (score: number) => void;
}

const BG_LOOP_WIDTH = GAME_WIDTH;
const DISTANT_BG_SPEED_FACTOR = 0.2;
const MID_BG_SPEED_FACTOR = 0.5;


const GameScreen: React.FC<GameScreenProps> = ({ onGameOver }) => {
  const [player, setPlayer] = useState<PlayerState>({
    x: PLAYER_INITIAL_X,
    y: PLAYER_INITIAL_Y,
    vy: 0,
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
  });
  const [obstacles, setObstacles] = useState<ObstacleState[]>([]);
  const [score, setScore] =useState(0);
  const [gameSpeed, setGameSpeed] = useState(INITIAL_GAME_SPEED);
  const [isJumping, setIsJumping] = useState(false);
  const [distantBgX, setDistantBgX] = useState(0);
  const [midBgX, setMidBgX] = useState(0);
  const [roadX, setRoadX] = useState(0);

  const nextObstacleFrame = useRef(Math.floor(Math.random() * (OBSTACLE_SPAWN_RATE_MAX - OBSTACLE_SPAWN_RATE_MIN + 1)) + OBSTACLE_SPAWN_RATE_MIN);
  const frameCount = useRef(0);

  const handleJump = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space' && !isJumping) {
      setIsJumping(true);
      setPlayer(p => ({ ...p, vy: JUMP_FORCE }));
    }
  }, [isJumping]);

  useEffect(() => {
    window.addEventListener('keydown', handleJump);
    return () => window.removeEventListener('keydown', handleJump);
  }, [handleJump]);

  const gameLoopCallback = useCallback(() => {
    frameCount.current++;

    // Update Player
    setPlayer(p => {
      let newVy = p.vy + GRAVITY;
      let newY = p.y + newVy;

      if (newY >= PLAYER_INITIAL_Y) {
        newY = PLAYER_INITIAL_Y;
        newVy = 0;
        setIsJumping(false);
      }
      return { ...p, y: newY, vy: newVy };
    });

    // Update Obstacles
    setObstacles(obs => obs.map(o => ({ ...o, x: o.x - gameSpeed * (o.speedModifier || 1) })).filter(o => o.x + o.width > 0));

    // Spawn Obstacles
    if (frameCount.current > nextObstacleFrame.current) {
        frameCount.current = 0;
        nextObstacleFrame.current = Math.floor(Math.random() * (OBSTACLE_SPAWN_RATE_MAX - OBSTACLE_SPAWN_RATE_MIN + 1)) + OBSTACLE_SPAWN_RATE_MIN;

        const rand = Math.random();
        let type: ObstacleType;
        if (rand < 0.5) { // 50% chance
            type = ObstacleType.Stone;
        } else if (rand < 0.85) { // 35% chance
            type = ObstacleType.Rickshaw;
        } else { // 15% chance
            type = ObstacleType.DogCatcher;
        }
        
        let newObstacle: Omit<ObstacleState, 'id' | 'x'>;

        switch (type) {
            case ObstacleType.Stone:
                newObstacle = { type, width: 25, height: 20, y: PLAYER_INITIAL_Y + PLAYER_HEIGHT - 20 };
                break;
            case ObstacleType.Rickshaw:
                newObstacle = { type, width: 80, height: 60, y: GAME_HEIGHT - GROUND_HEIGHT - 60 };
                break;
            case ObstacleType.DogCatcher:
            default:
                newObstacle = { type, width: 45, height: 70, y: GAME_HEIGHT - GROUND_HEIGHT - 70, speedModifier: 0.9 };
                break;
        }

        setObstacles(obs => [...obs, { ...newObstacle, id: Date.now(), x: GAME_WIDTH }]);
    }
    
    // Collision Detection
    const pBox = { x: player.x, y: player.y, width: player.width, height: player.height };
    for (const ob of obstacles) {
        const oBox = { x: ob.x, y: ob.y, width: ob.width, height: ob.height };
        if (
            pBox.x < oBox.x + oBox.width &&
            pBox.x + pBox.width > oBox.x &&
            pBox.y < oBox.y + oBox.height &&
            pBox.y + pBox.height > oBox.y
        ) {
            onGameOver(Math.floor(score));
            return;
        }
    }
    
    // Update Backgrounds
    setDistantBgX(prevX => {
        let nextX = prevX - gameSpeed * DISTANT_BG_SPEED_FACTOR;
        if (nextX <= -BG_LOOP_WIDTH) {
            nextX += BG_LOOP_WIDTH;
        }
        return nextX;
    });
    setMidBgX(prevX => {
        let nextX = prevX - gameSpeed * MID_BG_SPEED_FACTOR;
        if (nextX <= -BG_LOOP_WIDTH) {
            nextX += BG_LOOP_WIDTH;
        }
        return nextX;
    });
    setRoadX(prevX => (prevX - gameSpeed) % 50);

    // Update Score & Difficulty
    setScore(s => s + 0.1);
    setGameSpeed(s => Math.min(MAX_GAME_SPEED, s + GAME_SPEED_INCREMENT));

  }, [player.x, player.y, obstacles, gameSpeed, score, onGameOver]);

  useGameLoop(gameLoopCallback);

  return (
    <div className="relative overflow-hidden border-4 border-gray-900 rounded-md bg-gradient-to-b from-sky-500 to-cyan-700" style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}>
      <div className="absolute top-4 right-4 text-white text-2xl z-50" style={{textShadow: '2px 2px 4px #000000'}}>
        SCORE: {Math.floor(score)}
      </div>

      {/* Distant Background */}
      <div 
        className="absolute bottom-0 left-0 h-[200px] z-0 flex" 
        style={{ transform: `translateX(${distantBgX}px)`, width: BG_LOOP_WIDTH * 2 }}
      >
        <DistantCity />
        <DistantCity />
      </div>

      {/* Mid-ground Background */}
      <div 
        className="absolute bottom-0 left-0 h-[260px] z-10 flex" 
        style={{ transform: `translateX(${midBgX}px)`, width: BG_LOOP_WIDTH * 2 }}
      >
        <MidGround />
        <MidGround />
      </div>
      
      <Player x={player.x} y={player.y} />
      
      {obstacles.map(ob => (
        <Obstacle key={ob.id} {...ob} />
      ))}
      
      {/* Ground/Road */}
       <div className="absolute bottom-0 left-0 w-full bg-gray-600" style={{ height: GROUND_HEIGHT, zIndex: 20 }}>
            <div 
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1"
                style={{
                    transform: `translateX(${roadX}px)`,
                    backgroundImage: 'linear-gradient(to right, #FBBF24 75%, transparent 25%)',
                    backgroundSize: '50px 4px',
                    backgroundRepeat: 'repeat-x'
                }}
            ></div>
        </div>
      
       <div className="absolute bottom-0 left-0 w-full h-2 bg-green-700" style={{ transform: `translateY(${GROUND_HEIGHT}px)`}}></div>
    </div>
  );
};

export default GameScreen;