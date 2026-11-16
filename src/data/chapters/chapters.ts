
import type { Chapter } from '../../features/chapters/types/chapter.types'

export const chapters: Chapter[] = [
  {
    id: 'fire',
    number: '01',
    title: 'Fire & Smoke',
    subtitle: 'When Every Second Matters',
    category: 'FIRE SAFETY',
    description:
      'Một đám cháy bất ngờ xảy ra tại khu nhà trọ. Khói bắt đầu lan vào hành lang, những lối thoát quen thuộc có thể không còn an toàn. Bạn cần quan sát tình hình, đánh giá nguy hiểm và đưa ra quyết định phù hợp để bảo vệ bản thân.',
    coverImage: '/images/chapters/fire.jpeg',
    status: 'available',
    difficulty: 'medium',
    estimatedMinutes: 10,
    scenarios: [
      {
        id: 'fire-01',
        title: 'The First Warning',
        description:
          'Bạn phát hiện mùi khét và khói xuất hiện trong khu nhà trọ.',
        estimatedMinutes: 2,
      },
      {
        id: 'fire-02',
        title: 'Smoke in the Hallway',
        description:
          'Khói bắt đầu lan ra hành lang. Bạn cần xác định tình trạng lối thoát.',
        estimatedMinutes: 2,
      },
      {
        id: 'fire-03',
        title: 'The Escape Route',
        description:
          'Lối đi quen thuộc có thể không còn an toàn. Hãy cân nhắc lựa chọn tiếp theo.',
        estimatedMinutes: 2,
      },
      {
        id: 'fire-04',
        title: 'Someone Needs Help',
        description:
          'Bạn nghe thấy tiếng kêu cứu từ một khu vực gần đó.',
        estimatedMinutes: 2,
      },
      {
        id: 'fire-05',
        title: 'Outside the Building',
        description:
          'Bạn đã ra khỏi khu vực nguy hiểm. Những việc cần làm tiếp theo là gì?',
        estimatedMinutes: 2,
      },
    ],
    objectives: [
      'Nhận biết những dấu hiệu cảnh báo cháy.',
      'Hiểu nguy cơ của khói và khí độc.',
      'Biết cách đánh giá lối thoát hiểm.',
      'Biết khi nào cần gọi lực lượng cứu hỏa.',
      'Hiểu những việc cần làm sau khi thoát khỏi đám cháy.',
    ],
  },

  {
    id: 'flood',
    number: '02',
    title: 'Flood & Storm',
    subtitle: 'Nature Has No Warning',
    category: 'NATURAL DISASTER',
    description:
      'Mưa lớn kéo dài khiến nhiều tuyến đường ngập sâu. Nước chảy xiết, tầm nhìn hạn chế và những nguy hiểm khó nhận biết đang chờ đợi bạn.',
    coverImage: '/images/chapters/flood.jpeg',
    status: 'coming-soon',
    difficulty: 'hard',
    estimatedMinutes: 12,
    scenarios: [],
    objectives: [
      'Nhận biết nguy hiểm khi di chuyển trong vùng ngập.',
      'Hiểu rủi ro từ dòng nước chảy xiết.',
      'Nhận biết nguy cơ từ hệ thống điện.',
    ],
  },

  {
    id: 'traffic',
    number: '03',
    title: 'Traffic Accident',
    subtitle: 'One Moment Changes Everything',
    category: 'ROAD SAFETY',
    description:
      'Một vụ tai nạn xảy ra ngay trước mắt bạn. Người bị nạn cần được hỗ trợ, nhưng hành động thiếu hiểu biết cũng có thể khiến tình hình trở nên nghiêm trọng hơn.',
    coverImage: '/images/chapters/traffic.jpeg',
    status: 'coming-soon',
    difficulty: 'medium',
    estimatedMinutes: 12,
    scenarios: [],
    objectives: [
      'Đảm bảo an toàn tại hiện trường.',
      'Biết cách gọi hỗ trợ khẩn cấp.',
      'Nhận biết những nguyên tắc sơ cứu cơ bản.',
    ],
  },

  {
    id: 'personal',
    number: '04',
    title: 'Personal Safety',
    subtitle: 'Trust Your Instinct',
    category: 'PERSONAL SAFETY',
    description:
      'Những tình huống bất ngờ có thể xảy ra khi bạn ở một mình, trên đường về nhà hoặc tại nơi công cộng. Khả năng nhận biết nguy hiểm và giữ bình tĩnh rất quan trọng.',
    coverImage: '/images/chapters/personal.jpeg',
    status: 'coming-soon',
    difficulty: 'medium',
    estimatedMinutes: 10,
    scenarios: [],
    objectives: [
      'Nhận biết dấu hiệu nguy hiểm.',
      'Biết cách tìm kiếm sự trợ giúp.',
      'Hiểu cách bảo vệ thông tin cá nhân.',
    ],
  },

  {
    id: 'health',
    number: '05',
    title: 'Health Emergency',
    subtitle: 'Act Before It Is Too Late',
    category: 'HEALTH & FIRST AID',
    description:
      'Một người bất ngờ gặp vấn đề sức khỏe nghiêm trọng. Bạn cần nhận biết tình huống, gọi trợ giúp và tránh những hành động sơ cứu sai cách.',
    coverImage: '/images/chapters/health.jpeg',
    status: 'coming-soon',
    difficulty: 'hard',
    estimatedMinutes: 15,
    scenarios: [],
    objectives: [
      'Nhận biết một số dấu hiệu cấp cứu phổ biến.',
      'Biết cách liên hệ hỗ trợ y tế.',
      'Hiểu những nguyên tắc sơ cứu cơ bản.',
    ],
  },
]
