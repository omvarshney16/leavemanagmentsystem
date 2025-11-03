import React, { useState, useEffect } from 'react';
import { Calendar, LogOut } from 'lucide-react';
import styles from './styles';
import AuthService from './services/AuthService';
import LeaveService from './services/LeaveService';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashBoard';
import LeaveForm from './components/LeaveForm';
import LeaveHistory from './components/LeaveHistory';

const App = () => {
  const [user, setUser] = useState(null);
  const [leaves, setLeaves] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState({
    annual: 15,
    sick: 10,
    casual: 5,
  });

  // ✅ Helper to calculate total leave days (inclusive)
  const calculateLeaveDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  // ✅ Helper to recalculate balance based on approved leaves
  const recalculateBalance = (userId) => {
    const userLeaves = LeaveService.getLeaveHistory(userId);
    const initialBalance = {
      annual: 15,
      sick: 10,
      casual: 5,
    };

    userLeaves.forEach((leave) => {
      if (leave.status === 'approved') {
        const days = calculateLeaveDays(leave.startDate, leave.endDate);
        initialBalance[leave.type] = Math.max(
          0,
          initialBalance[leave.type] - days
        );
      }
    });

    return initialBalance;
  };

  useEffect(() => {
    if (user) {
      const history = LeaveService.getLeaveHistory(user.id);
      setLeaves(history);
      setLeaveBalance(recalculateBalance(user.id));
    }
  }, [user]);

  // ✅ Handle login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // ✅ Handle logout
  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setLeaves([]);
    setLeaveBalance({
      annual: 15,
      sick: 10,
      casual: 5,
    });
  };

  // ✅ Handle new leave submission
  const handleLeaveSubmit = (leaveData) => {
    const days = calculateLeaveDays(leaveData.startDate, leaveData.endDate);

    if (leaveBalance[leaveData.type] < days) {
      alert(
        `Insufficient ${leaveData.type} leave balance! You have ${leaveBalance[leaveData.type]} days remaining.`
      );
      return;
    }

    const newLeave = LeaveService.applyLeave(leaveData);
    setLeaves([newLeave, ...leaves]);
    alert('Leave application submitted successfully!');
  };

  // ✅ Handle leave approval/rejection
  const handleStatusUpdate = (leaveId, status) => {
    LeaveService.updateLeaveStatus(leaveId, status);
    const updatedLeaves = LeaveService.getLeaveHistory(user.id);
    setLeaves(updatedLeaves);

    // 🔥 Recalculate leave balance IMMEDIATELY after approval
    const updatedBalance = recalculateBalance(user.id);
    setLeaveBalance(updatedBalance);

    alert(`Leave ${status} successfully!`);
  };

  return (
    <div>
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard
          user={user}
          leaveBalance={leaveBalance}
          leaves={leaves}
          onLogout={handleLogout}
          onLeaveSubmit={handleLeaveSubmit}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

export default App;

