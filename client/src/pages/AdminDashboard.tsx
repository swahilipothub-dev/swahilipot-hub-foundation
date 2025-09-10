import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin</h1>
        <div className="flex items-center space-x-4">
                    <div className="space-x-4">
            <Link to="/admin" className="text-blue-600 hover:underline">Dashboard</Link>
            <Link to="/admin/industrial-attachments" className="text-blue-600 hover:underline">Industrial Attachments</Link>
            <Link to="/admin/departments" className="text-blue-600 hover:underline">Departments</Link>
            <Link to="/admin/institutions" className="text-blue-600 hover:underline">Institutions</Link>
            <Link to="/admin/courses" className="text-blue-600 hover:underline">Courses</Link>
            <Link to="/admin/users" className="text-blue-600 hover:underline">Users</Link>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <FiLogOut className="h-4 w-4 mr-2" />
            Logout
          </button>
        </div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
