export type Gender = 'Male' | 'Female';
export type YearOfStudy = 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4' | 'Year 5' | 'Year 6';

export interface IndustrialAttachment {
  _id?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  phone_number: string;
  email: string;
  institution: { _id: string; name: string };
  course: { _id: string; name: string };
  department: { _id: string; name: string };
  residential_location: string;
  date_of_birth: string;
  resume_url: string;
  cover_letter_url: string;
  gender: Gender;
  year_of_study: YearOfStudy;
  expected_graduation_date: string;
  available_start_date?: string;
  can_attend_onsite: boolean;
  agree_terms: boolean;
  agree_communications: boolean;
  is_accepted: boolean;
  is_archived: boolean;
  about_yourself: string;
  community_engagement_statement: string;
  understanding_of_swahilipot: string;
  linkedin_url?: string;
  github_url?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const genderOptions = [
  { value: 'Male' as Gender, label: 'Male' },
  { value: 'Female' as Gender, label: 'Female' },
];

export const yearOfStudyOptions = [
  { value: 'Year 1' as YearOfStudy, label: 'Year 1' },
  { value: 'Year 2' as YearOfStudy, label: 'Year 2' },
  { value: 'Year 3' as YearOfStudy, label: 'Year 3' },
  { value: 'Year 4' as YearOfStudy, label: 'Year 4' },
  { value: 'Year 5' as YearOfStudy, label: 'Year 5' },
  { value: 'Year 6' as YearOfStudy, label: 'Year 6' },
];
