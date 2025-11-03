import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const LeaveHistory = ({ leaves, isAdmin, onStatusUpdate }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      case 'pending': return 'status-pending';
      default: return 'status-pending';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="icon-w-4" />;
      case 'rejected': return <XCircle className="icon-w-4" />;
      default: return <Clock className="icon-w-4" />;
    }
  };

  return (
    <div className="white-card p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {isAdmin ? 'All Leave Applications' : 'My Leave History'}
      </h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              {isAdmin && <th>Employee</th>}
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                {isAdmin && <td>{leave.employeeName}</td>}
                <td><span className="capitalize">{leave.type}</span></td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.reason}</td>
                <td>
                  <span className={`inline-flex items-center gap-1 ${getStatusStyle(leave.status)}`}>
                    {getStatusIcon(leave.status)}
                    <span className="capitalize">{leave.status}</span>
                  </span>
                </td>
                {isAdmin && leave.status === 'pending' && (
                  <td>
                    <button onClick={() => onStatusUpdate(leave.id, 'approved')} className="btn-approve">Approve</button>
                    <button onClick={() => onStatusUpdate(leave.id, 'rejected')} className="btn-reject">Reject</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {leaves.length === 0 && (
          <div className="empty-state">No leave records found</div>
        )}
      </div>
    </div>
  );
};

export default LeaveHistory;

