import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Radio, Trophy, RotateCcw } from "lucide-react";

import { fireScenarios } from "../../../data/scenarios/fireScenarios";
import { getChapterById } from "../../chapters/services/chapterService";

import GameHUD from "../components/GameHUD";
import SceneView from "../components/SceneView";
import DialogueBox from "../components/DialogueBox";
import ChoiceList from "../components/ChoiceList";
import FeedbackPanel from "../components/FeedbackPanel";

import { useGame } from "../hooks/useGame";
import { useGameTimer } from "../hooks/useGameTimer";

export default function GamePage() {
  const { chapterId, scenarioId } = useParams<{
    chapterId: string;
    scenarioId: string;
  }>();

  const chapter = chapterId ? getChapterById(chapterId) : undefined;

  const selectedScenario = chapter?.scenarios.find(
    (scenario) => scenario.id === scenarioId,
  );

  const allScenes = chapterId === "fire" ? fireScenarios : [];

  const scenarios = allScenes.filter(
    (scene) => scene.scenarioId === scenarioId,
  );

  const firstScenarioId = selectedScenario?.startSceneId ?? "";

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
  }, []);

  const { timeLeft, percentage } = useGameTimer({
    duration: currentScenario?.timeLimitSeconds ?? 0,
    isActive: gameState.status === "playing",
    onTimeUp: handleTimeUp,
  });

  if (!chapter || !selectedScenario) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1118] px-5 text-center text-white">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-[#e8a34a]">
            WARNING / 404
          </p>
          <h1 className="mt-4 text-3xl font-black">Scenario Not Found</h1>
          <p className="mt-3 text-sm text-[#9aa8b5]">
            Tình huống bạn đang tìm kiếm không tồn tại.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex rounded-lg bg-[#e8a34a] px-6 py-3 text-sm font-bold text-[#101820]"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  if (scenarios.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1118] px-5 text-center text-white">
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-[#e8a34a]">
            WARNING / IN DEVELOPMENT
          </p>
          <h1 className="mt-4 text-3xl font-black">Scenario Coming Soon</h1>
          <p className="mt-3 text-sm text-[#9aa8b5]">
            Nội dung tình huống này đang được phát triển.
          </p>
          <Link
            to={`/chapters/${chapterId}`}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#e8a34a]"
          >
            <ArrowLeft size={16} />
            Back to Scenarios
          </Link>
        </div>
      </main>
    );
  }

  if (!currentScenario) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1118] px-5 text-center text-white">
        <div>
          <h1 className="text-3xl font-black">Scene Not Found</h1>
          <p className="mt-3 text-sm text-[#9aa8b5]">
            Không tìm thấy diễn biến bắt đầu của tình huống này.
          </p>
          <Link
            to={`/chapters/${chapterId}`}
            className="mt-7 inline-flex items-center gap-2 text-sm text-[#e8a34a]"
          >
            <ArrowLeft size={16} />
            Back to Scenarios
          </Link>
        </div>
      </main>
    );
  }

  if (gameState.status === "ended") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b1118] px-5 py-8 text-white">
        <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#14202b] shadow-2xl">
          <div className="h-1 bg-[#e8a34a]" />
          <div className="p-7 text-center sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e8a34a]/10">
              <Trophy size={32} className="text-[#e8a34a]" />
            </div>

            <p className="mt-6 text-xs font-black tracking-[0.25em] text-[#e8a34a]">
              MISSION COMPLETE
            </p>
            <h1 className="mt-3 text-3xl font-black">
              {selectedScenario.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#9aa8b5]">
              You have completed this survival scenario. Review your performance
              and try again.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#0b1118] p-5">
                <p className="text-xs text-[#8996a3]">FINAL SAFETY</p>
                <p className="mt-2 text-3xl font-black text-[#58b889]">
                  {gameState.safety}%
                </p>
              </div>
              <div className="rounded-xl bg-[#0b1118] p-5">
                <p className="text-xs text-[#8996a3]">FINAL CALMNESS</p>
                <p className="mt-2 text-3xl font-black text-[#e8a34a]">
                  {gameState.calmness}%
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={restart}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#e8a34a] px-5 py-3 text-sm font-bold text-[#101820] transition hover:bg-amber-300"
              >
                <RotateCcw size={16} />
                Play Again
              </button>
              <Link
                to={`/chapters/${chapterId}`}
                className="flex-1 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
              >
                Back to Scenarios
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080e14] px-3 py-4 text-[#f2f3f4] sm:px-5 sm:py-5 lg:flex lg:flex-col lg:items-center lg:justify-center">
      {/* Game top bar */}
      <header className="mx-auto mb-4 flex w-full max-w-[1400px] items-center justify-between">
        <Link
          to={`/chapters/${chapterId}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8996a3] transition hover:text-[#e8a34a]"
        >
          <ArrowLeft size={16} />
          EXIT GAME
        </Link>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#e8a34a]" />
          <span className="text-[10px] font-black tracking-[0.3em] text-[#c1cbd3]">
            WARNING
          </span>
        </div>

        <span className="text-[10px] font-bold tracking-wider text-[#65727e]">
          SURVIVAL MODE
        </span>
      </header>

      {/* Main game frame */}
      <section className="mx-auto grid w-full max-w-[1400px] overflow-hidden rounded-2xl border border-white/10 bg-[#111b25] shadow-[0_25px_100px_rgba(0,0,0,0.5)] lg:h-[min(790px,calc(100svh-100px))] lg:min-h-[610px] lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left: immersive scene */}
        <div className="relative min-h-[330px] border-b border-white/10 lg:min-h-0 lg:border-b-0 lg:border-r">
          <SceneView
            title={currentScenario.title}
            location={currentScenario.location}
            image={currentScenario.image}
          />
        </div>

        {/* Right: game control panel */}
        <div className="flex min-h-[580px] min-w-0 flex-col lg:min-h-0">
          {/* HUD stays at the top */}
          <div className="shrink-0 border-b border-white/10 bg-[#16232e] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-[#e8a34a]">
                  PLAYER STATUS
                </p>
                <p className="mt-1 text-xs text-[#8996a3]">
                  Monitor your survival condition
                </p>
              </div>
              <span className="rounded border border-[#58b889]/25 bg-[#58b889]/10 px-2 py-1 text-[9px] font-bold tracking-wider text-[#58b889]">
                ACTIVE
              </span>
            </div>

            <GameHUD
              timeLeft={timeLeft}
              timePercentage={percentage}
              safety={gameState.safety}
              calmness={gameState.calmness}
            />
          </div>

          {/* Scrollable game content */}
          <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#8996a3]">
                CURRENT EVENT
              </span>
              <span className="rounded bg-white/5 px-2 py-1 font-mono text-[10px] text-[#8996a3]">
                {currentScenario.id.toUpperCase()}
              </span>
            </div>

            <DialogueBox
              description={currentScenario.description}
              dialogue={currentScenario.dialogue}
            />

            {timeLeft === 0 && gameState.status === "playing" && (
              <div className="mt-4 rounded-lg border border-[#e05252]/30 bg-[#e05252]/10 p-3 text-xs leading-6 text-[#f2b4b4]">
                Time is up. Choose your next action carefully.
              </div>
            )}

            <div className="my-6 border-t border-white/10" />

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
          </div>

          {/* Bottom bar */}
          <div className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#0d161f] px-4 py-3 sm:px-5">
            <span className="text-[9px] font-bold tracking-[0.18em] text-[#65727e]">
              WARNING SYSTEM
            </span>
            <span className="text-[9px] font-semibold tracking-wider text-[#65727e]">
              THINK · ACT · SURVIVE
            </span>
          </div>
        </div>
      </section>

      <p className="mx-auto mt-3 hidden w-full max-w-[1400px] text-right text-[9px] tracking-wider text-[#45515c] lg:block">
        WARNING — EVERY SECOND MATTERS
      </p>
    </main>
  );
}
