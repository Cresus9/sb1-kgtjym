import React from 'react';

interface AdminChartProps {
  type: 'revenue' | 'tickets';
}

export default function AdminChart({ type }: AdminChartProps) {
  // This is a placeholder component
  // In a real application, you would integrate with a charting library like Chart.js or Recharts
  return (
    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
      <p className="text-gray-500">
        {type === 'revenue' ? 'Revenue Chart' : 'Ticket Sales Chart'}
      </p>
    </div>
  );
}