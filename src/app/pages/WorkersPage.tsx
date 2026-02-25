import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash2, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import * as Select from "@radix-ui/react-select";

interface Worker {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: "active" | "inactive";
  dateJoined: string;
  password?: string;
}

const mockWorkers: Worker[] = [
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

const roles = ["Người Làm Nông", "Chuyên Gia"];

export function WorkersPage() {
  const [workers, setWorkers] = useState<Worker[]>(mockWorkers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "inactive">("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [workerToDelete, setWorkerToDelete] = useState<Worker | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Người Làm Nông",
    password: "",
    confirmPassword: "",
  });

  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.phone.includes(searchTerm) ||
      worker.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || worker.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const handleAddWorker = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    const newWorker: Worker = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      status: "active",
      dateJoined: new Date().toLocaleDateString("vi-VN"),
    };

    setWorkers([...workers, newWorker]);
    setIsAddModalOpen(false);
    resetForm();
  };

  const handleEditWorker = () => {
    if (!selectedWorker) return;

    setWorkers(
      workers.map((w) =>
        w.id === selectedWorker.id
          ? {
              ...w,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              role: formData.role,
            }
          : w
      )
    );
    setIsEditModalOpen(false);
    resetForm();
  };

  const handleDeleteWorker = () => {
    if (!workerToDelete) return;
    setWorkers(workers.filter((w) => w.id !== workerToDelete.id));
    setIsDeleteDialogOpen(false);
    setWorkerToDelete(null);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "Người Làm Nông",
      password: "",
      confirmPassword: "",
    });
  };

  const openViewModal = (worker: Worker) => {
    setSelectedWorker(worker);
    setIsViewModalOpen(true);
  };

  const openEditModal = (worker: Worker) => {
    setSelectedWorker(worker);
    setFormData({
      name: worker.name,
      email: worker.email,
      phone: worker.phone,
      role: worker.role,
      password: "",
      confirmPassword: "",
    });
    setIsEditModalOpen(true);
  };

  const openDeleteDialog = (worker: Worker) => {
    setWorkerToDelete(worker);
    setIsDeleteDialogOpen(true);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#115e59]">Quản lý nhân viên</h1>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#009689] text-white px-4 py-2 rounded-[10px] flex items-center gap-2 hover:bg-[#007f73] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Thêm nhân viên
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-[10px] p-4 shadow-sm border border-[#e2e8f0]">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#90A1B9]" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, sdt hoặc vai trò..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#cad5e2] rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus("all")}
              className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-colors ${
                filterStatus === "all"
                  ? "bg-[#009689] text-white"
                  : "bg-[#f1f5f9] text-[#314158] hover:bg-[#e2e8f0]"
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setFilterStatus("active")}
              className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-colors ${
                filterStatus === "active"
                  ? "bg-[#009689] text-white"
                  : "bg-[#f1f5f9] text-[#314158] hover:bg-[#e2e8f0]"
              }`}
            >
              Hoạt động
            </button>
            <button
              onClick={() => setFilterStatus("inactive")}
              className={`px-4 py-2 rounded-[10px] text-sm font-medium transition-colors ${
                filterStatus === "inactive"
                  ? "bg-[#009689] text-white"
                  : "bg-[#f1f5f9] text-[#314158] hover:bg-[#e2e8f0]"
              }`}
            >
              Không hoạt động
            </button>
          </div>
        </div>
      </div>

      {/* Workers Table */}
      <div className="bg-white rounded-[10px] shadow-sm border border-[#e2e8f0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-normal text-[#62748e]">Họ Tên</th>
                <th className="text-left px-6 py-4 text-sm font-normal text-[#62748e]">Email</th>
                <th className="text-left px-6 py-4 text-sm font-normal text-[#62748e]">Số điện thoại</th>
                <th className="text-left px-6 py-4 text-sm font-normal text-[#62748e]">Vai trò</th>
                <th className="text-left px-6 py-4 text-sm font-normal text-[#62748e]">Trạng thái</th>
                <th className="text-center px-6 py-4 text-sm font-normal text-[#62748e]">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredWorkers.map((worker) => (
                <tr key={worker.id} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#009689] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {getInitials(worker.name)}
                      </div>
                      <span className="font-bold text-[#0f766e]">{worker.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#45556c]">{worker.email}</td>
                  <td className="px-6 py-4 text-[#45556c]">{worker.phone}</td>
                  <td className="px-6 py-4 text-[#45556c]">{worker.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded text-sm ${
                        worker.status === "active"
                          ? "bg-[#dcfce7] text-[#008236]"
                          : "bg-[#f1f5f9] text-[#64748b]"
                      }`}
                    >
                      {worker.status === "active" ? "Hoạt động" : "Không hoạt động"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => openViewModal(worker)}
                        className="p-2 text-[#009689] hover:bg-[#dcfce7] rounded-[10px] transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openEditModal(worker)}
                        className="p-2 text-[#009689] hover:bg-[#dcfce7] rounded-[10px] transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openDeleteDialog(worker)}
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
      </div>

      {/* Add Worker Modal */}
      <Dialog.Root open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-semibold text-slate-900">
                Thêm nhân viên mới
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Form để thêm nhân viên mới vào hệ thống
            </Dialog.Description>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ tên đầy đủ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="worker@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Vai Trò</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role} className="text-slate-900 bg-white">
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleAddWorker}
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors"
              >
                Tạo mới
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* View Worker Modal */}
      <Dialog.Root open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-semibold text-slate-900">
                Chi tiết nhân viên
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Xem thông tin chi tiết của nhân viên
            </Dialog.Description>

            {selectedWorker && (
              <div className="space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#009689] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {getInitials(selectedWorker.name)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Họ và tên</label>
                  <p className="text-slate-900">{selectedWorker.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Email</label>
                  <p className="text-slate-900">{selectedWorker.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">
                    Số Điện Thoại
                  </label>
                  <p className="text-slate-900">{selectedWorker.phone}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">Vai trò</label>
                  <p className="text-slate-900">{selectedWorker.role}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-500 mb-1">
                      Trạng thái
                    </label>
                    <span
                      className={`inline-block px-3 py-1 rounded text-sm ${
                        selectedWorker.status === "active"
                          ? "bg-[#dcfce7] text-[#008236]"
                          : "bg-[#f1f5f9] text-[#64748b]"
                      }`}
                    >
                      {selectedWorker.status === "active" ? "Hoạt động" : "Không hoạt động"}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-500 mb-1">
                      Ngày gia nhập
                    </label>
                    <p className="text-slate-900">{selectedWorker.dateJoined}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsViewModalOpen(false)}
                  className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors mt-6"
                >
                  Đóng
                </button>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Edit Worker Modal */}
      <Dialog.Root open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <Dialog.Title className="text-lg font-semibold text-slate-900">
                Chỉnh sửa thông tin
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-slate-400 hover:text-slate-600 rounded">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Form để chỉnh sửa thông tin nhân viên
            </Dialog.Description>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Họ và tên
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Vai trò</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role} className="text-slate-900 bg-white">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleEditWorker}
                className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-[#009689] text-white hover:bg-[#007f73] transition-colors"
              >
                Lưu thay đổi
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Delete Confirmation Dialog */}
      <AlertDialog.Root open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black/50 z-40 animate-in fade-in" />
          <AlertDialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-xl shadow-2xl p-6 animate-in fade-in zoom-in-95">
            <AlertDialog.Title className="text-lg font-semibold text-slate-900 mb-2">
              Xác nhận xóa nhân viên
            </AlertDialog.Title>
            <AlertDialog.Description className="text-sm text-slate-600 mb-6">
              Bạn có chắc chắn muốn xóa nhân viên{" "}
              <span className="font-semibold">{workerToDelete?.name}</span> không? Hành động này
              không thể hoàn tác.
            </AlertDialog.Description>
            <div className="flex gap-3 justify-end">
              <AlertDialog.Cancel asChild>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                  Hủy bỏ
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  onClick={handleDeleteWorker}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Xóa nhân viên
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}