import type { GameState, Scenario, ScenarioChoice } from "../types/game.types";

const INITIAL_SAFETY = 70;
const INITIAL_CALMNESS = 70;

function clampScore(value: number): number {
  return Math.max(0, Math.min(100, value));
}

export function createInitialGameState(firstScenarioId: string): GameState {
  return {
    currentScenarioId: firstScenarioId,
    safety: INITIAL_SAFETY,
    calmness: INITIAL_CALMNESS,
    status: "playing",
    selectedChoice: null,
  };
}

// Tìm tình huống theo ID.

export function getScenarioById(
  scenarios: Scenario[],
  scenarioId: string,
): Scenario | undefined {
  return scenarios.find((scenario) => scenario.id === scenarioId);
}

// Xử lý lựa chọn của người chơi.

export function selectChoice(
  state: GameState,
  scenario: Scenario,
  choice: ScenarioChoice,
): GameState {
  // Chỉ cho phép chọn khi game đang ở trạng thái chơi.
  if (state.status !== "playing") {
    return state;
  }

  // Đảm bảo lựa chọn thuộc tình huống hiện tại.
  const validChoice = scenario.choices.find((item) => item.id === choice.id);

  if (!validChoice || scenario.id !== state.currentScenarioId) {
    return state;
  }

  return {
    ...state,
    safety: clampScore(state.safety + (validChoice.effects.safety ?? 0)),
    calmness: clampScore(state.calmness + (validChoice.effects.calmness ?? 0)),
    status: "feedback",
    selectedChoice: validChoice,
  };
}

// Chuyển sang tình huống tiếp theo hoặc kết thúc game.

export function continueGame(state: GameState): GameState {
  if (state.status !== "feedback" || !state.selectedChoice) {
    return state;
  }

  const choice = state.selectedChoice;

  if (choice.isEnding || !choice.nextScenarioId) {
    return {
      ...state,
      status: "ended",
      selectedChoice: null,
    };
  }

  return {
    ...state,
    currentScenarioId: choice.nextScenarioId,
    status: "playing",
    selectedChoice: null,
  };
}

export function restartGame(firstScenarioId: string): GameState {
  return createInitialGameState(firstScenarioId);
}
