import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import {
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Sprout,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";

// Types
type SeasonStatus = "Đang hoạt động" | "Đã kết thúc" | "Sắp diễn ra";
type CropType = "Cà Chua" | "Ngô" | "Bắp Cải";

interface PlotAssignment {
  plotId: string;
  plotName: string;
  area: string;
  crop: CropType;
  sowingDate: string;
  harvestDate: string;
  quantity: number;
  status: SeasonStatus;
}

interface Season {
  id: string;
  code: string;
  name: string;
  farm: string;
  startDate: string;
  endDate: string;
  status: SeasonStatus;
  description: string;
  plots: PlotAssignment[];
}

// Mock data
const mockSeasons: Season[] = [
  {
    id: "1",
    code: "MV001",
    name: "Mùa Hè 2025",
    farm: "Trang trại thung lũng xanh",
    startDate: "01-06-2025",
    endDate: "30-09-2025",
    status: "Đang hoạt động",
    description: "Vụ mùa chính trồng cà chua và ngô.",
    plots: [
      {
        plotId: "A-1",
        plotName: "Luống A-1",
        area: "Khu A (Phía Bắc)",
        crop: "Cà Chua",
        sowingDate: "05/06/2025",
        harvestDate: "15/08/2025",
        quantity: 120,
        status: "Đang hoạt động",
      },
      {
        plotId: "A-2",
        plotName: "Luống A-2",
        area: "Khu A (Phía Bắc)",
        crop: "Cà Chua",
        sowingDate: "06/06/2025",
        harvestDate: "15/08/2025",
        quantity: 120,
        status: "Đang hoạt động",
      },
      {
        plotId: "B-1",
        plotName: "Luống B-1",
        area: "Khu B (Phía Nam)",
        crop: "Ngô",
        sowingDate: "10/06/2025",
        harvestDate: "01/09/2025",
        quantity: 100,
        status: "Đang hoạt động",
      },
    ],
  },
  {
    id: "2",
    code: "MV002",
    name: "Vụ cà chua Q2",
    farm: "Trang trại Nắng Hạ",
    startDate: "15-05-2025",
    endDate: "15-10-2025",
    status: "Đang hoạt động",
    description: "",
    plots: [
      {
        plotId: "C-1",
        plotName: "Luống C-1",
        area: "Khu C",
        crop: "Cà Chua",
        sowingDate: "20/05/2025",
        harvestDate: "10/10/2025",
        quantity: 80,
        status: "Đang hoạt động",
      },
    ],
  },
  {
    id: "3",
    code: "MV003",
    name: "Mùa Đông 2024",
    farm: "Trang trại thung lũng xanh",
    startDate: "01-11-2024",
    endDate: "28-02-2025",
    status: "Đã kết thúc",
    description: "Mùa vụ đông",
    plots: [],
  },
];

const statusConfig = {
  "Đang hoạt động": "bg-[#dcfce7] text-[#008236]",
  "Đã kết thúc": "bg-[#f1f5f9] text-[#475569]",
  "Sắp diễn ra": "bg-[#dbeafe] text-[#1e40af]",
};

export function SeasonsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";
  const seasonId = searchParams.get("id");

  const [seasons, setSeasons] = useState<Season[]>(mockSeasons);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<SeasonStatus | "all">("all");

  // Filter seasons
  const filteredSeasons = seasons.filter((season) => {
    const matchesSearch =
      season.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      season.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      season.farm.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || season.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const selectedSeason = seasons.find((s) => s.id === seasonId);

  // Handle delete
  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa mùa vụ này?")) {
      setSeasons(seasons.filter((s) => s.id !== id));
    }
  };

  // Handle create
  const handleCreate = (season: Omit<Season, "id" | "code">) => {
    const newSeason: Season = {
      ...season,
      id: Date.now().toString(),
      code: `MV${String(seasons.length + 1).padStart(3, "0")}`,
    };
    setSeasons([newSeason, ...seasons]);
    setSearchParams({ view: "list" });
  };

  // Handle update
  const handleUpdate = (updatedSeason: Season) => {
    setSeasons(
      seasons.map((s) => (s.id === updatedSeason.id ? updatedSeason : s)),
    );
    setSearchParams({ view: "list" });
  };

  if (view === "create") {
    return <CreateSeasonView onCreate={handleCreate} />;
  }

  if (view === "detail" && selectedSeason) {
    return <DetailSeasonView season={selectedSeason} />;
  }

  if (view === "edit" && selectedSeason) {
    return <EditSeasonView season={selectedSeason} onUpdate={handleUpdate} />;
  }

  // List View
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[#115e59] text-2xl font-semibold mb-1">
            Quản Lý Mùa Vụ
          </h1>
        </div>
        <Link
          to="/seasons?view=create"
          className="bg-[#009689] text-white px-4 py-2 rounded-lg hover:bg-[#007f75] transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Mùa vụ mới
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#90A1B9]" />
            <input
              type="text"
              placeholder="Tìm kiếm mùa vụ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("Đang hoạt động")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === "Đang hoạt động"
                  ? "bg-[#009689] text-white"
                  : "bg-white border border-[#cad5e2] text-[#62748e] hover:bg-[#f8fafc]"
              }`}
            >
              Hiện tại
            </button>
            <button
              onClick={() => setFilterStatus("Đã kết thúc")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === "Đã kết thúc"
                  ? "bg-[#009689] text-white"
                  : "bg-white border border-[#cad5e2] text-[#62748e] hover:bg-[#f8fafc]"
              }`}
            >
              Đã kết thúc
            </button>
            {filterStatus !== "all" && (
              <button
                onClick={() => setFilterStatus("all")}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white border border-[#cad5e2] text-[#62748e] hover:bg-[#f8fafc]"
              >
                Xóa bỏ lọc
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-[#e2e8f0]">
          <h2 className="text-[#115e59] font-semibold">Danh sách mùa vụ</h2>
        </div>

        <table className="w-full">
          <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Tên mùa vụ
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Nông trại
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Thời gian
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Luống
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-[#62748e] uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            {filteredSeasons.map((season) => (
              <tr
                key={season.id}
                className="hover:bg-[#f8fafc] transition-colors"
              >
                <td className="px-6 py-4 text-sm text-[#115e59] font-medium">
                  {season.code}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-[#115e59]">
                    {season.name}
                  </div>
                  {season.description && (
                    <div className="text-xs text-[#62748e] mt-1">
                      {season.description}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-[#62748e]">
                  {season.farm}
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs text-[#62748e]">
                    Bắt đầu: {season.startDate}
                  </div>
                  <div className="text-xs text-[#62748e]">
                    Kết thúc: {season.endDate}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#115e59] font-medium">
                  {season.plots.length}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-xs font-medium ${
                      statusConfig[season.status]
                    }`}
                  >
                    {season.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={`/seasons?view=detail&id=${season.id}`}
                      className="p-2 text-[#009689] hover:bg-[#f0fdfa] rounded-lg transition-colors"
                      title="Xem"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/seasons?view=edit&id=${season.id}`}
                      className="p-2 text-[#009689] hover:bg-[#f0fdfa] rounded-lg transition-colors"
                      title="Chỉnh sửa"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(season.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredSeasons.length === 0 && (
          <div className="text-center py-12 text-[#62748e]">
            Không tìm thấy mùa vụ nào
          </div>
        )}

        <div className="px-6 py-4 border-t border-[#e2e8f0] flex items-center justify-between text-sm text-[#62748e]">
          <span>Hiển thị {filteredSeasons.length} mùa vụ</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-[#cad5e2] rounded hover:bg-[#f8fafc]">
              Trước
            </button>
            <button className="px-3 py-1 border border-[#cad5e2] rounded hover:bg-[#f8fafc]">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Create Season View (Multi-step)
function CreateSeasonView({
  onCreate,
}: {
  onCreate: (season: Omit<Season, "id" | "code">) => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    farm: "",
    startDate: "",
    endDate: "",
    description: "",
    status: "Sắp diễn ra" as SeasonStatus,
    plots: [] as PlotAssignment[],
  });

  const [selectedPlots, setSelectedPlots] = useState<string[]>([]);
  const [plotDetails, setPlotDetails] = useState<
    Record<
      string,
      {
        crop: CropType;
        sowingDate: string;
        harvestDate: string;
        quantity: number;
      }
    >
  >({});

  const mockPlots = [
    { id: "A-3", name: "Luống A-3", area: "Khu A (Phía Bắc)", size: "50 m²" },
    { id: "A-4", name: "Luống A-4", area: "Khu A (Phía Bắc)", size: "45 m²" },
    { id: "B-2", name: "Luống B-2", area: "Khu B (Phía Nam)", size: "60 m²" },
  ];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = () => {
    const plots: PlotAssignment[] = selectedPlots.map((plotId) => {
      const plot = mockPlots.find((p) => p.id === plotId)!;
      const details = plotDetails[plotId] || {
        crop: "Cà Chua",
        sowingDate: "",
        harvestDate: "",
        quantity: 0,
      };
      return {
        plotId,
        plotName: plot.name,
        area: plot.area,
        crop: details.crop,
        sowingDate: details.sowingDate,
        harvestDate: details.harvestDate,
        quantity: details.quantity,
        status: "Đang hoạt động" as SeasonStatus,
      };
    });

    onCreate({
      ...formData,
      plots,
    });
  };

  const togglePlot = (plotId: string) => {
    setSelectedPlots((prev) =>
      prev.includes(plotId)
        ? prev.filter((id) => id !== plotId)
        : [...prev, plotId],
    );
  };

  const updatePlotDetail = (
    plotId: string,
    field: keyof (typeof plotDetails)[string],
    value: any,
  ) => {
    setPlotDetails((prev) => ({
      ...prev,
      [plotId]: {
        ...(prev[plotId] || {
          crop: "Cà Chua",
          sowingDate: "",
          harvestDate: "",
          quantity: 0,
        }),
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#115e59] text-2xl font-semibold mb-2">
            Tạo Mùa Vụ Mới
          </h1>
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded text-sm font-medium ${
                step === 1
                  ? "bg-[#009689] text-white"
                  : "bg-[#f1f5f9] text-[#62748e]"
              }`}
            >
              Bước 1: Thông tin
            </span>
            <span className="text-[#62748e]">›</span>
            <span
              className={`px-3 py-1 rounded text-sm font-medium ${
                step === 2
                  ? "bg-[#009689] text-white"
                  : "bg-[#f1f5f9] text-[#62748e]"
              }`}
            >
              Bước 2: Chọn luống
            </span>
          </div>
        </div>
        <Link
          to="/seasons"
          className="px-4 py-2 bg-[#f1f5f9] text-[#314158] rounded-lg hover:bg-[#e2e8f0] transition-colors"
        >
          Hủy bỏ
        </Link>
      </div>

      {step === 1 && (
        <form
          onSubmit={handleStep1Submit}
          className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Tên mùa vụ
              </label>
              <input
                type="text"
                required
                placeholder="Ví dụ: Mùa Hè 2026"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Nông trại / Khu vực
              </label>
              <select
                required
                value={formData.farm}
                onChange={(e) =>
                  setFormData({ ...formData, farm: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="">Chọn Nông trại...</option>
                <option value="Trang trại Thung lũng Xanh">
                  Trang trại Thung lũng Xanh
                </option>
                <option value="Trang trại Nắng Hạ">Trang trại Nắng Hạ</option>
                <option value="Trang trại Sông Nội">Trang trại Sông Nội</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#115e59] mb-2">
                  Ngày bắt đầu
                </label>
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#115e59] mb-2">
                  Ngày kết thúc
                </label>
                <input
                  type="date"
                  required
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Mô tả
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689] resize-none"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#009689] text-white rounded-lg hover:bg-[#007f75] transition-colors"
            >
              Tiếp tục →
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Plot Selection */}
          <div className="lg:col-span-1 bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#115e59]">
                Khu A<br />
                <span className="text-sm font-normal text-[#62748e]">
                  (Phía Bắc)
                </span>
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={
                    selectedPlots.includes("A-3") &&
                    selectedPlots.includes("A-4")
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedPlots([...selectedPlots, "A-3", "A-4"]);
                    } else {
                      setSelectedPlots(
                        selectedPlots.filter(
                          (id) => id !== "A-3" && id !== "A-4",
                        ),
                      );
                    }
                  }}
                  className="w-4 h-4 text-[#009689] focus:ring-[#009689] rounded"
                />
                <span className="text-sm text-[#62748e]">Chọn tất cả</span>
              </label>
            </div>

            <div className="space-y-2">
              {mockPlots
                .filter((p) => p.area.includes("Khu A"))
                .map((plot) => (
                  <div
                    key={plot.id}
                    onClick={() => togglePlot(plot.id)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedPlots.includes(plot.id)
                        ? "border-[#009689] bg-[#f0fdfa]"
                        : "border-[#e2e8f0] hover:border-[#009689]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedPlots.includes(plot.id)}
                        onChange={() => {}}
                        className="w-4 h-4 text-[#009689] focus:ring-[#009689] rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-[#115e59]">
                          {plot.name}
                        </div>
                        <div className="text-xs text-[#62748e]">
                          {plot.size}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[#115e59] mb-4">
                Khu B<br />
                <span className="text-sm font-normal text-[#62748e]">
                  (Phía Nam)
                </span>
              </h3>
              <div className="space-y-2">
                {mockPlots
                  .filter((p) => p.area.includes("Khu B"))
                  .map((plot) => (
                    <div
                      key={plot.id}
                      onClick={() => togglePlot(plot.id)}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedPlots.includes(plot.id)
                          ? "border-[#009689] bg-[#f0fdfa]"
                          : "border-[#e2e8f0] hover:border-[#009689]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedPlots.includes(plot.id)}
                          onChange={() => {}}
                          className="w-4 h-4 text-[#009689] focus:ring-[#009689] rounded"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-[#115e59]">
                            {plot.name}
                          </div>
                          <div className="text-xs text-[#62748e]">
                            {plot.size}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right: Plot Details */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
            <div className="mb-4">
              <h3 className="font-semibold text-[#115e59] mb-1">
                Cấu hình luống đã chọn ({selectedPlots.length})
              </h3>
              <p className="text-sm text-[#62748e]">
                Mẹo: Sử dụng "Áp dụng cho tất cả" để thiết lập nhanh
              </p>
            </div>

            {selectedPlots.length === 0 ? (
              <div className="text-center py-12 text-[#62748e]">
                Chọn luống từ danh sách bên trái để bắt đầu
              </div>
            ) : (
              <div className="space-y-6">
                {selectedPlots.map((plotId) => {
                  const plot = mockPlots.find((p) => p.id === plotId)!;
                  const details = plotDetails[plotId] || {
                    crop: "Cà Chua",
                    sowingDate: "",
                    harvestDate: "",
                    quantity: 0,
                  };

                  return (
                    <div
                      key={plotId}
                      className="p-4 border border-[#e2e8f0] rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-medium text-[#115e59]">
                            {plot.name}
                          </h4>
                          <p className="text-xs text-[#62748e]">{plot.size}</p>
                        </div>
                        <button
                          onClick={() => togglePlot(plotId)}
                          className="text-sm text-[#009689] hover:underline"
                        >
                          Áp dụng cho tất cả
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs text-[#62748e] mb-1">
                            Cây trồng
                          </label>
                          <select
                            value={details.crop}
                            onChange={(e) =>
                              updatePlotDetail(
                                plotId,
                                "crop",
                                e.target.value as CropType,
                              )
                            }
                            className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                          >
                            <option value="Cà Chua">Cà Chua</option>
                            <option value="Ngô">Ngô</option>
                            <option value="Bắp Cải">Bắp Cải</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-[#62748e] mb-1">
                            Sản lượng trồng
                          </label>
                          <input
                            type="number"
                            placeholder="0"
                            value={details.quantity || ""}
                            onChange={(e) =>
                              updatePlotDetail(
                                plotId,
                                "quantity",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#62748e] mb-1">
                            Ngày gieo giống
                          </label>
                          <input
                            type="date"
                            value={details.sowingDate}
                            onChange={(e) =>
                              updatePlotDetail(
                                plotId,
                                "sowingDate",
                                e.target.value,
                              )
                            }
                            className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-[#62748e] mb-1">
                            Dự kiến thu hoạch
                          </label>
                          <input
                            type="date"
                            value={details.harvestDate}
                            onChange={(e) =>
                              updatePlotDetail(
                                plotId,
                                "harvestDate",
                                e.target.value,
                              )
                            }
                            className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-[#f1f5f9] text-[#314158] rounded-lg hover:bg-[#e2e8f0] transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại
              </button>
              <button
                onClick={handleStep2Submit}
                disabled={selectedPlots.length === 0}
                className="px-6 py-2 bg-[#009689] text-white rounded-lg hover:bg-[#007f75] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Tạo mùa vụ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Detail Season View
function DetailSeasonView({ season }: { season: Season }) {
  // Group plots by crop
  const plotsByCrop = season.plots.reduce(
    (acc, plot) => {
      if (!acc[plot.crop]) {
        acc[plot.crop] = [];
      }
      acc[plot.crop].push(plot);
      return acc;
    },
    {} as Record<CropType, PlotAssignment[]>,
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/seasons"
            className="p-2 text-[#62748e] hover:text-[#115e59] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-[#115e59] text-2xl font-semibold">
              {season.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-[#62748e]">{season.code}</span>
              <span className="text-[#62748e]">•</span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  statusConfig[season.status]
                }`}
              >
                {season.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
        <h3 className="text-sm font-bold text-[#62748e] uppercase mb-4">
          🌱 Thông tin chung
        </h3>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#1e40af]" />
            </div>
            <div>
              <div className="text-xs text-[#62748e] mb-1">NÔNG TRẠI</div>
              <div className="font-medium text-[#115e59]">{season.farm}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#fef3c7] rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#92400e]" />
            </div>
            <div>
              <div className="text-xs text-[#62748e] mb-1">THỜI GIAN</div>
              <div className="font-medium text-[#115e59]">
                {season.startDate} - {season.endDate}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#dcfce7] rounded-lg flex items-center justify-center shrink-0">
              <Sprout className="w-5 h-5 text-[#008236]" />
            </div>
            <div>
              <div className="text-xs text-[#62748e] mb-1">MÔ TẢ</div>
              <div className="font-medium text-[#115e59]">
                {season.description || "Vụ mùa chính trồng cà chua và ngô."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plots Detail */}
      <div className="bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
        <h3 className="text-sm font-bold text-[#62748e] uppercase mb-4">
          Thông tin chi tiết
        </h3>

        {Object.entries(plotsByCrop).map(([crop, plots]) => {
          const totalArea = plots.reduce(
            (sum, p) => sum + parseInt(p.area.match(/\d+/)?.[0] || "0"),
            0,
          );
          const totalQuantity = plots.reduce((sum, p) => sum + p.quantity, 0);

          return (
            <Collapsible.Root key={crop} defaultOpen className="mb-4">
              <div className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-lg">
                <Collapsible.Trigger className="flex-1 flex items-center gap-3 text-left">
                  <ChevronDown className="w-4 h-4 text-[#62748e]" />
                  <span className="text-lg">
                    {crop === "Cà Chua" ? "🍅" : "🌽"}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-[#115e59]">
                      {crop} ({plots.length} luống)
                    </div>
                    <div className="text-sm text-[#62748e]">
                      Tổng diện tích: {totalArea} m² • Sản lượng trồng:{" "}
                      {totalQuantity} kg
                    </div>
                  </div>
                </Collapsible.Trigger>
              </div>

              <Collapsible.Content className="mt-2">
                <table className="w-full">
                  <thead className="bg-[#f8fafc]">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Luống
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Khu đất
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Ngày gieo
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Ngày thu hoạch (dự kiến)
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Trạng thái
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-[#62748e] uppercase">
                        Thực tế
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2e8f0]">
                    {plots.map((plot) => (
                      <tr key={plot.plotId}>
                        <td className="px-4 py-3 text-sm text-[#115e59]">
                          {plot.plotName}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#62748e]">
                          {plot.area}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#62748e]">
                          {plot.sowingDate}
                        </td>
                        <td className="px-4 py-3 text-sm text-[#62748e]">
                          {plot.harvestDate}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              statusConfig[plot.status]
                            }`}
                          >
                            {plot.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-[#62748e]">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Collapsible.Content>
            </Collapsible.Root>
          );
        })}

        {season.plots.length === 0 && (
          <div className="text-center py-8 text-[#62748e]">
            Chưa có luống nào được gán cho mùa vụ này
          </div>
        )}
      </div>
    </div>
  );
}

// Edit Season View
function EditSeasonView({
  season,
  onUpdate,
}: {
  season: Season;
  onUpdate: (season: Season) => void;
}) {
  const [formData, setFormData] = useState({
    name: season.name,
    farm: season.farm,
    startDate: season.startDate,
    endDate: season.endDate,
    status: season.status,
    description: season.description,
  });

  const [plots, setPlots] = useState<PlotAssignment[]>(season.plots);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      ...season,
      ...formData,
      plots,
    });
  };

  const updatePlot = (
    plotId: string,
    field: keyof PlotAssignment,
    value: any,
  ) => {
    setPlots((prev) =>
      prev.map((plot) =>
        plot.plotId === plotId ? { ...plot, [field]: value } : plot,
      ),
    );
  };

  const removePlot = (plotId: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa luống này?")) {
      setPlots((prev) => prev.filter((plot) => plot.plotId !== plotId));
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/seasons"
            className="p-2 text-[#62748e] hover:text-[#115e59] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-[#115e59] text-2xl font-semibold">
              Chỉnh sửa mùa vụ
            </h1>
            <p className="text-sm text-[#62748e] mt-1">{season.code}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            to="/seasons"
            className="px-4 py-2 bg-[#f1f5f9] text-[#314158] rounded-lg hover:bg-[#e2e8f0] transition-colors"
          >
            Hủy bỏ
          </Link>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#009689] text-white rounded-lg hover:bg-[#007f75] transition-colors"
          >
            Lưu thay đổi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Basic Info */}
        <div className="lg:col-span-1 bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
          <h3 className="text-sm font-bold text-[#62748e] uppercase mb-4">
            📝 Thông tin chung
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Tên mùa vụ
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Nông trại
              </label>
              <select
                value={formData.farm}
                onChange={(e) =>
                  setFormData({ ...formData, farm: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="Trang trại Thung lũng Xanh">
                  Trang trại Thung lũng Xanh
                </option>
                <option value="Trang trại Nắng Hạ">Trang trại Nắng Hạ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Ngày bắt đầu
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Ngày kết thúc
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Trạng thái
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as SeasonStatus,
                  })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689]"
              >
                <option value="Đang hoạt động">Đang hoạt động</option>
                <option value="Đã kết thúc">Đã kết thúc</option>
                <option value="Sắp diễn ra">Sắp diễn ra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#115e59] mb-2">
                Mô tả
              </label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#cad5e2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009689] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Right: Plots List */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-[#e2e8f0] shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[#62748e] uppercase">
              Danh sách luống ({plots.length})
            </h3>
            <button className="text-[#009689] text-sm hover:underline font-medium flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Thêm luống
            </button>
          </div>

          {plots.length === 0 ? (
            <div className="text-center py-12 text-[#62748e]">
              Chưa có luống nào
            </div>
          ) : (
            <div className="space-y-4">
              {plots.map((plot) => (
                <div
                  key={plot.plotId}
                  className="p-4 border border-[#e2e8f0] rounded-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-[#115e59]">
                        {plot.plotName} / Khu
                      </h4>
                      <p className="text-xs text-[#62748e]">{plot.area}</p>
                    </div>
                    <button
                      onClick={() => removePlot(plot.plotId)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs text-[#62748e] mb-1">
                        Cây trồng
                      </label>
                      <select
                        value={plot.crop}
                        onChange={(e) =>
                          updatePlot(plot.plotId, "crop", e.target.value)
                        }
                        className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                      >
                        <option value="Cà Chua">Cà Chua</option>
                        <option value="Ngô">Ngô</option>
                        <option value="Bắp Cải">Bắp Cải</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#62748e] mb-1">
                        SL Trồng
                      </label>
                      <input
                        type="number"
                        value={plot.quantity}
                        onChange={(e) =>
                          updatePlot(
                            plot.plotId,
                            "quantity",
                            parseInt(e.target.value),
                          )
                        }
                        className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#62748e] mb-1">
                        Ngày gieo
                      </label>
                      <input
                        type="date"
                        value={plot.sowingDate}
                        onChange={(e) =>
                          updatePlot(plot.plotId, "sowingDate", e.target.value)
                        }
                        className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#62748e] mb-1">
                        Thu hoạch (Dự kiến)
                      </label>
                      <input
                        type="date"
                        value={plot.harvestDate}
                        onChange={(e) =>
                          updatePlot(plot.plotId, "harvestDate", e.target.value)
                        }
                        className="w-full px-2 py-1.5 text-sm border border-[#cad5e2] rounded focus:outline-none focus:ring-2 focus:ring-[#009689]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
