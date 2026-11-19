import type { Chapter } from "../../features/chapters/types/chapter.types";

export const chapters: Chapter[] = [
  {
    id: "fire",
    number: "01",
    title: "Fire & Smoke",
    subtitle: "When Every Second Matters",
    category: "FIRE SAFETY",
    description:
      "Hỏa hoạn có thể xảy ra ở bất cứ đâu — trong nhà, trên đường hay giữa thiên nhiên. Hãy nhận biết dấu hiệu nguy hiểm, đánh giá rủi ro và đưa ra quyết định đúng đắn để bảo vệ bản thân cùng mọi người.",
    coverImage: "/images/chapters/fire.jpeg",
    status: "available",
    difficulty: "medium",
    estimatedMinutes: 10,

    scenarios: [
      {
        id: "building-fire",
        title: "Building Fire",
        description:
          "Đám cháy xảy ra tại khu nhà trọ nhiều tầng. Khói đang lan vào hành lang và bạn phải tìm cách thoát hiểm.",
        coverImage: "/images/scenarios/building-fire.jpg",
        estimatedMinutes: 10,
        startSceneId: "fire-01",
        status: "available",
      },
      {
        id: "kitchen-fire",
        title: "Kitchen Fire",
        description:
          "Một đám cháy bất ngờ bùng phát trong căn bếp. Bạn cần xử lý nhanh trước khi lửa lan rộng.",
        coverImage: "/images/scenarios/kitchen-fire.jpeg",
        estimatedMinutes: 5,
        startSceneId: "kitchen-01",
        status: "coming-soon",
      },
      {
        id: "electrical-fire",
        title: "Electrical Fire",
        description:
          "Một sự cố chập điện gây cháy trong nhà. Bạn cần nhận biết nguy hiểm và tìm cách ứng phó.",
        coverImage: "/images/scenarios/electrical-fire.jpeg",
        estimatedMinutes: 5,
        startSceneId: "electrical-01",
        status: "coming-soon",
      },
      {
        id: "vehicle-fire",
        title: "Vehicle Fire",
        description:
          "Một chiếc xe bất ngờ bốc cháy. Bạn phải quyết định cách giữ an toàn cho bản thân và mọi người.",
        coverImage: "/images/scenarios/vehicle-fire.jpg",
        estimatedMinutes: 5,
        startSceneId: "vehicle-01",
        status: "coming-soon",
      },
      {
        id: "forest-fire",
        title: "Forest Fire",
        description:
          "Đám cháy lan rộng trong khu vực rừng. Bạn cần tìm hướng di chuyển an toàn.",
        coverImage: "/images/scenarios/forest-fire.jpeg",
        estimatedMinutes: 7,
        startSceneId: "forest-01",
        status: "coming-soon",
      },
    ],

    objectives: [
      "Nhận biết những dấu hiệu cảnh báo cháy.",
      "Hiểu nguy cơ của khói và khí độc.",
      "Biết cách đánh giá lối thoát hiểm.",
      "Biết khi nào cần gọi lực lượng cứu hỏa.",
      "Hiểu những việc cần làm sau khi thoát khỏi đám cháy.",
    ],
  },

  {
    id: "flood",
    number: "02",
    title: "Flood & Storm",
    subtitle: "Nature Has No Warning",
    category: "NATURAL DISASTER",
    description:
      "Mưa lớn kéo dài khiến nhiều tuyến đường ngập sâu. Nước chảy xiết, tầm nhìn hạn chế và những nguy hiểm khó nhận biết đang chờ đợi bạn.",
    coverImage: "/images/chapters/flood.jpeg",
    status: "coming-soon",
    difficulty: "hard",
    estimatedMinutes: 12,
    scenarios: [],
    objectives: [
      "Nhận biết nguy hiểm khi di chuyển trong vùng ngập.",
      "Hiểu rủi ro từ dòng nước chảy xiết.",
      "Nhận biết nguy cơ từ hệ thống điện.",
    ],
  },

  {
    id: "traffic",
    number: "03",
    title: "Traffic Accident",
    subtitle: "One Moment Changes Everything",
    category: "ROAD SAFETY",
    description:
      "Một vụ tai nạn xảy ra ngay trước mắt bạn. Người bị nạn cần được hỗ trợ, nhưng hành động thiếu hiểu biết cũng có thể khiến tình hình trở nên nghiêm trọng hơn.",
    coverImage: "/images/chapters/traffic.jpeg",
    status: "coming-soon",
    difficulty: "medium",
    estimatedMinutes: 12,
    scenarios: [],
    objectives: [
      "Đảm bảo an toàn tại hiện trường.",
      "Biết cách gọi hỗ trợ khẩn cấp.",
      "Nhận biết những nguyên tắc sơ cứu cơ bản.",
    ],
  },

  {
    id: "personal",
    number: "04",
    title: "Personal Safety",
    subtitle: "Trust Your Instinct",
    category: "PERSONAL SAFETY",
    description:
      "Những tình huống bất ngờ có thể xảy ra khi bạn ở một mình, trên đường về nhà hoặc tại nơi công cộng. Khả năng nhận biết nguy hiểm và giữ bình tĩnh rất quan trọng.",
    coverImage: "/images/chapters/personal.jpeg",
    status: "coming-soon",
    difficulty: "medium",
    estimatedMinutes: 10,
    scenarios: [],
    objectives: [
      "Nhận biết dấu hiệu nguy hiểm.",
      "Biết cách tìm kiếm sự trợ giúp.",
      "Hiểu cách bảo vệ thông tin cá nhân.",
    ],
  },

  {
    id: "health",
    number: "05",
    title: "Health Emergency",
    subtitle: "Act Before It Is Too Late",
    category: "HEALTH & FIRST AID",
    description:
      "Một người bất ngờ gặp vấn đề sức khỏe nghiêm trọng. Bạn cần nhận biết tình huống, gọi trợ giúp và tránh những hành động sơ cứu sai cách.",
    coverImage: "/images/chapters/health.jpeg",
    status: "coming-soon",
    difficulty: "hard",
    estimatedMinutes: 15,
    scenarios: [],
    objectives: [
      "Nhận biết một số dấu hiệu cấp cứu phổ biến.",
      "Biết cách liên hệ hỗ trợ y tế.",
      "Hiểu những nguyên tắc sơ cứu cơ bản.",
    ],
  },
];
