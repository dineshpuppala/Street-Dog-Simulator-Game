
export enum GameState {
  NotStarted,
  Playing,
  GameOver,
}

export enum ObstacleType {
  Stone,
  Rickshaw,
  DogCatcher,
}

export interface Position {
  x: number;
  y: number;
}

export interface PlayerState extends Position {
  vy: number; // vertical velocity
  width: number;
  height: number;
}

export interface ObstacleState extends Position {
  id: number;
  type: ObstacleType;
  width: number;
  height: number;
  speedModifier?: number;
}