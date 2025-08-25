import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { FiDownload, FiPlus, FiArchive, FiInbox, FiSearch, FiFilter } from 'react-icons/fi';
import { format } from 'date-fns';
import { useIndustrialAttachments } from '../../hooks/useIndustrialAttachments';
import { IndustrialAttachmentForm } from '../../components/admin/IndustrialAttachmentForm';
import { IndustrialAttachmentTable } from '../../components/admin/IndustrialAttachmentTable';
import { IndustrialAttachment } from '../../types/industrialAttachment';

const IndustrialAttachments: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'accepted' | 'archived'>('all');
  
  const { 
    attachments, 
    loading, 
    error, 
    deleteAttachment, 
    toggleAcceptance,
    toggleArchive,
    exportCSV, 
    refetch 
  } = useIndustrialAttachments(showArchived);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAttachment, setCurrentAttachment] = useState<Partial<IndustrialAttachment> | undefined>(undefined);

  // Filter attachments based on search term and status
  const filteredAttachments = useMemo(() => {
    let filtered = attachments;

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(attachment => 
        attachment.first_name.toLowerCase().includes(term) ||
        attachment.last_name.toLowerCase().includes(term) ||
        attachment.email.toLowerCase().includes(term) ||
        attachment.institution?.name.toLowerCase().includes(term) ||
        attachment.course?.name.toLowerCase().includes(term) ||
        attachment.department?.name.toLowerCase().includes(term)
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      switch (statusFilter) {
        case 'pending':
          filtered = filtered.filter(attachment => !attachment.is_accepted && !attachment.is_archived);
          break;
        case 'accepted':
          filtered = filtered.filter(attachment => attachment.is_accepted && !attachment.is_archived);
          break;
        case 'archived':
          filtered = filtered.filter(attachment => attachment.is_archived);
          break;
      }
    }

    return filtered;
  }, [attachments, searchTerm, statusFilter]);

  const handleEdit = (attachment: IndustrialAttachment) => {
    setCurrentAttachment({
      ...attachment,
      date_of_birth: attachment.date_of_birth ? format(new Date(attachment.date_of_birth), 'yyyy-MM-dd') : '',
      expected_graduation_date: attachment.expected_graduation_date ? format(new Date(attachment.expected_graduation_date), 'yyyy-MM-dd') : '',
      available_start_date: attachment.available_start_date ? format(new Date(attachment.available_start_date), 'yyyy-MM-dd') : '',
    });
    setIsModalOpen(true);
  };

  const handleCreateNew = () => {
    setCurrentAttachment(undefined);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentAttachment(undefined);
  };

  const handleSuccess = () => {
    refetch();
  };

  const handleToggleArchived = () => {
    setShowArchived(!showArchived);
    setStatusFilter('all'); // Reset status filter when switching views
    setSearchTerm(''); // Reset search when switching views
  };

  if (error) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeAttachments = attachments.filter(attachment => !attachment.is_archived);
  const archivedAttachments = attachments.filter(attachment => attachment.is_archived);
  const pendingAttachments = activeAttachments.filter(attachment => !attachment.is_accepted);
  const acceptedAttachments = activeAttachments.filter(attachment => attachment.is_accepted);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold text-gray-900">
            {showArchived ? 'Archived Applications' : 'Industrial Attachment Applications'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {showArchived 
              ? `Manage archived applications (${archivedAttachments.length} archived)`
              : `Manage student applications for industrial attachments (${activeAttachments.length} active)`
            }
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleToggleArchived}
            className={`inline-flex items-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              showArchived
                ? 'border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            {showArchived ? (
              <>
                <FiInbox className="-ml-1 mr-2 h-5 w-5" />
                Show Active
              </>
            ) : (
              <>
                <FiArchive className="-ml-1 mr-2 h-5 w-5" />
                Show Archived
              </>
            )}
          </button>
          
          <button
            onClick={exportCSV}
            disabled={loading || attachments.length === 0}
            className={`inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${(loading || attachments.length === 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FiDownload className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Export CSV
          </button>
          
          {!showArchived && (
            <button
              onClick={handleCreateNew}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiPlus className="-ml-1 mr-2 h-5 w-5" />
              Add New
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      {!showArchived && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <FiInbox className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Active</dt>
                    <dd className="text-lg font-medium text-gray-900">{activeAttachments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <FiSearch className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending</dt>
                    <dd className="text-lg font-medium text-gray-900">{pendingAttachments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <FiPlus className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Accepted</dt>
                    <dd className="text-lg font-medium text-gray-900">{acceptedAttachments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-500 rounded-md flex items-center justify-center">
                    <FiArchive className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Archived</dt>
                    <dd className="text-lg font-medium text-gray-900">{archivedAttachments.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, institution, course, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiFilter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              {showArchived && <option value="archived">Archived</option>}
            </select>
          </div>
        </div>
      </div>

      <IndustrialAttachmentTable
        attachments={filteredAttachments}
        onEdit={handleEdit}
        onDelete={deleteAttachment}
        onToggleAcceptance={toggleAcceptance}
        onToggleArchive={toggleArchive}
        loading={loading}
        showArchived={showArchived}
      />

      <IndustrialAttachmentForm
        attachment={currentAttachment}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default IndustrialAttachments;
