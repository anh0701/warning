# Warning

<!-- 1. Presentation Layer: Pages , Components , Layouts
Hiển thị giao diện và nhận tương tác.

2. Application Layer: Hooks , Use Cases , Game Controller
Điều phối các hành động của người chơi.

3. Domain Layer: Entities , Types , Game Rules
Chứa quy tắc gameplay, trạng thái, tính điểm và xử lý lựa chọn.

4. Infrastructure Layer: Data , Storage , Asset Management
Đọc dữ liệu tình huống, lưu tiến trình và quản lý tài nguyên. 
-->

<!-- 
warning/
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── chapters/
│   │   └── scenarios/
│   └── sounds/
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers/
│   │
│   ├── features/
│   │   │
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── ContinueCard.tsx
│   │   │   │   └── FeaturedChapters.tsx
│   │   │   └── pages/
│   │   │       └── HomePage.tsx
│   │   │
│   │   ├── chapters/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   └── ChapterPage.tsx
│   │   │   ├── services/
│   │   │   └── types/
│   │   │
│   │   ├── game/
│   │   │   ├── components/
│   │   │   │   ├── GameHUD.tsx
│   │   │   │   ├── SceneView.tsx
│   │   │   │   ├── DialogueBox.tsx
│   │   │   │   ├── ChoiceList.tsx
│   │   │   │   └── FeedbackPanel.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useGame.ts
│   │   │   │   └── useGameTimer.ts
│   │   │   ├── services/
│   │   │   │   └── gameEngine.ts
│   │   │   ├── domain/
│   │   │   │   ├── gameRules.ts
│   │   │   │   └── gameState.ts
│   │   │   ├── pages/
│   │   │   │   └── GamePage.tsx
│   │   │   └── types/
│   │   │       └── game.types.ts
│   │   │
│   │   ├── results/
│   │   └── knowledge/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   │
│   ├── data/
│   │   ├── chapters/
│   │   └── scenarios/
│   │
│   ├── infrastructure/
│   │   ├── storage/
│   │   │   └── localStorage.ts
│   │   └── repositories/
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── main.tsx
│
├── package.json
└── vite.config.ts 
-->