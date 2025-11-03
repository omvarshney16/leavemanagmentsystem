import React, { useState } from 'react';

const LeaveForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: 'annual',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (formData.startDate && formData.endDate && formData.reason) {
      onSubmit(formData);
      setFormData({ type: 'annual', startDate: '', endDate: '', reason: '' });
    }
  };

  return (
    <div className="white-card p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for Leave</h2>
      <div className="space-y-4">
        <div className="form-grid">
          <div>
            <label className="form-label">Leave Type</label>
            <select value={formData.type} onChange={(e) => handleChange('type', e.target.value)} className="form-input">
              <option value="annual">Annual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
            </select>
          </div>
          <div>
            <label className="form-label">Start Date</label>
            <input type="date" value={formData.startDate} onChange={(e) => handleChange('startDate', e.target.value)} className="form-input" />
          </div>
        </div>
        <div className="form-grid">
          <div>
            <label className="form-label">End Date</label>
            <input type="date" value={formData.endDate} onChange={(e) => handleChange('endDate', e.target.value)} className="form-input" />
          </div>
        </div>
        <div>
          <label className="form-label">Reason</label>
          <textarea value={formData.reason} onChange={(e) => handleChange('reason', e.target.value)} rows="3" className="form-input" placeholder="Please provide a brief reason..." />
        </div>
        <button onClick={handleSubmit} className="btn-submit">Submit Application</button>
      </div>
    </div>
  );
};

export default LeaveForm;

