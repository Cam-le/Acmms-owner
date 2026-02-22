import { Construction } from "lucide-react";

export function DashboardPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-[20px] shadow-sm border border-[#e2e8f0]">
      <div className="w-24 h-24 bg-[#dcfce7] rounded-full flex items-center justify-center mb-6">
        <Construction className="w-12 h-12 text-[#009689]" />
      </div>
      <h2 className="text-2xl font-bold text-[#115e59] mb-2">
        Chức năng đang phát triển
      </h2>
      <p className="text-[#64748b] max-w-md">
        Chúng tôi đang làm việc chăm chỉ để hoàn thiện tính năng này. Vui lòng quay lại sau!
      </p>
    </div>
  );
}
