import React from 'react';
import { Users, Calendar, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminMetricCard from '../../components/admin/AdminMetricCard';
import AdminChart from '../../components/admin/AdminChart';

export default function AdminDashboard() {
  const metrics = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'indigo'
    },
    {
      title: 'Active Events',
      value: '45',
      change: '+23.1%',
      trend: 'up',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Total Revenue',
      value: 'GHS 125,430',
      change: '-4.3%',
      trend: 'down',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Ticket Sales',
      value: '1,234',
      change: '+18.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Download Report
          </button>
          <Link
            to="/admin/events/new"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Create Event
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <AdminMetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h2>
          <AdminChart type="revenue" />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ticket Sales</h2>
          <AdminChart type="tickets" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">New ticket purchase</p>
                    <p className="text-sm text-gray-600">John Doe purchased 2 VIP tickets</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}