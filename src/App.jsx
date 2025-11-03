import React, { useState, useEffect } from 'react';
import { Calendar, LogOut } from 'lucide-react';
import styles from './styles';
import AuthService from './services/AuthService';
import LeaveService from './services/LeaveService';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import LeaveForm from './components/LeaveForm';
import LeaveHistory from './components/LeaveHistory';

const App = () => {
  const [user, setUser] = useState(null);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    if (user) {
      setLeaves(LeaveService.getLeaveHistory(user.id));
    }
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUser(null);
    setLeaves([]);
  };

  const handleLeaveSubmit = (leaveData) => {
    const newLeave = LeaveService.applyLeave(leaveData);
    setLeaves([newLeave, ...leaves]);
    alert('Leave application submitted successfully!');
  };

  const handleStatusUpdate = (leaveId, status) => {
    LeaveService.updateLeaveStatus(leaveId, status);
    setLeaves(LeaveService.getLeaveHistory(user.id));
    alert(`Leave ${status} successfully!`);
  };

  if (!user) {
    return (
      <>
        <style>{styles}</style>
        <LoginPage onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gray-50">
        <header className="header">
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="icon-container-rounded p-2">
                  <Calendar className="icon-w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Leave Management</h1>
                  <p className="text-sm text-gray-600">{user.role === 'admin' ? 'Admin Panel' : 'Employee Portal'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <button onClick={handleLogout} className="btn-logout p-2">
                  <LogOut className="icon-w-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="container px-4 py-8">
          {user.role !== 'admin' && <Dashboard user={user} />}
          {user.role !== 'admin' && <LeaveForm onSubmit={handleLeaveSubmit} />}
          <LeaveHistory 
            leaves={leaves} 
            isAdmin={user.role === 'admin'}
            onStatusUpdate={handleStatusUpdate}
          />
        </main>
      </div>
    </>
  );
};

export default App;


