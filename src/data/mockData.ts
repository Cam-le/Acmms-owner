// Mock Data for Vietnamese Farm Management App

export interface Worker {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive";
  dateJoined: string;
  password?: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  icon: string;
  iconBg: string;
  area: string;
  plot: string;
  status: "pending" | "in-progress" | "completed";
  assignee: string;
  date?: string;
  time?: string;
}

export interface Staff {
  id: string;
  name: string;
  initials: string;
  color: string;
  status: "available" | "busy" | "off";
}

// Workers Mock Data
export const mockWorkers: Worker[] = [
  {
    id: "1",
    name: "Maria Garcia",
    email: "maria.garcia@farm.com",
    phone: "0909993399",
    role: "Người làm nông",
    status: "active",
    dateJoined: "15/03/2024",
  },
  {
    id: "2",
    name: "James Wilson",
    email: "james.wilson@farm.com",
    phone: "0909883399",
    role: "Chuyên gia",
    status: "active",
    dateJoined: "22/07/2024",
  },
  {
    id: "3",
    name: "David Brown",
    email: "david.brown@farm.com",
    phone: "0909773399",
    role: "Người làm nông",
    status: "inactive",
    dateJoined: "10/01/2024",
  },
];

// Tasks Mock Data
export const mockTasks: Task[] = [
  {
    id: "1",
    name: "Kiểm tra và vận hành hệ thống tưới nhỏ giọt",
    description: "Định kỳ hàng ngày",
    icon: "💧",
    iconBg: "#D1FAE5",
    area: "Khu A",
    plot: "Luống 01",
    status: "pending",
    assignee: "Phạm Văn D",
    date: "20/12/2023",
    time: "07:00 - 11:00",
  },
  {
    id: "2",
    name: "Kiểm tra cây cà chua có dấu hiệu bệnh đốm lá",
    description: "Phải tiến hơi trước AI-02",
    icon: "🍅",
    iconBg: "#FED7AA",
    area: "Khu C",
    plot: "Luống 12",
    status: "pending",
    assignee: "Lê Văn C",
  },
  {
    id: "3",
    name: "Ghi nhận tình trạng sinh trưởng cây trồng tuần 12",
    description: "Yêu cầu kỹ thuật Nguyễn Văn Nam",
    icon: "📋",
    iconBg: "#DBEAFE",
    area: "Khu D",
    plot: "Luống 08",
    status: "in-progress",
    assignee: "Hoàng Thị E",
    date: "20/12/2023",
    time: "13:00 - 17:00",
  },
  {
    id: "4",
    name: "Kiểm tra và xử lý nhiệt độ nhà màng 2",
    description: "Cảm biến T-102 - Nhà màng 2",
    icon: "🌡️",
    iconBg: "#FEE2E2",
    area: "Khu B",
    plot: "Luống 05",
    status: "pending",
    assignee: "Mai Thị Hoa",
  },
  {
    id: "5",
    name: "Bón phân NPK đợt 3 cho khu B – dưa lưới",
    description: "Theo lịch mùa vụ",
    icon: "🌱",
    iconBg: "#D1FAE5",
    area: "Khu B",
    plot: "Luống 15",
    status: "in-progress",
    assignee: "Trần Dũng",
  },
  {
    id: "6",
    name: "Thu hoạch cải Kale – lô số 5",
    description: "Đã nhập kho lạnh",
    icon: "🥬",
    iconBg: "#E0E7FF",
    area: "Khu E",
    plot: "Luống 05",
    status: "completed",
    assignee: "Nguyễn Văn B",
  },
];

// Staff Mock Data
export const mockStaff: Staff[] = [
  {
    id: "1",
    name: "Trần Văn E",
    initials: "TV",
    color: "#DBEAFE",
    status: "available",
  },
  {
    id: "2",
    name: "Lê Thị F",
    initials: "LF",
    color: "#FEF3C7",
    status: "available",
  },
  {
    id: "3",
    name: "Nguyễn Văn G",
    initials: "NG",
    color: "#E9D5FF",
    status: "available",
  },
  {
    id: "4",
    name: "Hoàng Thị H",
    initials: "HH",
    color: "#F3F4F6",
    status: "busy",
  },
  {
    id: "5",
    name: "Vũ Văn I",
    initials: "VI",
    color: "#D1FAE5",
    status: "available",
  },
  {
    id: "6",
    name: "Bùi Văn L",
    initials: "BL",
    color: "#FECACA",
    status: "available",
  },
  {
    id: "7",
    name: "Đặng Thị M",
    initials: "DM",
    color: "#DDD6FE",
    status: "available",
  },
  {
    id: "8",
    name: "Đỗ Thị K",
    initials: "DK",
    color: "#F3F4F6",
    status: "off",
  },
  {
    id: "9",
    name: "Phan Văn N",
    initials: "PN",
    color: "#F3F4F6",
    status: "busy",
  },
];

// Roles
export const roles = ["Người Làm Nông", "Chuyên Gia"];
