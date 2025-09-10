import React from 'react';
import { FiEdit, FiTrash2, FiCheck, FiX, FiArchive, FiInbox } from 'react-icons/fi';
import { IndustrialAttachment } from '../../types/industrialAttachment';

interface Props {
  attachments: IndustrialAttachment[];
  onEdit: (attachment: IndustrialAttachment) => void;
  onDelete: (id: string) => void;
  onToggleAcceptance: (id: string) => void;
  onToggleArchive: (id: string) => void;
  loading: boolean;
  showArchived?: boolean;
}

export const IndustrialAttachmentTable: React.FC<Props> = ({ 
  attachments, 
  onEdit, 
  onDelete, 
  onToggleAcceptance,
  onToggleArchive,
  loading,
  showArchived = false
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const getStatusBadge = (attachment: IndustrialAttachment) => {
    if (attachment.is_archived) {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
          Archived
        </span>
      );
    }
    
    if (attachment.is_accepted) {
      return (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Accepted
        </span>
      );
    }
    
    return (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
        Pending
      </span>
    );
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attachments.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {showArchived ? 'No archived applications found.' : 'No industrial attachment applications found.'}
                </td>
              </tr>
            ) : (
              attachments.map((attachment) => (
                <tr key={attachment._id} className={`hover:bg-gray-50 ${attachment.is_archived ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {attachment.first_name} {attachment.last_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attachment.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attachment.institution?.name || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attachment.course?.name || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attachment.department?.name || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{attachment.year_of_study}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(attachment)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-1">
                      <button
                        onClick={() => onEdit(attachment)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        title="Edit"
                      >
                        <FiEdit className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => attachment._id && onToggleAcceptance(attachment._id)}
                        className={`p-1 rounded ${
                          attachment.is_accepted 
                            ? 'text-red-600 hover:text-red-900' 
                            : 'text-green-600 hover:text-green-900'
                        }`}
                        title={attachment.is_accepted ? 'Revoke Acceptance' : 'Accept Application'}
                      >
                        {attachment.is_accepted ? <FiX className="h-4 w-4" /> : <FiCheck className="h-4 w-4" />}
                      </button>
                      
                      <button
                        onClick={() => attachment._id && onToggleArchive(attachment._id)}
                        className={`p-1 rounded ${
                          attachment.is_archived 
                            ? 'text-blue-600 hover:text-blue-900' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        title={attachment.is_archived ? 'Unarchive' : 'Archive'}
                      >
                        {attachment.is_archived ? <FiInbox className="h-4 w-4" /> : <FiArchive className="h-4 w-4" />}
                      </button>
                      
                      <button
                        onClick={() => attachment._id && onDelete(attachment._id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                        title="Delete"
                        disabled={loading}
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
