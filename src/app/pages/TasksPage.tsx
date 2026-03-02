import { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  List,
  MapPin,
  Clock,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Info,
  Users,
  Check,
  ChevronDown,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { Task, Staff } from "../../data/mockData";
import {
  fetchTasks,
  fetchStaff,
  createTask,
  deleteTask,
} from "../../api/mockApi";

// ─── Constants ───────────────────────────────────────────────────────────────

const statusConfig = {
  pending: { label: "Chưa xử lý", color: "bg-[#FEE2E2] text-[#991B1B]" },
  "in-progress": { label: "Đang xử lý", color: "bg-[#FEF3C7] text-[#92400E]" },
  completed: { label: "Hoàn tất", color: "bg-[#D1FAE5] text-[#065F46]" },
};

const staffStatusInfo = {
  available: { label: "Sẵn sàng", dot: "bg-[#059669]", text: "text-[#059669]" },
  busy: { label: "Đang bận", dot: "bg-[#94a3b8]", text: "text-[#64748b]" },
  off: { label: "Nghỉ phép", dot: "bg-[#94a3b8]", text: "text-[#64748b]" },
};

const plotsByArea: Record<string, string[]> = {
  "Khu A": [
    "Luống A-01",
    "Luống A-02",
    "Luống A-03",
    "Luống A-04",
    "Luống A-05",
  ],
  "Khu B": [
    "Luống B-01",
    "Luống B-02",
    "Luống B-03",
    "Luống B-05",
    "Luống B-15",
  ],
  "Khu C": ["Luống C-01", "Luống C-02", "Luống C-12"],
  "Khu D": ["Luống D-01", "Luống D-08"],
  "Khu E": ["Luống E-01", "Luống E-05"],
};

const cropByArea: Record<string, string> = {
  "Khu A": "Dâu tây Nhật (Vụ Đông Xuân 2023)",
  "Khu B": "Bắp cải tím (Vụ Đông Xuân 2023)",
  "Khu C": "Cà chua (Vụ Đông Xuân 2023)",
  "Khu D": "Rau muống (Vụ Đông Xuân 2023)",
  "Khu E": "Cải Kale (Vụ Đông Xuân 2023)",
};

const taskTypes = [
  "Bón phân",
  "Tưới nước",
  "Thu hoạch",
  "Kiểm tra",
  "Cắt tỉa",
  "Phòng trừ sâu bệnh",
];
const iconByType: Record<string, { icon: string; bg: string }> = {
  "Bón phân": { icon: "🌱", bg: "#D1FAE5" },
  "Tưới nước": { icon: "💧", bg: "#DBEAFE" },
  "Thu hoạch": { icon: "🥬", bg: "#E0E7FF" },
  "Kiểm tra": { icon: "📋", bg: "#FEF3C7" },
  "Cắt tỉa": { icon: "✂️", bg: "#FEE2E2" },
  "Phòng trừ sâu bệnh": { icon: "🍅", bg: "#FED7AA" },
};

type PageView = "main" | "createTask" | "assignStaff";

// ─── Default form state ───────────────────────────────────────────────────────
const defaultScheduleForm = {
  step: 1 as 1 | 2,
  taskId: "",
  dateFrom: "",
  dateTo: "",
  cycle: "weekly" as "weekly" | "once" | "daily" | "seasonal",
  days: [2, 4] as number[], // T4, T6 selected by default (0=T2 … 6=CN)
};

const defaultCreateForm = {
  name: "",
  type: "",
  description: "",
  area: "",
  plots: [] as string[],
  estimatedDuration: "",
  durationUnit: "giờ",
  dateFrom: "",
  dateTo: "",
  timeSlots: ["morning"] as string[],
  assignNow: false,
};

// ─── Component ───────────────────────────────────────────────────────────────
export function TasksPage() {
  // Page-level view
  const [pageView, setPageView] = useState<PageView>("main");

  // Task list
  const [tasks, setTasks] = useState<Task[]>([]);
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "in-progress" | "completed"
  >("all");
  const [filterArea, setFilterArea] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("list");

  // Modals for list/calendar
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  // Schedule modal form
  const [scheduleForm, setScheduleForm] = useState(defaultScheduleForm);

  // Edit task form (controlled)
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    area: "",
    plot: "",
    status: "pending" as Task["status"],
    assignee: "",
  });

  // Calendar
  const [currentDate, setCurrentDate] = useState(new Date(2023, 11, 20));

  // Create task flow
  const [createStep, setCreateStep] = useState<1 | 2>(1);
  const [createForm, setCreateForm] = useState(defaultCreateForm);
  const [showPlotsDropdown, setShowPlotsDropdown] = useState(false);

  // Staff assignment
  const [assignedStaff, setAssignedStaff] = useState<string[]>([]);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const [staffModalSelected, setStaffModalSelected] = useState<string[]>([]);
  const [staffSearchTerm, setStaffSearchTerm] = useState("");
  const [staffStatusFilter, setStaffStatusFilter] = useState("all");

  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
    fetchStaff().then((data) => setStaffList(data));
  }, []);

  // ── Filtering ─────────────────────────────────────────────────────────────
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || task.status === filterStatus;
    const matchesArea = filterArea === "all" || task.area === filterArea;
    return matchesSearch && matchesStatus && matchesArea;
  });

  // ── Calendar helpers ───────────────────────────────────────────────────────
  const getWeekDays = () => {
    const days = [];
    const start = new Date(currentDate);
    start.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const getTasksForDay = (date: Date) =>
    tasks.filter((task) => {
      if (!task.date) return false;
      const [d, m, y] = task.date.split("/");
      const td = new Date(+y, +m - 1, +d);
      return (
        td.getDate() === date.getDate() &&
        td.getMonth() === date.getMonth() &&
        td.getFullYear() === date.getFullYear()
      );
    });

  const weekDays = getWeekDays();
  const dayNames = ["THỨ 2", "THỨ 3", "THỨ 4", "THỨ 5", "THỨ 6", "THỨ 7", "CN"];

  // ── Task actions ───────────────────────────────────────────────────────────
  const openViewModal = (task: Task) => {
    setSelectedTask(task);
    setIsViewModalOpen(true);
  };
  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setEditFormData({
      name: task.name,
      description: task.description,
      area: task.area,
      plot: task.plot,
      status: task.status,
      assignee: task.assignee,
    });
    setIsEditModalOpen(true);
  };
  const openDeleteDialog = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteDialogOpen(true);
  };

  const handleEditTask = () => {
    if (!selectedTask) return;
    setTasks((prev) =>
      prev.map((t) =>
        t.id === selectedTask.id
          ? {
              ...t,
              name: editFormData.name,
              description: editFormData.description,
              area: editFormData.area,
              plot: editFormData.plot,
              status: editFormData.status,
              assignee: editFormData.assignee,
            }
          : t,
      ),
    );
    setIsEditModalOpen(false);
  };

  // ── Schedule modal helpers ─────────────────────────────────────────────────
  const openScheduleModal = () => {
    setScheduleForm(defaultScheduleForm);
    setIsScheduleModalOpen(true);
  };

  const scheduleSelectedTask =
    tasks.find((t) => t.id === scheduleForm.taskId) ?? null;

  const toggleScheduleDay = (idx: number) => {
    setScheduleForm((f) => ({
      ...f,
      days: f.days.includes(idx)
        ? f.days.filter((d) => d !== idx)
        : [...f.days, idx],
    }));
  };

  const handleScheduleConfirm = () => {
    if (!scheduleSelectedTask) return;
    const dateLabel = scheduleForm.dateFrom
      ? new Date(scheduleForm.dateFrom).toLocaleDateString("vi-VN")
      : undefined;
    const { id: _omit, ...taskWithoutId } = scheduleSelectedTask;
    createTask({
      ...taskWithoutId,
      date: dateLabel,
      time: "07:00 - 11:00",
      status: "pending",
    }).then((created) => {
      setTasks((prev) => [...prev, created]);
      setIsScheduleModalOpen(false);
    });
  };

  const handleDeleteTask = () => {
    if (!taskToDelete) return;
    deleteTask(taskToDelete.id).then(() => {
      setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
      setIsDeleteDialogOpen(false);
      setTaskToDelete(null);
    });
  };

  // ── Create task helpers ────────────────────────────────────────────────────
  const startCreateTask = () => {
    setCreateForm(defaultCreateForm);
    setCreateStep(1);
    setAssignedStaff([]);
    setPageView("createTask");
  };

  const handleStep1Continue = () => {
    if (!createForm.name.trim()) {
      alert("Vui lòng nhập tên công việc.");
      return;
    }
    setCreateStep(2);
  };

  const handleStep2Finish = () => {
    if (!createForm.area) {
      alert("Vui lòng chọn khu vực.");
      return;
    }
    if (createForm.assignNow) {
      setPageView("assignStaff");
    } else {
      finalizeTask([]);
    }
  };

  const finalizeTask = (staff: string[]) => {
    const typeInfo = iconByType[createForm.type] || {
      icon: "📋",
      bg: "#DBEAFE",
    };
    const firstPlot = createForm.plots[0] || "Luống 01";
    const assigneeName =
      staff.length > 0
        ? staffList.find((s) => s.id === staff[0])?.name || "Chưa phân công"
        : "Chưa phân công";

    const newTask: Omit<Task, "id"> = {
      name: createForm.name,
      description: createForm.description,
      icon: typeInfo.icon,
      iconBg: typeInfo.bg,
      area: createForm.area,
      plot: firstPlot,
      status: "pending",
      assignee: assigneeName,
      date: createForm.dateFrom
        ? new Date(createForm.dateFrom).toLocaleDateString("vi-VN")
        : undefined,
      time: createForm.timeSlots.includes("morning")
        ? createForm.timeSlots.includes("afternoon")
          ? "07:00 - 17:00"
          : "07:00 - 11:00"
        : createForm.timeSlots.includes("afternoon")
          ? "13:00 - 17:00"
          : undefined,
    };

    createTask(newTask).then((created) => {
      setTasks((prev) => [...prev, created]);
      setPageView("main");
      setActiveTab("list");
    });
  };

  // ── Plot multi-select helpers ──────────────────────────────────────────────
  const togglePlot = (plot: string) => {
    setCreateForm((f) => ({
      ...f,
      plots: f.plots.includes(plot)
        ? f.plots.filter((p) => p !== plot)
        : [...f.plots, plot],
    }));
  };

  const removePlot = (plot: string) => {
    setCreateForm((f) => ({ ...f, plots: f.plots.filter((p) => p !== plot) }));
  };

  // ── Time slot helper ───────────────────────────────────────────────────────
  const toggleTimeSlot = (slot: string) => {
    setCreateForm((f) => ({
      ...f,
      timeSlots: f.timeSlots.includes(slot)
        ? f.timeSlots.filter((s) => s !== slot)
        : [...f.timeSlots, slot],
    }));
  };

  // ── Staff modal helpers ────────────────────────────────────────────────────
  const openStaffModal = () => {
    setStaffModalSelected([...assignedStaff]);
    setStaffSearchTerm("");
    setStaffStatusFilter("all");
    setIsStaffModalOpen(true);
  };

  const confirmStaffModal = () => {
    setAssignedStaff(staffModalSelected);
    setIsStaffModalOpen(false);
  };

  const filteredModalStaff = staffList.filter((s) => {
    const matchSearch = s.name
      .toLowerCase()
      .includes(staffSearchTerm.toLowerCase());
    const matchStatus =
      staffStatusFilter === "all" || s.status === staffStatusFilter;
    return matchSearch && matchStatus;
  });

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER: Create Task Full-Page View
  // ══════════════════════════════════════════════════════════════════════════
  if (pageView === "createTask") {
    return (
      <div className="space-y-6">
        {/* Breadcrumb + Page Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-[#64748b] mb-1">
              <span
                className="cursor-pointer hover:text-[#009689]"
                onClick={() => setPageView("main")}
              >
                Công việc
              </span>
              <span className="mx-1">/</span>
              <span className="text-[#1e293b]">Tạo mới</span>
            </p>
            <h1 className="text-2xl font-bold text-[#115e59]">
              Tạo công việc mới
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPageView("main")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#475569] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={() => setPageView("main")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#009689] border border-[#009689] hover:bg-[#f0fdfa] transition-colors"
            >
              Lưu bản nháp
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-8 max-w-2xl mx-auto">
          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            {/* Step 1 */}
            <div className="flex items-center gap-2">
              {createStep === 1 ? (
                <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center text-sm font-semibold">
                  1
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              )}
              <span
                className={`text-sm font-medium ${
                  createStep === 1 ? "text-[#009689]" : "text-[#64748b]"
                }`}
              >
                Thông tin công việc
              </span>
            </div>

            <span className="text-[#cbd5e1] mx-1">/</span>

            {/* Step 2 */}
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
                  createStep === 2
                    ? "bg-[#009689] text-white"
                    : "border-2 border-[#e2e8f0] text-[#94a3b8]"
                }`}
              >
                2
              </div>
              <span
                className={`text-sm font-medium ${
                  createStep === 2 ? "text-[#009689]" : "text-[#94a3b8]"
                }`}
              >
                Lịch trình & Phạm vi
              </span>
            </div>
          </div>

          {/* ── STEP 1 ─────────────────────────────────────────────────── */}
          {createStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-base font-semibold text-[#1e293b]">
                Thông tin cơ bản
              </h2>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Tên công việc <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Vd: Bón phân đợt 1 cho Cà chua"
                  value={createForm.name}
                  onChange={(e) =>
                    setCreateForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Loại công việc
                </label>
                <div className="relative">
                  <select
                    value={createForm.type}
                    onChange={(e) =>
                      setCreateForm((f) => ({ ...f, type: e.target.value }))
                    }
                    className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent pr-10"
                  >
                    <option value="">Chọn loại công việc</option>
                    {taskTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Mô tả chi tiết
                </label>
                <textarea
                  placeholder="Nhập hướng dẫn chi tiết, ghi chú kỹ thuật..."
                  rows={5}
                  value={createForm.description}
                  onChange={(e) =>
                    setCreateForm((f) => ({
                      ...f,
                      description: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent resize-none"
                />
              </div>

              {/* Info box */}
              <div className="flex items-start gap-3 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg px-4 py-3">
                <Info className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#1d4ed8]">
                  Lưu ý: Bạn sẽ thiết lập lịch trình và phạm vi cho công việc
                  này ở bước tiếp theo.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleStep1Continue}
                  className="bg-[#009689] text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#007f73] transition-colors"
                >
                  Tiếp tục
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2 ─────────────────────────────────────────────────── */}
          {createStep === 2 && (
            <div className="space-y-8">
              {/* Section: Phạm vi */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-4 h-4 text-[#009689]" />
                  <h2 className="text-base font-semibold text-[#1e293b]">
                    Phạm vi thực hiện
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Area dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">
                      Khu vực <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={createForm.area}
                        onChange={(e) =>
                          setCreateForm((f) => ({
                            ...f,
                            area: e.target.value,
                            plots: [],
                          }))
                        }
                        className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent pr-10"
                      >
                        <option value="">Chọn khu vực</option>
                        {Object.keys(plotsByArea).map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" />
                    </div>
                  </div>

                  {/* Plots multi-select */}
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">
                      Luống / Lô trống
                    </label>
                    <div
                      className="min-h-[44px] w-full px-3 py-2 border border-[#d1d5db] rounded-lg bg-white flex flex-wrap gap-2 items-center cursor-text relative"
                      onClick={() =>
                        createForm.area && setShowPlotsDropdown((v) => !v)
                      }
                    >
                      {createForm.plots.map((p) => (
                        <span
                          key={p}
                          className="flex items-center gap-1 bg-[#e0f2fe] text-[#0369a1] text-xs px-2 py-1 rounded-md"
                        >
                          {p}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removePlot(p);
                            }}
                            className="hover:text-[#0c4a6e]"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                      <span className="text-sm text-[#9ca3af]">
                        {createForm.area
                          ? "Chọn thêm..."
                          : "Chọn khu vực trước"}
                      </span>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
                    </div>

                    {/* Dropdown */}
                    {showPlotsDropdown && createForm.area && (
                      <div className="border border-[#e2e8f0] rounded-lg mt-1 bg-white shadow-lg z-10 relative">
                        {(plotsByArea[createForm.area] || []).map((plot) => (
                          <button
                            key={plot}
                            onClick={() => togglePlot(plot)}
                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-[#f8fafc] transition-colors"
                          >
                            <span className="text-[#1e293b]">{plot}</span>
                            {createForm.plots.includes(plot) && (
                              <Check className="w-4 h-4 text-[#009689]" />
                            )}
                          </button>
                        ))}
                        <div className="border-t border-[#e2e8f0] px-4 py-2">
                          <button
                            onClick={() => setShowPlotsDropdown(false)}
                            className="text-xs text-[#009689] font-medium hover:underline"
                          >
                            Xong
                          </button>
                        </div>
                      </div>
                    )}

                    {createForm.plots.length > 0 && createForm.area && (
                      <p className="text-xs text-[#64748b] mt-1.5">
                        Đã chọn {createForm.plots.length} luống thuộc{" "}
                        {createForm.area}
                      </p>
                    )}
                  </div>

                  {/* Auto crop type */}
                  {createForm.area && (
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-2">
                        Loại cây trồng (Tự động)
                      </label>
                      <div className="flex items-center gap-2 px-3 py-2.5 border border-[#e2e8f0] rounded-lg bg-[#f8fafc]">
                        <span>🌱</span>
                        <span className="text-sm text-[#374151] flex-1">
                          {cropByArea[createForm.area]}
                        </span>
                        <span className="text-xs text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded">
                          Read-only
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Section: Thời lượng & Lịch trình */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-4 h-4 text-[#009689]" />
                  <h2 className="text-base font-semibold text-[#1e293b]">
                    Thời lượng & Lịch trình
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Duration + Date range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-2">
                        Thời lượng ước tính{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={createForm.estimatedDuration}
                          onChange={(e) =>
                            setCreateForm((f) => ({
                              ...f,
                              estimatedDuration: e.target.value,
                            }))
                          }
                          className="flex-1 px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                        />
                        <div className="relative">
                          <select
                            value={createForm.durationUnit}
                            onChange={(e) =>
                              setCreateForm((f) => ({
                                ...f,
                                durationUnit: e.target.value,
                              }))
                            }
                            className="px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#009689] pr-7"
                          >
                            <option value="giờ">giờ</option>
                            <option value="ngày">ngày</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#9ca3af] pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-2">
                        Khoảng thời gian áp dụng{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="date"
                          value={createForm.dateFrom}
                          onChange={(e) =>
                            setCreateForm((f) => ({
                              ...f,
                              dateFrom: e.target.value,
                            }))
                          }
                          className="flex-1 px-2 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]"
                        />
                        <span className="text-[#94a3b8]">-</span>
                        <input
                          type="date"
                          value={createForm.dateTo}
                          onChange={(e) =>
                            setCreateForm((f) => ({
                              ...f,
                              dateTo: e.target.value,
                            }))
                          }
                          className="flex-1 px-2 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">
                      Khung giờ làm việc
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => toggleTimeSlot("morning")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${
                          createForm.timeSlots.includes("morning")
                            ? "border-[#009689] bg-[#f0fdfa] text-[#047857]"
                            : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#009689]"
                        }`}
                      >
                        <span>☀️</span>
                        07:00 - 11:00
                        {createForm.timeSlots.includes("morning") && (
                          <CheckCircle2 className="w-4 h-4 text-[#009689]" />
                        )}
                      </button>

                      <button
                        onClick={() => toggleTimeSlot("afternoon")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${
                          createForm.timeSlots.includes("afternoon")
                            ? "border-[#009689] bg-[#f0fdfa] text-[#047857]"
                            : "border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#009689]"
                        }`}
                      >
                        <span>🌤️</span>
                        13:00 - 17:00
                        {createForm.timeSlots.includes("afternoon") && (
                          <CheckCircle2 className="w-4 h-4 text-[#009689]" />
                        )}
                      </button>

                      <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border-2 border-dashed border-[#e2e8f0] text-[#64748b] hover:border-[#009689] hover:text-[#009689] transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                        Thêm khung giờ tùy chỉnh
                      </button>
                    </div>
                  </div>

                  {/* Assign now toggle */}
                  <div className="flex items-start justify-between gap-4 py-2">
                    <div>
                      <p className="text-sm font-medium text-[#1e293b]">
                        Phân công ngay
                      </p>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        Tự động chuyển đến màn hình chọn nhân viên sau khi hoàn
                        tất.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setCreateForm((f) => ({
                          ...f,
                          assignNow: !f.assignNow,
                        }))
                      }
                      className={`relative flex-shrink-0 w-12 h-6 rounded-full transition-colors ${
                        createForm.assignNow ? "bg-[#009689]" : "bg-[#d1d5db]"
                      }`}
                    >
                      <span
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                          createForm.assignNow
                            ? "translate-x-7"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="flex justify-between pt-4 border-t border-[#e2e8f0]">
                <button
                  onClick={() => setCreateStep(1)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-[#475569] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Quay lại
                </button>
                <button
                  onClick={handleStep2Finish}
                  className="flex items-center gap-2 bg-[#009689] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#007f73] transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Hoàn tất tạo lịch trình
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Staff Selection Modal (also used from assign page) */}
        <StaffModal
          open={isStaffModalOpen}
          onOpenChange={setIsStaffModalOpen}
          staffList={staffList}
          selected={staffModalSelected}
          setSelected={setStaffModalSelected}
          searchTerm={staffSearchTerm}
          setSearchTerm={setStaffSearchTerm}
          statusFilter={staffStatusFilter}
          setStatusFilter={setStaffStatusFilter}
          filteredStaff={filteredModalStaff}
          onConfirm={confirmStaffModal}
        />
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER: Staff Assignment Full-Page View
  // ══════════════════════════════════════════════════════════════════════════
  if (pageView === "assignStaff") {
    const typeInfo = iconByType[createForm.type] || {
      icon: "📋",
      bg: "#DBEAFE",
    };
    const assignedStaffDetails = staffList.filter((s) =>
      assignedStaff.includes(s.id),
    );

    return (
      <div className="space-y-6">
        {/* Breadcrumb + Header */}
        <div>
          <p className="text-sm text-[#64748b] mb-1">
            <span
              className="cursor-pointer hover:text-[#009689]"
              onClick={() => setPageView("main")}
            >
              Công việc
            </span>
            <span className="mx-1">/</span>
            <span
              className="cursor-pointer hover:text-[#009689]"
              onClick={() => {
                setCreateStep(2);
                setPageView("createTask");
              }}
            >
              Tạo mới
            </span>
            <span className="mx-1">/</span>
            <span className="text-[#1e293b]">Phân công</span>
          </p>
          <h1 className="text-2xl font-bold text-[#115e59]">
            Phân công nhân sự
          </h1>
          <p className="text-sm text-[#64748b] mt-1">
            Chọn nhân viên phù hợp để thực hiện nhiệm vụ.
          </p>
        </div>

        {/* Step progress bar */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-[#64748b]">
                Thông tin nhiệm vụ
              </span>
            </div>
            <div className="flex-1 h-0.5 bg-[#e2e8f0]" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-[#009689]">
                Phân công nhân sự
              </span>
            </div>
          </div>
        </div>

        {/* Main content: 2 columns */}
        <div className="grid grid-cols-5 gap-6">
          {/* Left: Task details */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-6 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ backgroundColor: typeInfo.bg }}
                >
                  {typeInfo.icon}
                </div>
                <h3 className="text-base font-semibold text-[#1e293b]">
                  Chi tiết nhiệm vụ
                </h3>
              </div>

              <div>
                <p className="font-semibold text-[#1e293b] text-sm">
                  {createForm.name}
                </p>
                {createForm.description && (
                  <p className="text-xs text-[#64748b] mt-1">
                    {createForm.description}
                  </p>
                )}
              </div>

              {createForm.area && (
                <div>
                  <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-1">
                    Khu vực làm việc
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#374151]">
                    <MapPin className="w-3.5 h-3.5 text-[#009689]" />
                    {createForm.area}
                    {createForm.plots.length > 0 &&
                      ` - ${createForm.plots.join(", ")}`}
                  </div>
                </div>
              )}

              {(createForm.dateFrom || createForm.dateTo) && (
                <div>
                  <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-1">
                    Thời gian dự kiến
                  </p>
                  <div className="flex items-center gap-1.5 text-sm text-[#374151]">
                    <Calendar className="w-3.5 h-3.5 text-[#009689]" />
                    {createForm.dateFrom}{" "}
                    {createForm.dateTo && `- ${createForm.dateTo}`}
                  </div>
                  {createForm.timeSlots.length > 0 && (
                    <div className="flex items-center gap-1.5 text-sm text-[#374151] mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#009689]" />
                      {createForm.timeSlots.includes("morning")
                        ? "07:00 - 11:00"
                        : ""}
                      {createForm.timeSlots.includes("morning") &&
                        createForm.timeSlots.includes("afternoon") &&
                        " & "}
                      {createForm.timeSlots.includes("afternoon")
                        ? "13:00 - 17:00"
                        : ""}
                    </div>
                  )}
                </div>
              )}

              {createForm.type && (
                <div>
                  <p className="text-xs text-[#94a3b8] uppercase tracking-wide mb-1">
                    Yêu cầu kỹ năng
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#f1f5f9] text-[#475569] text-xs rounded">
                      {createForm.type}
                    </span>
                    <span className="px-2 py-1 bg-[#f1f5f9] text-[#475569] text-xs rounded">
                      Chăm sóc
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Staff list */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-semibold text-[#1e293b]">
                  Danh sách nhân viên ({assignedStaffDetails.length})
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={openStaffModal}
                    className="flex items-center gap-1.5 text-sm text-[#009689] border border-[#009689] px-3 py-1.5 rounded-lg hover:bg-[#f0fdfa] transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Thêm nhân viên
                  </button>
                  {assignedStaff.length > 0 && (
                    <span className="text-sm text-[#64748b]">
                      Đã chọn:{" "}
                      <span className="font-medium text-[#009689]">
                        {assignedStaff.length}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {assignedStaffDetails.length === 0 ? (
                <div className="py-16 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#f1f5f9] flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-[#94a3b8]" />
                  </div>
                  <p className="text-sm text-[#64748b] mb-1">
                    Chưa có nhân viên nào được phân công
                  </p>
                  <p className="text-xs text-[#94a3b8]">
                    Nhấn "+ Thêm nhân viên" để chọn
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {assignedStaffDetails.map((staff) => (
                    <div
                      key={staff.id}
                      className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#009689] bg-[#f0fdfa]"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-[#1e293b] flex-shrink-0"
                        style={{ backgroundColor: staff.color }}
                      >
                        {staff.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1e293b] truncate">
                          {staff.name}
                        </p>
                        <p
                          className={`text-xs flex items-center gap-1 ${staffStatusInfo[staff.status].text}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${staffStatusInfo[staff.status].dot}`}
                          />
                          {staffStatusInfo[staff.status].label}
                        </p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#009689] flex-shrink-0" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-2">
          <button
            onClick={() => {
              setCreateStep(2);
              setPageView("createTask");
            }}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#475569] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
          >
            Quay lại
          </button>
          <button
            onClick={() => finalizeTask(assignedStaff)}
            className="flex items-center gap-2 bg-[#009689] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#007f73] transition-colors"
          >
            <Check className="w-4 h-4" />
            Xác nhận phân công
          </button>
        </div>

        {/* Staff Modal */}
        <StaffModal
          open={isStaffModalOpen}
          onOpenChange={setIsStaffModalOpen}
          staffList={staffList}
          selected={staffModalSelected}
          setSelected={setStaffModalSelected}
          searchTerm={staffSearchTerm}
          setSearchTerm={setStaffSearchTerm}
          statusFilter={staffStatusFilter}
          setStatusFilter={setStaffStatusFilter}
          filteredStaff={filteredModalStaff}
          onConfirm={confirmStaffModal}
        />
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // RENDER: Main (tabs) View
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#115e59]">
          Lịch trình công việc
        </h1>
        <p className="text-sm text-[#64748b] mt-1">
          Quản lý và theo dõi tiến độ hoạt động tại trang trại
        </p>
      </div>

      {/* Tabs */}
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex gap-6 border-b border-[#e2e8f0]">
          <Tabs.Trigger
            value="list"
            className="pb-3 px-1 relative text-sm font-medium text-[#64748b] data-[state=active]:text-[#009689] transition-colors"
          >
            <div className="flex items-center gap-2">
              <List className="w-4 h-4" />
              Công Việc
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009689] opacity-0 data-[state=active]:opacity-100 transition-opacity" />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="calendar"
            className="pb-3 px-1 relative text-sm font-medium text-[#64748b] data-[state=active]:text-[#009689] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Lịch Trình
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009689] opacity-0 data-[state=active]:opacity-100 transition-opacity" />
          </Tabs.Trigger>
        </Tabs.List>

        {/* ── List View ─────────────────────────────────────────────────── */}
        <Tabs.Content value="list" className="mt-6 space-y-4">
          {/* List tab header */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#64748b]">
              Danh sách tất cả công việc trong hệ thống
            </p>
            <button
              onClick={startCreateTask}
              className="bg-[#009689] text-white px-4 py-2 rounded-[10px] flex items-center gap-2 hover:bg-[#007f73] transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Thêm Công Việc
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-[10px] p-4 shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex-1 min-w-[300px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#90A1B9]" />
                <input
                  type="text"
                  placeholder="Tìm kiếm nhiệm vụ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[#cad5e2] rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-4 py-2 border border-[#cad5e2] rounded-[10px] text-sm text-[#314158] bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="all">Trạng thái: Tất cả</option>
                <option value="pending">Chưa xử lý</option>
                <option value="in-progress">Đang xử lý</option>
                <option value="completed">Hoàn tất</option>
              </select>
              <select
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="px-4 py-2 border border-[#cad5e2] rounded-[10px] text-sm text-[#314158] bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="all">Khu vực: Tất cả</option>
                <option value="Khu A">Khu A</option>
                <option value="Khu B">Khu B</option>
                <option value="Khu C">Khu C</option>
                <option value="Khu D">Khu D</option>
                <option value="Khu E">Khu E</option>
              </select>
            </div>
          </div>

          {/* Tasks Table */}
          <div className="bg-white rounded-[10px] shadow-sm border border-[#e2e8f0] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-[#62748e]">
                      TÊN CÔNG VIỆC
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-[#62748e]">
                      KHU VỰC
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-[#62748e]">
                      TRẠNG THÁI
                    </th>
                    <th className="text-center px-6 py-4 text-sm font-medium text-[#62748e]">
                      HÀNH ĐỘNG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                            style={{ backgroundColor: task.iconBg }}
                          >
                            {task.icon}
                          </div>
                          <div>
                            <p className="font-medium text-[#1e293b]">
                              {task.name}
                            </p>
                            {task.description && (
                              <p className="text-sm text-[#64748b] mt-0.5">
                                {task.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#45556c]">
                        {task.area} - {task.plot}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-sm font-medium ${statusConfig[task.status].color}`}
                        >
                          {statusConfig[task.status].label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openViewModal(task)}
                            className="p-2 text-[#009689] hover:bg-[#dcfce7] rounded-[10px] transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openEditModal(task)}
                            className="p-2 text-[#009689] hover:bg-[#dcfce7] rounded-[10px] transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openDeleteDialog(task)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-[10px] transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-[#e2e8f0] flex items-center justify-between">
              <p className="text-sm text-[#64748b]">
                Hiển thị <span className="font-medium">1</span> đến{" "}
                <span className="font-medium">{filteredTasks.length}</span>{" "}
                trong <span className="font-medium">{tasks.length}</span> nhiệm
                vụ
              </p>
              <div className="flex gap-2">
                <button className="p-2 border border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#64748b]" />
                </button>
                <button className="p-2 border border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#64748b]" />
                </button>
              </div>
            </div>
          </div>
        </Tabs.Content>

        {/* ── Calendar View ──────────────────────────────────────────────── */}
        <Tabs.Content value="calendar" className="mt-6 space-y-6">
          {/* Calendar Header */}
          <div className="bg-white rounded-[10px] p-4 shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        new Date(currentDate).setDate(
                          currentDate.getDate() - 7,
                        ),
                      ),
                    )
                  }
                  className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#64748b]" />
                </button>
                <h2 className="text-lg font-semibold text-[#1e293b]">
                  Tháng {currentDate.getMonth() + 1},{" "}
                  {currentDate.getFullYear()}
                </h2>
                <button
                  onClick={() =>
                    setCurrentDate(
                      new Date(
                        new Date(currentDate).setDate(
                          currentDate.getDate() + 7,
                        ),
                      ),
                    )
                  }
                  className="p-2 hover:bg-[#f1f5f9] rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#64748b]" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openScheduleModal}
                  className="bg-[#009689] text-white px-4 py-2 rounded-[10px] flex items-center gap-2 hover:bg-[#007f73] transition-colors text-sm font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Thêm lịch trình
                </button>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-[#009689] bg-[#d1fae5] rounded-lg hover:bg-[#a7f3d0] transition-colors">
                    Tuần
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-[#64748b] bg-white border border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] transition-colors">
                    Tháng
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-[10px] shadow-sm border border-[#e2e8f0] overflow-hidden">
            <div className="grid grid-cols-7 gap-0">
              {weekDays.map((day, index) => {
                const isToday =
                  day.getDate() === 20 &&
                  day.getMonth() === 11 &&
                  day.getFullYear() === 2023;
                const dayTasks = getTasksForDay(day);
                return (
                  <div
                    key={index}
                    className={`border-r border-b border-[#e2e8f0] min-h-[300px] ${
                      index === 6 ? "border-r-0" : ""
                    }`}
                  >
                    <div
                      className={`p-4 text-center border-b border-[#e2e8f0] ${
                        isToday ? "bg-[#d1fae5]" : "bg-[#f8fafc]"
                      }`}
                    >
                      <p className="text-xs font-medium text-[#64748b] mb-1">
                        {index === 2 ? "HÔM NAY" : dayNames[index]}
                      </p>
                      <p
                        className={`text-lg font-semibold ${isToday ? "text-[#009689]" : "text-[#1e293b]"}`}
                      >
                        {day.getDate()}
                      </p>
                    </div>
                    <div className="p-3 space-y-2">
                      {dayTasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-3 rounded-lg border-l-4 bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                          style={{
                            borderLeftColor:
                              task.status === "completed"
                                ? "#10b981"
                                : task.status === "in-progress"
                                  ? "#f59e0b"
                                  : "#ef4444",
                          }}
                          onClick={() => openViewModal(task)}
                        >
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${statusConfig[task.status].color}`}
                          >
                            {statusConfig[task.status].label}
                          </span>
                          <p className="text-sm font-medium text-[#1e293b] line-clamp-2 mb-2">
                            {task.name}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-[#64748b]">
                            <MapPin className="w-3 h-3" />
                            <span>{task.area}</span>
                          </div>
                          {task.time && (
                            <div className="flex items-center gap-2 text-xs text-[#64748b] mt-1">
                              <Clock className="w-3 h-3" />
                              <span>{task.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-xs text-[#64748b] mt-2">
                            <User className="w-3 h-3" />
                            <span>{task.assignee}</span>
                          </div>
                        </div>
                      ))}
                      {dayTasks.length === 0 && (
                        <p className="text-sm text-[#94a3b8] text-center py-8">
                          Không có lịch trình
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>

      {/* ── Schedule Modal (Lịch Trình tab) ───────────────────────────────── */}
      <Dialog.Root
        open={isScheduleModalOpen}
        onOpenChange={setIsScheduleModalOpen}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <Dialog.Title className="text-xl font-bold text-[#1e293b]">
                Tạo lịch trình công việc
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Chọn công việc và thiết lập thời gian lịch trình
            </Dialog.Description>

            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                {scheduleForm.step > 1 ? (
                  <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#009689] text-white flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                )}
                <span
                  className={`text-sm font-medium ${scheduleForm.step === 1 ? "text-[#009689]" : "text-[#64748b]"}`}
                >
                  Chọn công việc
                </span>
              </div>
              <span className="text-[#cbd5e1] mx-1">/</span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
                    scheduleForm.step === 2
                      ? "bg-[#009689] text-white"
                      : "border-2 border-[#e2e8f0] text-[#94a3b8]"
                  }`}
                >
                  2
                </div>
                <span
                  className={`text-sm font-medium ${scheduleForm.step === 2 ? "text-[#009689]" : "text-[#94a3b8]"}`}
                >
                  Thời gian & Chu kỳ
                </span>
              </div>
            </div>

            {/* ── STEP 1: Select Task ─────────────────────────────────────── */}
            {scheduleForm.step === 1 && (
              <div className="space-y-5">
                {/* Task dropdown */}
                <div className="bg-[#f8fafc] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#009689] text-white flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <h3 className="text-base font-semibold text-[#1e293b]">
                      Chọn công việc
                    </h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-2">
                      Công việc <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={scheduleForm.taskId}
                        onChange={(e) =>
                          setScheduleForm((f) => ({
                            ...f,
                            taskId: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm text-slate-900 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent pr-10"
                      >
                        <option value="">
                          -- Chọn công việc để lên lịch --
                        </option>
                        {tasks.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.icon} {t.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Read-only task details */}
                {scheduleSelectedTask ? (
                  <div className="border border-[#e2e8f0] rounded-xl overflow-hidden">
                    <div className="bg-[#f0fdfa] px-5 py-3 border-b border-[#e2e8f0]">
                      <p className="text-xs font-semibold text-[#009689] uppercase tracking-wide">
                        Chi tiết công việc được chọn
                      </p>
                    </div>
                    <div className="p-5 space-y-4">
                      {/* Name + icon */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                          style={{
                            backgroundColor: scheduleSelectedTask.iconBg,
                          }}
                        >
                          {scheduleSelectedTask.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-[#1e293b] text-sm">
                            {scheduleSelectedTask.name}
                          </p>
                          {scheduleSelectedTask.description && (
                            <p className="text-xs text-[#64748b] mt-0.5">
                              {scheduleSelectedTask.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Details grid */}
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#f1f5f9]">
                        <div>
                          <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">
                            Khu vực
                          </p>
                          <div className="flex items-center gap-1 text-sm text-[#374151]">
                            <MapPin className="w-3.5 h-3.5 text-[#009689]" />
                            {scheduleSelectedTask.area}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">
                            Luống
                          </p>
                          <p className="text-sm text-[#374151]">
                            {scheduleSelectedTask.plot}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">
                            Trạng thái
                          </p>
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${statusConfig[scheduleSelectedTask.status].color}`}
                          >
                            {statusConfig[scheduleSelectedTask.status].label}
                          </span>
                        </div>
                        <div>
                          <p className="text-xs text-[#94a3b8] mb-1 uppercase tracking-wide">
                            Người phụ trách
                          </p>
                          <div className="flex items-center gap-1 text-sm text-[#374151]">
                            <User className="w-3.5 h-3.5 text-[#009689]" />
                            {scheduleSelectedTask.assignee}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-[#e2e8f0] rounded-xl py-10 flex flex-col items-center text-center">
                    <Calendar className="w-8 h-8 text-[#cbd5e1] mb-2" />
                    <p className="text-sm text-[#94a3b8]">
                      Chọn một công việc ở trên để xem chi tiết
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      if (!scheduleForm.taskId) {
                        alert("Vui lòng chọn một công việc.");
                        return;
                      }
                      setScheduleForm((f) => ({ ...f, step: 2 }));
                    }}
                    className="flex items-center gap-2 bg-[#009689] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#007f73] transition-colors"
                  >
                    Tiếp tục
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ── STEP 2: Time & Cycle ────────────────────────────────────── */}
            {scheduleForm.step === 2 && (
              <div className="space-y-5">
                <div className="bg-[#f8fafc] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#009689] text-white flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <h3 className="text-base font-semibold text-[#1e293b]">
                      Thời gian & Chu kỳ
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {/* Date range */}
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                          Ngày bắt đầu
                        </label>
                        <input
                          type="date"
                          value={scheduleForm.dateFrom}
                          onChange={(e) =>
                            setScheduleForm((f) => ({
                              ...f,
                              dateFrom: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                          Ngày kết thúc
                        </label>
                        <input
                          type="date"
                          value={scheduleForm.dateTo}
                          onChange={(e) =>
                            setScheduleForm((f) => ({
                              ...f,
                              dateTo: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2.5 border border-[#d1d5db] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Cycle */}
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-2">
                        Chu kỳ
                      </label>
                      <div className="flex gap-2 flex-wrap">
                        {(["weekly", "once", "daily", "seasonal"] as const).map(
                          (c) => {
                            const labels = {
                              weekly: "Hàng tuần",
                              once: "Một lần",
                              daily: "Hàng ngày",
                              seasonal: "Theo mùa vụ",
                            };
                            const active = scheduleForm.cycle === c;
                            return (
                              <button
                                key={c}
                                onClick={() =>
                                  setScheduleForm((f) => ({ ...f, cycle: c }))
                                }
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                  active
                                    ? "bg-white border-2 border-[#009689] text-[#009689]"
                                    : "bg-white border border-[#e2e8f0] text-[#64748b] hover:border-[#009689] hover:text-[#009689]"
                                }`}
                              >
                                {labels[c]}
                              </button>
                            );
                          },
                        )}
                      </div>
                    </div>

                    {/* Day of week selector */}
                    {scheduleForm.cycle === "weekly" && (
                      <div>
                        <label className="block text-sm font-medium text-[#374151] mb-2">
                          Chọn ngày trong tuần
                        </label>
                        <div className="flex gap-2">
                          {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map(
                            (day, i) => {
                              const active = scheduleForm.days.includes(i);
                              return (
                                <button
                                  key={i}
                                  onClick={() => toggleScheduleDay(i)}
                                  className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                                    active
                                      ? "bg-[#009689] text-white"
                                      : "bg-white border border-[#e2e8f0] text-[#64748b] hover:border-[#009689] hover:text-[#009689]"
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            },
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setScheduleForm((f) => ({ ...f, step: 1 }))}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-[#475569] border border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại
                  </button>
                  <button
                    onClick={handleScheduleConfirm}
                    disabled={!scheduleForm.dateFrom}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#009689] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#007f73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Lưu & Tạo lịch trình
                  </button>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* ── View Task Modal ────────────────────────────────────────────────── */}
      <Dialog.Root open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-xl font-bold text-[#1e293b]">
                Chi tiết công việc
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Xem thông tin chi tiết công việc
            </Dialog.Description>
            {selectedTask && (
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: selectedTask.iconBg }}
                  >
                    {selectedTask.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1e293b] mb-2">
                      {selectedTask.name}
                    </h3>
                    {selectedTask.description && (
                      <p className="text-sm text-[#64748b]">
                        {selectedTask.description}
                      </p>
                    )}
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-sm font-medium mt-3 ${statusConfig[selectedTask.status].color}`}
                    >
                      {statusConfig[selectedTask.status].label}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 bg-[#f8fafc] rounded-lg">
                  <div>
                    <p className="text-xs text-[#64748b] mb-1">Khu vực</p>
                    <p className="text-sm font-medium text-[#1e293b]">
                      {selectedTask.area} - {selectedTask.plot}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-1">
                      Người phụ trách
                    </p>
                    <p className="text-sm font-medium text-[#1e293b]">
                      {selectedTask.assignee}
                    </p>
                  </div>
                  {selectedTask.date && (
                    <div>
                      <p className="text-xs text-[#64748b] mb-1">
                        Ngày thực hiện
                      </p>
                      <p className="text-sm font-medium text-[#1e293b]">
                        {selectedTask.date}
                      </p>
                    </div>
                  )}
                  {selectedTask.time && (
                    <div>
                      <p className="text-xs text-[#64748b] mb-1">Thời gian</p>
                      <p className="text-sm font-medium text-[#1e293b]">
                        {selectedTask.time}
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors"
                >
                  Đóng
                </button>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* ── Edit Task Modal ────────────────────────────────────────────────── */}
      <Dialog.Root open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Dialog.Title className="text-xl font-bold text-[#1e293b]">
                Chỉnh sửa công việc
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Chỉnh sửa thông tin công việc
            </Dialog.Description>
            {selectedTask && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tên công việc
                  </label>
                  <input
                    type="text"
                    value={editFormData.name}
                    onChange={(e) =>
                      setEditFormData((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mô tả
                  </label>
                  <textarea
                    value={editFormData.description}
                    onChange={(e) =>
                      setEditFormData((f) => ({
                        ...f,
                        description: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Khu vực
                    </label>
                    <select
                      value={editFormData.area}
                      onChange={(e) =>
                        setEditFormData((f) => ({ ...f, area: e.target.value }))
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
                    >
                      {Object.keys(plotsByArea).map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Luống / Lô
                    </label>
                    <select
                      value={editFormData.plot}
                      onChange={(e) =>
                        setEditFormData((f) => ({ ...f, plot: e.target.value }))
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
                    >
                      {(plotsByArea[editFormData.area] || []).map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                      {/* Preserve current value if not in list */}
                      {editFormData.plot &&
                        !(plotsByArea[editFormData.area] || []).includes(
                          editFormData.plot,
                        ) && (
                          <option value={editFormData.plot}>
                            {editFormData.plot}
                          </option>
                        )}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Trạng thái
                    </label>
                    <select
                      value={editFormData.status}
                      onChange={(e) =>
                        setEditFormData((f) => ({
                          ...f,
                          status: e.target.value as Task["status"],
                        }))
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
                    >
                      <option value="pending">Chưa xử lý</option>
                      <option value="in-progress">Đang xử lý</option>
                      <option value="completed">Hoàn tất</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Người phụ trách
                    </label>
                    <input
                      type="text"
                      value={editFormData.assignee}
                      onChange={(e) =>
                        setEditFormData((f) => ({
                          ...f,
                          assignee: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-5 border-t border-[#e2e8f0]">
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 border border-[#e2e8f0] hover:bg-slate-100 transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleEditTask}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* ── Delete Dialog ──────────────────────────────────────────────────── */}
      <AlertDialog.Root
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <AlertDialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95">
            <AlertDialog.Title className="text-lg font-semibold text-slate-900 mb-2">
              Xác nhận xóa công việc
            </AlertDialog.Title>
            <AlertDialog.Description className="text-sm text-slate-600 mb-6">
              Bạn có chắc chắn muốn xóa công việc{" "}
              <span className="font-semibold">{taskToDelete?.name}</span> không?
              Hành động này không thể hoàn tác.
            </AlertDialog.Description>
            <div className="flex gap-3 justify-end">
              <AlertDialog.Cancel asChild>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                  Hủy bỏ
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  onClick={handleDeleteTask}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Xóa công việc
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

// ─── Staff Selection Modal (shared) ──────────────────────────────────────────
interface StaffModalProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  staffList: Staff[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  filteredStaff: Staff[];
  onConfirm: () => void;
}

function StaffModal({
  open,
  onOpenChange,
  selected,
  setSelected,
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  filteredStaff,
  onConfirm,
}: StaffModalProps) {
  const staffStatusInfo = {
    available: {
      label: "Sẵn sàng",
      dot: "bg-[#059669]",
      text: "text-[#059669]",
    },
    busy: { label: "Đang bận", dot: "bg-[#94a3b8]", text: "text-[#64748b]" },
    off: { label: "Nghỉ phép", dot: "bg-[#94a3b8]", text: "text-[#64748b]" },
  };

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#009689]" />
              Chọn nhân sự tham gia công việc
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Chọn nhân viên để phân công công việc
          </Dialog.Description>

          <div className="space-y-4">
            {/* Search + filter */}
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#90A1B9]" />
                <input
                  type="text"
                  placeholder="Tìm kiếm nhân sự theo tên..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="all">Trạng thái</option>
                <option value="available">Sẵn sàng</option>
                <option value="busy">Đang bận</option>
                <option value="off">Nghỉ phép</option>
              </select>
            </div>

            {/* Filter chips */}
            {statusFilter !== "all" && (
              <div className="flex items-center gap-2 text-sm text-[#64748b]">
                <span className="font-medium">ĐANG LỌC:</span>
                <span className="px-2 py-1 bg-[#d1fae5] text-[#065f46] rounded-md flex items-center gap-1">
                  {statusFilter === "available"
                    ? "Sẵn sàng"
                    : statusFilter === "busy"
                      ? "Đang bận"
                      : "Nghỉ phép"}
                  <button
                    onClick={() => setStatusFilter("all")}
                    className="hover:text-[#047857]"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-3 gap-3">
              {filteredStaff.map((staff) => {
                const isSelected = selected.includes(staff.id);
                const si =
                  staffStatusInfo[staff.status as keyof typeof staffStatusInfo];
                return (
                  <button
                    key={staff.id}
                    onClick={() => toggle(staff.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      isSelected
                        ? "border-[#009689] bg-[#f0fdfa] shadow-md"
                        : "border-[#e2e8f0] bg-white hover:border-[#009689]"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-[#1e293b]"
                        style={{ backgroundColor: staff.color }}
                      >
                        {staff.initials}
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-[#009689]" />
                      )}
                    </div>
                    <p className="font-medium text-sm text-[#1e293b] mb-1">
                      {staff.name}
                    </p>
                    <p className={`text-xs ${si.text} flex items-center gap-1`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${si.dot}`} />
                      {si.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-6 border-t border-[#e2e8f0]">
            <Dialog.Close asChild>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 border border-[#e2e8f0] hover:bg-slate-100 transition-colors">
                Hủy bỏ
              </button>
            </Dialog.Close>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Xác nhận phân công nhân sự
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
