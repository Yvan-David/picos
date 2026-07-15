import { ReactNode } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  icon: ReactNode;
}

export default function MetricCard({ label, value, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-[#f7c9d8]/30 flex items-center justify-center text-[#b76e79] shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl text-gray-900">{value}</p>
      </div>
    </div>
  );
}
