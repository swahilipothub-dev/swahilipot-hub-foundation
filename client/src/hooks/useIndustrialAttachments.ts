import { useState, useEffect, useCallback } from 'react';
import { industrialAttachmentsApi } from '../services/adminApi';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { IndustrialAttachment } from '../types/industrialAttachment';

export const useIndustrialAttachments = (includeArchived: boolean = false) => {
  const [attachments, setAttachments] = useState<IndustrialAttachment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAttachments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await industrialAttachmentsApi.getAll(includeArchived);
      setAttachments(Array.isArray(data) ? data : []);
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to fetch applications';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [includeArchived]);

  const deleteAttachment = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this application? This action cannot be undone.')) return;
    
    try {
      setLoading(true);
      await industrialAttachmentsApi.delete(id);
      toast.success('Application deleted successfully');
      await fetchAttachments();
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to delete application';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const toggleAcceptance = async (id: string) => {
    try {
      setLoading(true);
      const response = await industrialAttachmentsApi.toggleAcceptance(id);
      const { is_accepted, message } = response.data;
      
      // Update the local state
      setAttachments(prev => prev.map(attachment => 
        attachment._id === id 
          ? { ...attachment, is_accepted } 
          : attachment
      ));
      
      toast.success(message);
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to update acceptance status';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const toggleArchive = async (id: string) => {
    try {
      setLoading(true);
      const response = await industrialAttachmentsApi.toggleArchive(id);
      const { is_archived, message } = response.data;
      
      // Update the local state
      setAttachments(prev => prev.map(attachment => 
        attachment._id === id 
          ? { ...attachment, is_archived } 
          : attachment
      ));
      
      toast.success(message);
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to update archive status';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = async () => {
    try {
      setLoading(true);
      const response = await industrialAttachmentsApi.exportCSV();
      const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `industrial_attachments_${format(new Date(), 'yyyyMMdd_HHmmss')}.csv`);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
      toast.success('Export completed successfully');
    } catch (err: unknown) {
      const errorMessage = (err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to export data';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttachments();
  }, [includeArchived, fetchAttachments]);

  return {
    attachments,
    loading,
    error,
    deleteAttachment,
    toggleAcceptance,
    toggleArchive,
    exportCSV,
    refetch: fetchAttachments
  };
};
