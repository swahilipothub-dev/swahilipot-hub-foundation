import { IndustrialAttachment } from '../../../types/industrialAttachment';

export interface Props {
  attachment?: Partial<IndustrialAttachment>;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export interface StepProps {
  currentAttachment: Partial<IndustrialAttachment>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onReferenceChange: (field: 'institution' | 'course' | 'department', value: string) => void;
  onCheckboxChange: (field: string, value: boolean) => void;
}

export interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  icon?: React.ReactNode;
}
