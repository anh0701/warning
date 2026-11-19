import { useCallback, useEffect, useMemo, useState } from "react";

import type { GameState, Scenario, ScenarioChoice } from "../types/game.types";

import {
  continueGame,
  createInitialGameState,
  getScenarioById,
  restartGame,
  selectChoice,
} from "../services/gameEngine";

interface UseGameOptions {
  scenarios: Scenario[];
  firstScenarioId: string;
}

export function useGame({ scenarios, firstScenarioId }: UseGameOptions) {
  const [gameState, setGameState] = useState<GameState>(() =>
    createInitialGameState(firstScenarioId),
  );

  // Khởi tạo lại game khi người chơi chuyển sang tình huống khác.
  useEffect(() => {
    setGameState(createInitialGameState(firstScenarioId));
  }, [firstScenarioId]);

  // Lấy diễn biến hiện tại.
  const currentScenario = useMemo(
    () => getScenarioById(scenarios, gameState.currentScenarioId),
    [scenarios, gameState.currentScenarioId],
  );

  // Người chơi chọn một hành động.
  const chooseOption = useCallback(
    (choice: ScenarioChoice) => {
      if (!currentScenario) return;

      setGameState((previousState) =>
        selectChoice(previousState, currentScenario, choice),
      );
    },
    [currentScenario],
  );

  // Chuyển sang diễn biến tiếp theo.
  const continueScenario = useCallback(() => {
    setGameState((previousState) => continueGame(previousState));
  }, []);

  // Chơi lại từ đầu.
  const restart = useCallback(() => {
    setGameState(restartGame(firstScenarioId));
  }, [firstScenarioId]);

  return {
    gameState,
    currentScenario,
    chooseOption,
    continueScenario,
    restart,
  };
}
