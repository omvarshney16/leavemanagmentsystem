import React from 'react';
import { Calendar, AlertCircle, Clock } from 'lucide-react';

const Dashboard = ({ user }) => (
  <div className="dashboard-grid">
    <div className="card-green p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-green-100 text-sm">Annual Leave</p>
          <p className="text-3xl font-bold mt-1">{user.leaveBalance.annual}</p>
          <p className="text-green-100 text-xs mt-1">Total days </p>
        </div>
        <Calendar className="icon-w-12 text-green-200" />
      </div>
    </div>

    <div className="card-blue p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-blue-100 text-sm">Sick Leave</p>
          <p className="text-3xl font-bold mt-1">{user.leaveBalance.sick}</p>
          <p className="text-blue-100 text-xs mt-1">Total days </p>
        </div>
        <AlertCircle className="icon-w-12 text-blue-200" />
      </div>
    </div>

    <div className="card-purple p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-purple-100 text-sm">Casual Leave</p>
          <p className="text-3xl font-bold mt-1">{user.leaveBalance.casual}</p>
          <p className="text-purple-100 text-xs mt-1">Totaldays</p>
        </div>
        <Clock className="icon-w-12 text-purple-200" />
      </div>
    </div>
  </div>
);

export default Dashboard;


