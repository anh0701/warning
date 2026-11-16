import type { Scenario } from "../../features/game/types/game.types";

export const fireScenarios: Scenario[] = [
  {
    id: "fire-01",
    chapterId: "fire",
    title: "Dấu hiệu bất thường",
    location: "Phòng ngủ · Tầng 2",
    image: "/images/scenarios/fire/fire-01.png",
    description: "Có điều gì đó không ổn...",
    dialogue:
      "Bạn đang ở trong phòng thì bất chợt ngửi thấy mùi khét. Vài giây sau, bạn nhận thấy khói đang len vào từ phía hành lang. Bạn sẽ làm gì?",
    timeLimitSeconds: 30,
    choices: [
      {
        id: "open-door",
        text: "Mở cửa và lập tức chạy ra hành lang.",
        effects: {
          safety: -20,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "Một quyết định nguy hiểm",
          message: "Bạn mở cửa mà chưa kiểm tra tình hình bên ngoài.",
          explanation:
            "Hành lang có thể đã bị khói hoặc lửa bao phủ. Mở cửa và vội vàng chạy ra ngoài khi chưa đánh giá tình hình có thể khiến bạn rơi vào nguy hiểm.",
        },
        nextScenarioId: "fire-02",
      },
      {
        id: "stay-alert",
        text: "Giữ cửa đóng và bình tĩnh đánh giá tình hình.",
        effects: {
          safety: 15,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "Một quyết định thận trọng",
          message:
            "Bạn không vội lao vào một khu vực chưa xác định mức độ an toàn.",
          explanation:
            "Tránh tiếp xúc với hành lang có khả năng chứa nhiều khói là lựa chọn thận trọng hơn. Nếu nghi ngờ có cháy, hãy liên hệ lực lượng cứu hỏa và làm theo hướng dẫn của họ.",
        },
        nextScenarioId: "fire-02",
      },
    ],
  },
  {
    id: "fire-02",
    chapterId: "fire",
    title: "Khói bao phủ hành lang",
    location: "Hành lang · Tầng 2",
    image: "/images/scenarios/fire/fire-02.png",
    description: "Tình hình đang trở nên nghiêm trọng hơn.",
    dialogue:
      "Khói đang lan rộng khắp hành lang. Bạn không thể nhìn rõ những gì đang diễn ra ở phía bên kia cánh cửa. Bạn cần xác định liệu có lối thoát nào an toàn hay không.",
    timeLimitSeconds: 25,
    choices: [
      {
        id: "use-elevator",
        text: "Sử dụng thang máy để xuống tầng dưới thật nhanh.",
        effects: {
          safety: -25,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "Không sử dụng thang máy khi có cháy",
          message: "Bạn lựa chọn thang máy trong tình huống hỏa hoạn.",
          explanation:
            "Thang máy có thể ngừng hoạt động hoặc mở cửa tại tầng đang có cháy, khói. Khi xảy ra hỏa hoạn, tuyệt đối không sử dụng thang máy. Hãy tìm lối thoát hiểm an toàn thay thế.",
        },
        nextScenarioId: "fire-04",
      },
      {
        id: "check-stairs",
        text: "Kiểm tra xem cầu thang bộ có khói hoặc lửa không trước khi di chuyển.",
        effects: {
          safety: 15,
          calmness: 5,
        },
        feedback: {
          type: "success",
          title: "Đánh giá lối thoát hiểm",
          message:
            "Bạn kiểm tra mức độ an toàn của lối thoát thay vì chỉ lựa chọn con đường có vẻ nhanh nhất.",
          explanation:
            "Chỉ sử dụng cầu thang bộ khi xác định lối đi an toàn, không bị khói và lửa bao phủ. Nếu khói đã chặn lối thoát, đừng cố đi vào. Hãy quay lại khu vực kín an toàn hơn và liên hệ lực lượng cứu hộ.",
        },
        nextScenarioId: "fire-03",
      },
    ],
  },
  {
    id: "fire-03",
    chapterId: "fire",
    title: "Lối thoát hiểm",
    location: "Cầu thang bộ · Tòa nhà",
    image: "/images/scenarios/fire/fire-03.png",
    description: "Bạn đã tìm thấy một lối thoát có vẻ an toàn.",
    dialogue:
      "Bạn nhận thấy cầu thang bộ hiện chưa có dấu hiệu bị khói hoặc lửa bao phủ. Một số cư dân khác cũng đang bắt đầu sơ tán. Bạn sẽ làm gì tiếp theo?",
    timeLimitSeconds: 25,
    choices: [
      {
        id: "use-stairs",
        text: "Di chuyển xuống bằng cầu thang bộ và nhanh chóng rời xa tòa nhà.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "Bạn đã chọn lối thoát an toàn hơn",
          message:
            "Bạn sơ tán qua cầu thang bộ và di chuyển ra khu vực bên ngoài.",
          explanation:
            "Khi lối thoát được xác định là an toàn, hãy sử dụng cầu thang bộ để sơ tán. Tuân theo hướng dẫn của lực lượng chức năng, không mất thời gian thu gom đồ đạc và nhanh chóng di chuyển ra xa tòa nhà.",
        },
        nextScenarioId: "fire-05",
      },
      {
        id: "return-room",
        text: "Quay lại phòng để lấy những đồ dùng cá nhân quan trọng.",
        effects: {
          safety: -20,
          calmness: -5,
        },
        feedback: {
          type: "danger",
          title: "Đừng trì hoãn việc sơ tán",
          message: "Bạn đã lãng phí thời gian quý giá để quay lại lấy đồ.",
          explanation:
            "Tài sản có thể thay thế, nhưng tính mạng thì không. Khi xảy ra hỏa hoạn, hãy ưu tiên thoát khỏi khu vực nguy hiểm. Tuyệt đối không quay lại lấy đồ dùng cá nhân.",
        },
        nextScenarioId: "fire-05",
      },
    ],
  },
  {
    id: "fire-04",
    chapterId: "fire",
    title: "Có người đang cần giúp đỡ",
    location: "Phòng ngủ · Tầng 2",
    image: "/images/scenarios/fire/fire-01.png",
    description: "Lối thoát của bạn đã bị khói chặn.",
    dialogue:
      "Hành lang và cầu thang bộ đều đã bị khói bao phủ. Bạn không thể an toàn đi ra ngoài bằng cửa chính. Bất chợt, bạn nghe thấy tiếng người kêu cứu ở gần đó. Bạn sẽ làm gì?",
    timeLimitSeconds: 30,
    choices: [
      {
        id: "cross-smoke",
        text: "Cố gắng băng qua hành lang đầy khói để tìm người đang kêu cứu.",
        effects: {
          safety: -25,
          calmness: -15,
        },
        feedback: {
          type: "danger",
          title: "Không đi vào khu vực đầy khói",
          message:
            "Bạn đã đặt bản thân vào nguy hiểm khi cố băng qua hành lang đầy khói.",
          explanation:
            "Khói có thể nhanh chóng khiến bạn mất phương hướng, khó thở và bị ngộ độc. Đừng cố đi qua lối thoát đã bị khói bao phủ. Hãy thông báo cho lực lượng cứu hộ về người có thể đang mắc kẹt và vị trí cuối cùng bạn nghe thấy tiếng kêu cứu.",
        },
        nextScenarioId: "fire-05",
      },
      {
        id: "call-for-help",
        text: "Ở lại nơi an toàn hơn, đóng cửa và gọi 114 để cầu cứu.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "Bảo vệ bản thân và gọi cứu hộ",
          message:
            "Bạn tránh xa khu vực có khói và chủ động liên hệ lực lượng cứu hỏa.",
          explanation:
            "Khi các lối thoát bị chặn, hãy đóng cửa, dùng vật liệu phù hợp chèn kín các khe hở để hạn chế khói tràn vào nếu có thể. Gọi 114, cung cấp chính xác vị trí của bạn và thông báo nếu có người đang mắc kẹt. Làm theo hướng dẫn của tổng đài.",
        },
        nextScenarioId: "fire-05",
      },
    ],
  },
  {
    id: "fire-05",
    chapterId: "fire",
    title: "An toàn bên ngoài tòa nhà",
    location: "Bên ngoài · Khu vực an toàn",
    image: "/images/scenarios/fire/fire-02.png",
    description: "Bạn đã đến được khu vực bên ngoài.",
    dialogue:
      "Bạn đã thoát ra khỏi tòa nhà. Lực lượng cứu hỏa đang trên đường đến hiện trường. Một số cư dân đang tập trung gần lối vào. Bạn sẽ làm gì tiếp theo?",
    timeLimitSeconds: 20,
    choices: [
      {
        id: "stay-safe",
        text: "Tiếp tục ở khu vực an toàn và cung cấp thông tin cần thiết cho lực lượng cứu hộ.",
        effects: {
          safety: 20,
          calmness: 10,
        },
        feedback: {
          type: "success",
          title: "Một hành động có trách nhiệm",
          message:
            "Bạn giữ khoảng cách an toàn và hỗ trợ lực lượng cứu hộ bằng những thông tin hữu ích.",
          explanation:
            "Hãy ở cách xa tòa nhà và không cản trở đường tiếp cận của xe cứu hỏa. Thông báo cho lực lượng chức năng nếu bạn biết có người vẫn còn mắc kẹt bên trong. Tuyệt đối không quay lại cho đến khi cơ quan chức năng xác nhận tòa nhà an toàn.",
        },
        isEnding: true,
      },
      {
        id: "go-back",
        text: "Quay trở lại tòa nhà để kiểm tra xem mọi người đã thoát hết chưa.",
        effects: {
          safety: -30,
          calmness: -10,
        },
        feedback: {
          type: "danger",
          title: "Không quay lại khu vực đang cháy",
          message:
            "Bạn đang tự đặt mình vào nguy hiểm khi quay trở lại tòa nhà.",
          explanation:
            "Công tác tìm kiếm và cứu nạn cần được thực hiện bởi lực lượng cứu hộ chuyên nghiệp. Hãy cung cấp cho họ những thông tin bạn biết về người có thể còn mắc kẹt bên trong. Không tự ý quay trở lại tòa nhà.",
        },
        isEnding: true,
      },
    ],
  },
];
