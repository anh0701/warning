import type { Scenario } from "../../features/game/types/game.types";

export const fireScenarios: Scenario[] = [
  {
    id: "fire-01",
    chapterId: "fire",
    title: "The First Warning",
    location: "Your Room · 2nd Floor",
    image: "/images/scenarios/fire/fire-01.png",
    description: "Something is wrong...",
    dialogue:
      "You are in your room when you suddenly smell something burning. A few seconds later, you notice smoke coming from the hallway. What will you do?",
    timeLimitSeconds: 30,
    choices: [
      {
        id: "open-door",
        text: "Open the door and immediately run into the hallway.",
        effects: {
          safety: -20,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "A Dangerous Decision",
          message: "You open the door without checking the situation outside.",
          explanation:
            "The hallway may already contain smoke or fire. Opening the door and rushing out without assessing the situation can expose you to danger.",
        },
        nextScenarioId: "fire-02",
      },
      {
        id: "stay-alert",
        text: "Keep the door closed and assess the situation.",
        effects: {
          safety: 15,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "A Careful Decision",
          message: "You avoid rushing into an unknown situation.",
          explanation:
            "Staying away from a potentially smoke-filled hallway is a safer first response. If you see smoke or suspect a fire, contact emergency services and prepare to follow their instructions.",
        },
        nextScenarioId: "fire-02",
      },
    ],
  },
  {
    id: "fire-02",
    chapterId: "fire",
    title: "Smoke in the Hallway",
    location: "Second Floor · Hallway",
    image: "/images/scenarios/fire/fire-02.png",
    description: "The situation is getting worse.",
    dialogue:
      "Smoke is spreading through the hallway. You cannot clearly see what is happening beyond the door. You need to decide whether there is a safe way out.",
    timeLimitSeconds: 25,
    choices: [
      {
        id: "use-elevator",
        text: "Take the elevator to get downstairs quickly.",
        effects: {
          safety: -25,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "Never Use the Elevator",
          message: "You choose the elevator during a fire emergency.",
          explanation:
            "Elevators may stop working or open onto a floor affected by fire or smoke. Do not use elevators during a fire. Use a safe evacuation route instead.",
        },
        nextScenarioId: "fire-04",
      },
      {
        id: "check-stairs",
        text: "Check whether the stairway is clear and safe to use.",
        effects: {
          safety: 15,
          calmness: 5,
        },
        feedback: {
          type: "success",
          title: "Assess Your Escape Route",
          message:
            "You look for a safe route instead of choosing the quickest-looking option.",
          explanation:
            "Use the stairs only if the route is confirmed safe and free of smoke and fire. If smoke blocks the route, do not enter it. Retreat to a safer enclosed space and contact emergency services.",
        },
        nextScenarioId: "fire-03",
      },
    ],
  },
  {
    id: "fire-03",
    chapterId: "fire",
    title: "The Escape Route",
    location: "Stairwell · Building",
    image: "/images/scenarios/fire/fire-03.png",
    description: "You have found a possible way out.",
    dialogue:
      "You find that the stairway is clear of visible smoke and fire. Other residents are beginning to evacuate. What should you do?",
    timeLimitSeconds: 25,
    choices: [
      {
        id: "use-stairs",
        text: "Evacuate using the stairs and move away from the building.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "You Chose the Safer Route",
          message: "You evacuate through the clear stairway and head outside.",
          explanation:
            "When the route is safe, evacuate using the stairs. Follow emergency instructions, avoid delaying to collect belongings, and move away from the building.",
        },
        nextScenarioId: "fire-05",
      },
      {
        id: "return-room",
        text: "Go back to your room to collect your belongings.",
        effects: {
          safety: -20,
          calmness: -5,
        },
        feedback: {
          type: "danger",
          title: "Do Not Delay Your Evacuation",
          message: "You waste valuable time returning for personal belongings.",
          explanation:
            "Belongings can be replaced. During a fire, prioritize getting to safety. Never return to a potentially dangerous area for personal items.",
        },
        nextScenarioId: "fire-05",
      },
    ],
  },
  {
    id: "fire-04",
    chapterId: "fire",
    title: "Someone Needs Help",
    location: "Your Room · 2nd Floor",
    image: "/images/scenarios/fire/fire-01.png",
    description: "The escape route is blocked.",
    dialogue:
      "The hallway and stairway are filled with smoke. You cannot safely leave through the door. You hear someone calling for help nearby. What will you do?",
    timeLimitSeconds: 30,
    choices: [
      {
        id: "cross-smoke",
        text: "Try to cross the smoke-filled hallway to find the person.",
        effects: {
          safety: -25,
          calmness: -15,
        },
        feedback: {
          type: "danger",
          title: "Do Not Enter a Smoke-Filled Route",
          message:
            "You put yourself in danger by attempting to cross the smoke.",
          explanation:
            "Smoke can quickly make escape difficult and can be toxic. Do not enter a route filled with smoke. Tell emergency responders that someone may need help and provide their last known location.",
        },
        nextScenarioId: "fire-05",
      },
      {
        id: "call-for-help",
        text: "Stay in a safer room, close the door, and call 114.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "Protect Yourself and Call for Help",
          message:
            "You stay away from the smoke and contact emergency services.",
          explanation:
            "If escape routes are blocked, close the door, block gaps where smoke may enter if possible, and call 114 in Vietnam. Give your exact location and report anyone who may be trapped. Follow the dispatcher’s instructions.",
        },
        nextScenarioId: "fire-05",
      },
    ],
  },
  {
    id: "fire-05",
    chapterId: "fire",
    title: "Outside the Building",
    location: "Outside · Safe Area",
    image: "/images/scenarios/fire/fire-02.png",
    description: "You have reached the final stage.",
    dialogue:
      "You are now outside the building. Emergency responders are arriving. Some residents are gathering near the entrance. What should you do next?",
    timeLimitSeconds: 20,
    choices: [
      {
        id: "stay-safe",
        text: "Stay away from the building and report important information to responders.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "A Responsible Decision",
          message:
            "You remain in a safe area and help responders with useful information.",
          explanation:
            "Stay clear of the building and emergency access routes. Tell responders if anyone may still be inside. Never re-enter until authorities confirm it is safe.",
        },
        isEnding: true,
      },
      {
        id: "go-back",
        text: "Go back inside to check whether everyone has escaped.",
        effects: {
          safety: -30,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "Do Not Re-enter the Building",
          message: "You risk your safety by returning to a dangerous area.",
          explanation:
            "Rescue operations should be handled by trained emergency responders. Tell them what you know about anyone who may still be inside, and do not re-enter the building.",
        },
        isEnding: true,
      },
    ],
  },
];
