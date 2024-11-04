import React from 'react';
import { Calendar, DollarSign, Users, TrendingUp } from 'lucide-react';
import AdminChart from '../../components/admin/AdminChart';

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="12m">Last 12 months</option>
          </select>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Revenue',
            value: 'GHS 125,430',
            change: '+12.5%',
            icon: DollarSign,
            color: 'text-green-600'
          },
          {
            title: 'Ticket Sales',
            value: '1,234',
            change: '+23.1%',
            icon: TrendingUp,
            color: 'text-blue-600'
          },
          {
            title: 'Active Users',
            value: '2,543',
            change: '+18.2%',
            icon: Users,
            color: 'text-indigo-600'
          },
          {
            title: 'Events Created',
            value: '45',
            change: '+15.3%',
            icon: Calendar,
            color: 'text-purple-600'
          }
        ].map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h2>
          <AdminChart type="revenue" />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Ticket Sales Trends</h2>
          <AdminChart type="tickets" />
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Events</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-400">#{index}</span>
                  <div>
                    <p className="font-medium text-gray-900">Event Name {index}</p>
                    <p className="text-sm text-gray-500">1,234 tickets sold</p>
                  </div>
                </div>
                <span className="text-green-600">+12.5%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">User Demographics</h2>
          <div className="space-y-4">
            {[
              { label: '18-24', value: 25 },
              { label: '25-34', value: 40 },
              { label: '35-44', value: 20 },
              { label: '45-54', value: 10 },
              { label: '55+', value: 5 }
            ].map((age) => (
              <div key={age.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{age.label}</span>
                  <span className="font-medium text-gray-900">{age.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${age.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}