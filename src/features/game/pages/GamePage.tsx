import { useCallback } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";

import { fireScenarios } from "../../../data/scenarios/fireScenarios";

import GameHUD from "../components/GameHUD";
import SceneView from "../components/SceneView";
import DialogueBox from "../components/DialogueBox";
import ChoiceList from "../components/ChoiceList";
import FeedbackPanel from "../components/FeedbackPanel";

import { useGame } from "../hooks/useGame";
import { useGameTimer } from "../hooks/useGameTimer";

export default function GamePage() {
  const { chapterId } = useParams();
  const [searchParams] = useSearchParams();

  // Hiện tại mới triển khai chapter Fire.
  const scenarios = chapterId === "fire" ? fireScenarios : [];

  const firstScenarioId = searchParams.get("scenario") || "fire-01";

  const {
    gameState,
    currentScenario,
    chooseOption,
    continueScenario,
    restart,
  } = useGame({
    scenarios,
    firstScenarioId,
  });

  const handleTimeUp = useCallback(() => {
    // Hết giờ chỉ dừng đồng hồ.
    // Người chơi vẫn có thể chọn hành động.
  }, []);

  const { timeLeft, percentage } = useGameTimer({
    duration: currentScenario?.timeLimitSeconds ?? 0,
    isActive: gameState.status === "playing",
    onTimeUp: handleTimeUp,
  });

  // Kiểm tra chapter không tồn tại hoặc chưa được triển khai.
  if (!currentScenario && scenarios.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="mb-3 text-2xl font-bold text-[#f2f3f4]">
          Chapter Not Available
        </h1>

        <p className="mb-6 text-sm text-[#9aa8b5]">
          This chapter is not available yet.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-[#e8a34a] px-5 py-3 text-sm font-bold text-[#101820]"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Kiểm tra scenario ID không hợp lệ.
  if (!currentScenario) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="mb-3 text-2xl font-bold text-[#f2f3f4]">
          Scenario Not Found
        </h1>

        <Link
          to="/chapters/fire"
          className="text-sm text-[#e8a34a] hover:underline"
        >
          Back to Chapter
        </Link>
      </div>
    );
  }

  // Màn hình kết thúc chapter.
  if (gameState.status === "ended") {
    return (
      <main className="mx-auto flex min-h-[75vh] max-w-3xl items-center justify-center px-5 py-12">
        <div className="w-full rounded-2xl border border-white/10 bg-[#1b2835] p-7 text-center sm:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8a34a]/10">
            <Trophy size={32} className="text-[#e8a34a]" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e8a34a]">
            Chapter Completed
          </p>

          <h1 className="mb-3 text-3xl font-bold text-[#f2f3f4]">
            The Fire Challenge
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-sm leading-7 text-[#9aa8b5]">
            You have completed this survival scenario. Review your performance
            and try again to explore different decisions.
          </p>

          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#101820] p-5">
              <p className="mb-2 text-xs text-[#9aa8b5]">Final Safety</p>
              <p className="text-3xl font-bold text-[#58b889]">
                {gameState.safety}%
              </p>
            </div>

            <div className="rounded-xl bg-[#101820] p-5">
              <p className="mb-2 text-xs text-[#9aa8b5]">Final Calmness</p>
              <p className="text-3xl font-bold text-[#e8a34a]">
                {gameState.calmness}%
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={restart}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#e8a34a] px-6 py-3 text-sm font-bold text-[#101820] transition hover:bg-[#d38f35]"
            >
              <RotateCcw size={17} />
              Play Again
            </button>

            <Link
              to="/chapters/fire"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-[#f2f3f4] transition hover:bg-white/5"
            >
              Back to Chapter
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Back navigation */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/chapters/fire"
          className="flex items-center gap-2 text-sm text-[#9aa8b5] transition hover:text-[#e8a34a]"
        >
          <ArrowLeft size={17} />
          Exit Scenario
        </Link>

        <span className="text-xs font-semibold tracking-widest text-[#e8a34a]">
          WARNING / FIRE
        </span>
      </div>

      {/* Game heading */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e8a34a]">
          Everyday Life Survival
        </p>

        <h1 className="text-2xl font-bold text-[#f2f3f4] sm:text-3xl">
          Fire Emergency
        </h1>
      </div>

      {/* HUD */}
      <div className="mb-6">
        <GameHUD
          timeLeft={timeLeft}
          timePercentage={percentage}
          safety={gameState.safety}
          calmness={gameState.calmness}
        />
      </div>

      {/* Scene */}
      <div className="mb-6">
        <SceneView
          title={currentScenario.title}
          location={currentScenario.location}
          image={currentScenario.image}
        />
      </div>

      {/* Dialogue */}
      <div className="mb-6">
        <DialogueBox
          description={currentScenario.description}
          dialogue={currentScenario.dialogue}
        />
      </div>

      {/* Time warning */}
      {timeLeft === 0 && gameState.status === "playing" && (
        <div className="mb-6 rounded-lg border border-[#e05252]/30 bg-[#e05252]/10 p-4 text-sm text-[#f2f3f4]">
          Time is up. Take a moment to choose your next action carefully.
        </div>
      )}

      {/* Choices or feedback */}
      {gameState.status === "playing" ? (
        <ChoiceList
          choices={currentScenario.choices}
          selectedChoice={gameState.selectedChoice}
          onChoose={chooseOption}
          disabled={false}
        />
      ) : gameState.selectedChoice ? (
        <FeedbackPanel
          feedback={gameState.selectedChoice.feedback}
          onContinue={continueScenario}
        />
      ) : null}

      {/* Scenario progress */}
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="text-xs text-[#71808e]">
          CURRENT SCENARIO: {currentScenario.id.toUpperCase()}
        </p>
      </div>
    </main>
  );
}
