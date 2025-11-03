import AuthService from './AuthService';

const LeaveService = {
  getLeaves: () => {
    const stored = localStorage.getItem('leaves');
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        employeeId: 2,
        employeeName: 'John Doe',
        type: 'annual',
        startDate: '2025-10-15',
        endDate: '2025-10-17',
        reason: 'Family vacation',
        status: 'approved',
        appliedDate: '2025-10-01',
      },
      {
        id: 2,
        employeeId: 2,
        employeeName: 'Om Varshney',
        type: 'sick',
        startDate: '2025-09-20',
        endDate: '2025-09-21',
        reason: 'Medical appointment',
        status: 'approved',
        appliedDate: '2025-09-18',
      },
    ];
  },

  saveLeaves: (leaves) => {
    localStorage.setItem('leaves', JSON.stringify(leaves));
  },

  getLeaveHistory: (userId) => {
    const user = AuthService.currentUser;
    const allLeaves = LeaveService.getLeaves();
    if (user.role === 'admin') {
      return allLeaves;
    }
    return allLeaves.filter((leave) => leave.employeeId === userId);
  },

  applyLeave: (leaveData) => {
    const allLeaves = LeaveService.getLeaves();
    const newLeave = {
      id: allLeaves.length + 1,
      employeeId: AuthService.currentUser.id,
      employeeName: AuthService.currentUser.name,
      ...leaveData,
      status: 'pending',
      appliedDate: new Date().toISOString().split('T')[0],
    };
    allLeaves.push(newLeave);
    LeaveService.saveLeaves(allLeaves);
    return newLeave;
  },

  updateLeaveStatus: (leaveId, status) => {
    const allLeaves = LeaveService.getLeaves();
    const leave = allLeaves.find((l) => l.id === leaveId);
    if (leave) {
      leave.status = status;
      LeaveService.saveLeaves(allLeaves);
      return leave;
    }
    return null;
  },
};

export default LeaveService;

