export type FeedbackType = "success" | "warning" | "danger";

export interface GameEffects {
  safety?: number;
  calmness?: number;
}

export interface ScenarioFeedback {
  type: FeedbackType;
  title: string;
  message: string;
  explanation: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  effects: GameEffects;
  feedback: ScenarioFeedback;
  nextScenarioId?: string;
  isEnding?: boolean;
}

export interface Scenario {
  id: string;
  chapterId: string;
  title: string;
  location: string;
  description: string;
  dialogue: string;
  image?: string;
  timeLimitSeconds: number;
  choices: ScenarioChoice[];
}

export type GameStatus = "playing" | "feedback" | "ended";

export interface GameState {
  currentScenarioId: string;
  safety: number;
  calmness: number;
  status: GameStatus;
  selectedChoice: ScenarioChoice | null;
}
