import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
  {/* Sidebar */}
  <div className="w-64 bg-white shadow-md">
    <div className="p-4 border-b">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
    </div>
    <nav className="p-4 space-y-2">
      <Link to="/admin/industrial-attachments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Industrial Attachments</Link>
      <Link to="/admin/departments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Departments</Link>
      <Link to="/admin/institutions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Institutions</Link>
      <Link to="/admin/courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Courses</Link>
      <Link to="/admin/users" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Users</Link>
    </nav>
  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col overflow-hidden">
    {/* Header */}
    {/* <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-lg font-medium text-gray-900">
          {location.pathname.split('/').pop()?.replace(/-/g, ' ')}
        </h2>
      </div>
    </header> */}

    {/* Scrollable content */}
    <main className="flex-1 overflow-y-auto p-4 md:p-6">
      <Outlet />
    </main>
  </div>
</div>
  );
};

export default AdminDashboard;
