import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin</h1>
        <div className="space-x-4">
          <Link to="/admin/industrial-attachments" className="text-blue-600 hover:underline">Industrial Attachments</Link>
          <Link to="/admin/departments" className="text-blue-600 hover:underline">Departments</Link>
          <Link to="/admin/institutions" className="text-blue-600 hover:underline">Institutions</Link>
          <Link to="/admin/courses" className="text-blue-600 hover:underline">Courses</Link>
          <Link to="/admin/users" className="text-blue-600 hover:underline">Users</Link>
        </div>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
