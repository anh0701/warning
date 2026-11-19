export type ChapterStatus = "available" | "coming-soon";

export type ChapterDifficulty = "easy" | "medium" | "hard";

export interface ChapterScenario {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  estimatedMinutes: number;
  startSceneId: string;
  status: ChapterStatus;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  coverImage?: string;
  status: ChapterStatus;
  difficulty: ChapterDifficulty;
  estimatedMinutes: number;
  scenarios: ChapterScenario[];
  objectives: string[];
}
