import React, { useState } from 'react';
import { User } from 'lucide-react';
import AuthService from '../services/AuthService';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email && password) {
      const user = AuthService.login(email, password);
      if (user) onLogin(user);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-login flex items-center justify-center p-4">
      <div className="login-container p-8">
        <div className="text-center mb-8">
          <div className="inline-block icon-container-indigo p-3">
            <User className="icon-w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Leave Management</h1>
          <p className="text-gray-600 mt-2">Sign in to manage your leaves</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress} className="form-input" placeholder="your.email@company.com" />
          </div>
          
          <div>
            <label className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress} className="form-input" placeholder="••••••••" />
          </div>
          
          <button onClick={handleSubmit} className="btn-primary">Sign In</button>
        </div>
        
        <div className="mt-6 demo-box p-4">
          <p className="text-sm text-gray-700 font-medium mb-2">Demo Credentials:</p>
          <p className="text-xs text-gray-600">Employee: any email</p>
          <p className="text-xs text-gray-600">Admin: admin@penthara.com</p>
          <p className="text-xs text-gray-500 mt-1">Password: any</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
