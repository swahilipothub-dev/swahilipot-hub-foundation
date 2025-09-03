import React, { useState, useEffect } from 'react';
import { institutionsApi } from '../../services/adminApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit, FiTrash2, FiDownload, FiPlus, FiSearch, FiX } from 'react-icons/fi';

interface Institution {
  _id: string;
  name: string;
  county: string;
  createdAt: string;
  updatedAt: string;
}

const Institutions: React.FC = () => {
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentInstitution, setCurrentInstitution] = useState<Partial<Institution> | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Fetch all institutions
  const fetchInstitutions = async () => {
    try {
      setLoading(true);
      const response = await institutionsApi.getAll();
      setInstitutions(response.data);
    } catch (err) {
      setError('Failed to fetch institutions');
      toast.error('Failed to load institutions');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInstitution) return;

    try {
      if (currentInstitution._id) {
        // Update existing institution
        await institutionsApi.update(currentInstitution._id, currentInstitution);
        toast.success('Institution updated successfully');
      } else {
        // Create new institution
        await institutionsApi.create(currentInstitution);
        toast.success('Institution created successfully');
      }
      setIsModalOpen(false);
      fetchInstitutions();
    } catch (err) {
      toast.error('Failed to save institution');
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this institution?')) {
      try {
        setIsDeleting(true);
        await institutionsApi.delete(id);
        toast.success('Institution deleted successfully');
        fetchInstitutions();
      } catch (err) {
        toast.error('Failed to delete institution');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  // Export to CSV
  const handleExport = async () => {
    try {
      const response = await institutionsApi.exportCSV();
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'institutions.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Export completed successfully');
    } catch (err) {
      toast.error('Failed to export data');
    }
  };

  // Filter institutions based on search term
  const filteredInstitutions = institutions.filter(
    (institution) =>
      institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institution.county.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchInstitutions();
  }, []);

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Institutions</h1>
        <p className="text-gray-600">Manage learning institutions and their information</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <FiPlus className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Institutions</dt>
                  <dd className="text-lg font-medium text-gray-900">{institutions.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search institutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <FiX className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleExport}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiDownload className="h-4 w-4 mr-2" />
                Export CSV
              </button>
              <button
                onClick={() => {
                  setCurrentInstitution(null);
                  setIsModalOpen(true);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FiPlus className="h-4 w-4 mr-2" />
                Add Institution
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Institution Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  County
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInstitutions.map((institution) => (
                <tr key={institution._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{institution.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{institution.county}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(institution.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          setCurrentInstitution(institution);
                          setIsModalOpen(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FiEdit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(institution._id)}
                        disabled={isDeleting}
                        className="text-red-600 hover:text-red-900 disabled:opacity-50"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInstitutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No institutions found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {currentInstitution?._id ? 'Edit Institution' : 'Add New Institution'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={currentInstitution?.name || ''}
                    onChange={(e) => setCurrentInstitution({ ...currentInstitution, name: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                    County
                  </label>
                  <select
                    id="county"
                    required
                    value={currentInstitution?.county || ''}
                    onChange={(e) => setCurrentInstitution({ ...currentInstitution, county: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a county</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kwale">Kwale</option>
                    <option value="Kilifi">Kilifi</option>
                    <option value="Tana River">Tana River</option>
                    <option value="Lamu">Lamu</option>
                    <option value="Taita-Taveta">Taita-Taveta</option>
                    <option value="Garissa">Garissa</option>
                    <option value="Wajir">Wajir</option>
                    <option value="Mandera">Mandera</option>
                    <option value="Marsabit">Marsabit</option>
                    <option value="Isiolo">Isiolo</option>
                    <option value="Meru">Meru</option>
                    <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                    <option value="Embu">Embu</option>
                    <option value="Kitui">Kitui</option>
                    <option value="Machakos">Machakos</option>
                    <option value="Makueni">Makueni</option>
                    <option value="Nyandarua">Nyandarua</option>
                    <option value="Nyeri">Nyeri</option>
                    <option value="Kirinyaga">Kirinyaga</option>
                    <option value="Murang'a">Murang'a</option>
                    <option value="Kiambu">Kiambu</option>
                    <option value="Turkana">Turkana</option>
                    <option value="West Pokot">West Pokot</option>
                    <option value="Samburu">Samburu</option>
                    <option value="Trans-Nzoia">Trans-Nzoia</option>
                    <option value="Uasin Gishu">Uasin Gishu</option>
                    <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
                    <option value="Nandi">Nandi</option>
                    <option value="Baringo">Baringo</option>
                    <option value="Laikipia">Laikipia</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Narok">Narok</option>
                    <option value="Kajiado">Kajiado</option>
                    <option value="Kericho">Kericho</option>
                    <option value="Bomet">Bomet</option>
                    <option value="Kakamega">Kakamega</option>
                    <option value="Vihiga">Vihiga</option>
                    <option value="Bungoma">Bungoma</option>
                    <option value="Busia">Busia</option>
                    <option value="Siaya">Siaya</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Homa Bay">Homa Bay</option>
                    <option value="Migori">Migori</option>
                    <option value="Kisii">Kisii</option>
                    <option value="Nyamira">Nyamira</option>
                    <option value="Nairobi">Nairobi</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {currentInstitution?._id ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Institutions;
