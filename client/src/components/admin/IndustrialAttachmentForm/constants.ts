import { format } from 'date-fns';
import { IndustrialAttachment } from '../../../types/industrialAttachment';

export const defaultAttachment: Partial<IndustrialAttachment> = {
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  institution: { _id: '', name: '' },
  course: { _id: '', name: '' },
  department: { _id: '', name: '' },
  residential_location: '',
  date_of_birth: format(new Date(new Date().setFullYear(new Date().getFullYear() - 20)), 'yyyy-MM-dd'),
  resume_url: '',
  cover_letter_url: '',
  gender: 'Male',
  year_of_study: 'Year 2',
  expected_graduation_date: format(new Date(new Date().setFullYear(new Date().getFullYear() + 2)), 'yyyy-MM-dd'),
  available_start_date: format(new Date(), 'yyyy-MM-dd'),
  can_attend_onsite: true,
  agree_terms: false,
  agree_communications: false,
  is_accepted: false,
  is_archived: false,
  about_yourself: '',
  community_engagement_statement: '',
  understanding_of_swahilipot: '',
};

export const TOTAL_STEPS = 4;

export const STEP_VALIDATION_FIELDS = {
  1: ['first_name', 'last_name', 'phone_number', 'email', 'residential_location', 'date_of_birth', 'gender'],
  2: ['year_of_study', 'expected_graduation_date'],
  4: ['about_yourself', 'community_engagement_statement', 'understanding_of_swahilipot'],
} as const;
