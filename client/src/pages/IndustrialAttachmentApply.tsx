declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const initialForm = {
  firstName: '',
  middleName: '',
  lastName: '',
  phone: '',
  email: '',
  institution: '',
  course: '',
  location: '',
  dob: '',
  resumeUrl: '',
  coverLetterUrl: '',
  gender: '',
  department: '',
  yearOfStudy: '',
  graduationDate: '',
  availableStart: '',
  onsite: false,
  agreeTerms: false,
  agreeComms: false,
  about: '',
  community: '',
  understanding: '',
  linkedin: '',
  github: '',
};

const IndustrialAttachmentApply: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [institutions, setInstitutions] = useState([]);
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/institutions').then(r => r.json()).then(setInstitutions);
    fetch('/api/departments').then(r => r.json()).then(setDepartments);
  }, []);

  useEffect(() => {
    if (form.institution) {
      fetch(`/api/courses?institution=${form.institution}`).then(r => r.json()).then(setCourses);
    } else {
      setCourses([]);
    }
  }, [form.institution]);

  const validate = () => {
    const e: any = {};
    if (!form.firstName) e.firstName = 'Required';
    if (!form.lastName) e.lastName = 'Required';
    if (!form.phone) e.phone = 'Required';
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.institution) e.institution = 'Required';
    if (!form.course) e.course = 'Required';
    if (!form.location) e.location = 'Required';
    if (!form.dob) e.dob = 'Required';
    if (!form.resumeUrl || !/^https?:\/\/.+/.test(form.resumeUrl)) e.resumeUrl = 'Valid URL required';
    if (!form.coverLetterUrl || !/^https?:\/\/.+/.test(form.coverLetterUrl)) e.coverLetterUrl = 'Valid URL required';
    if (!form.gender) e.gender = 'Required';
    if (!form.department) e.department = 'Required';
    if (!form.yearOfStudy) e.yearOfStudy = 'Required';
    if (!form.graduationDate) e.graduationDate = 'Required';
    if (!form.availableStart) e.availableStart = 'Required';
    if (!form.agreeTerms) e.agreeTerms = 'You must agree to terms';
    if (!form.about) e.about = 'Required';
    if (!form.community) e.community = 'Required';
    if (!form.understanding) e.understanding = 'Required';
    if (!form.linkedin || !/^https?:\/\/.+/.test(form.linkedin)) e.linkedin = 'Valid URL required';
    return e;
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setLoading(true);
    try {
      const res = await fetch('/api/industrial-attachments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.status === 201) {
        const data = await res.json();
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'industrial_attachment_apply');
        }
        navigate('/industrial-attachment/success', { state: { ref: data.referenceId } });
      } else {
        const err = await res.json();
        setErrors(err.errors || { general: err.message || 'Server error' });
      }
    } catch {
      setErrors({ general: 'Network/server error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <form className="max-w-2xl mx-auto py-10 px-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Industrial Attachment Application</h2>
          {errors.general && <div className="bg-red-100 text-red-700 p-2 mb-4">{errors.general}</div>}
          <div className="mb-4"><label>First Name *</label><input name="firstName" value={form.firstName} onChange={handleChange} className="border p-2 w-full" />{errors.firstName && <span className="text-red-600 text-sm">{errors.firstName}</span>}</div>
          <div className="mb-4"><label>Middle Name</label><input name="middleName" value={form.middleName} onChange={handleChange} className="border p-2 w-full" /></div>
          <div className="mb-4"><label>Last Name *</label><input name="lastName" value={form.lastName} onChange={handleChange} className="border p-2 w-full" />{errors.lastName && <span className="text-red-600 text-sm">{errors.lastName}</span>}</div>
          <div className="mb-4"><label>Phone Number *</label><input name="phone" value={form.phone} onChange={handleChange} className="border p-2 w-full" />{errors.phone && <span className="text-red-600 text-sm">{errors.phone}</span>}</div>
          <div className="mb-4"><label>Email *</label><input name="email" value={form.email} onChange={handleChange} className="border p-2 w-full" />{errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}</div>
          <div className="mb-4"><label>Learning Institution *</label><select name="institution" value={form.institution} onChange={handleChange} className="border p-2 w-full"><option value="">Select institution</option>{institutions.map((i:any) => <option key={i.id} value={i.id}>{i.name}</option>)}</select>{errors.institution && <span className="text-red-600 text-sm">{errors.institution}</span>}</div>
          <div className="mb-4"><label>Course *</label><select name="course" value={form.course} onChange={handleChange} className="border p-2 w-full" disabled={!form.institution}><option value="">Select course</option>{courses.map((c:any) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>{errors.course && <span className="text-red-600 text-sm">{errors.course}</span>}</div>
          <div className="mb-4"><label>Residential Location/Town *</label><input name="location" value={form.location} onChange={handleChange} className="border p-2 w-full" />{errors.location && <span className="text-red-600 text-sm">{errors.location}</span>}</div>
          <div className="mb-4"><label>Date of Birth *</label><input type="date" name="dob" value={form.dob} onChange={handleChange} className="border p-2 w-full" />{errors.dob && <span className="text-red-600 text-sm">{errors.dob}</span>}</div>
          <div className="mb-4"><label>Resume/CV URL *</label><input name="resumeUrl" value={form.resumeUrl} onChange={handleChange} className="border p-2 w-full" />{errors.resumeUrl && <span className="text-red-600 text-sm">{errors.resumeUrl}</span>}</div>
          <div className="mb-4"><label>Cover Letter URL *</label><input name="coverLetterUrl" value={form.coverLetterUrl} onChange={handleChange} className="border p-2 w-full" />{errors.coverLetterUrl && <span className="text-red-600 text-sm">{errors.coverLetterUrl}</span>}</div>
          <div className="mb-4"><label>Gender *</label><select name="gender" value={form.gender} onChange={handleChange} className="border p-2 w-full"><option value="">Select gender</option><option value="Male">Male</option><option value="Female">Female</option></select>{errors.gender && <span className="text-red-600 text-sm">{errors.gender}</span>}</div>
          <div className="mb-4"><label>Department *</label><select name="department" value={form.department} onChange={handleChange} className="border p-2 w-full"><option value="">Select department</option>{departments.map((d:any) => <option key={d.id} value={d.id}>{d.name}</option>)}</select>{errors.department && <span className="text-red-600 text-sm">{errors.department}</span>}</div>
          <div className="mb-4"><label>Year of Study *</label><select name="yearOfStudy" value={form.yearOfStudy} onChange={handleChange} className="border p-2 w-full"><option value="">Select year</option>{Array.from({length:6},(_,i)=>i+1).map(y=><option key={y} value={`Year ${y}`}>{`Year ${y}`}</option>)}</select>{errors.yearOfStudy && <span className="text-red-600 text-sm">{errors.yearOfStudy}</span>}</div>
          <div className="mb-4"><label>Expected Graduation Date *</label><input type="date" name="graduationDate" value={form.graduationDate} onChange={handleChange} className="border p-2 w-full" />{errors.graduationDate && <span className="text-red-600 text-sm">{errors.graduationDate}</span>}</div>
          <div className="mb-4"><label>Available to Start *</label><input type="date" name="availableStart" value={form.availableStart} onChange={handleChange} className="border p-2 w-full" min="2025-09-01" />{errors.availableStart && <span className="text-red-600 text-sm">{errors.availableStart}</span>}</div>
          <div className="mb-4 flex items-center"><input type="checkbox" name="onsite" checked={form.onsite} onChange={handleChange} className="mr-2" /><label>Can attend on-site</label></div>
          <div className="mb-4 flex items-center"><input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} className="mr-2" required /><label>I agree to the terms *</label>{errors.agreeTerms && <span className="text-red-600 text-sm ml-2">{errors.agreeTerms}</span>}</div>
          <div className="mb-4 flex items-center"><input type="checkbox" name="agreeComms" checked={form.agreeComms} onChange={handleChange} className="mr-2" /><label>I agree to receive communications</label></div>
          <div className="mb-4"><label>About Yourself *</label><textarea name="about" value={form.about} onChange={handleChange} className="border p-2 w-full" rows={3} />{errors.about && <span className="text-red-600 text-sm">{errors.about}</span>}</div>
          <div className="mb-4"><label>Community Engagement Statement *</label><textarea name="community" value={form.community} onChange={handleChange} className="border p-2 w-full" rows={3} />{errors.community && <span className="text-red-600 text-sm">{errors.community}</span>}</div>
          <div className="mb-4"><label>Understanding of SwahiliPot *</label><textarea name="understanding" value={form.understanding} onChange={handleChange} className="border p-2 w-full" rows={3} />{errors.understanding && <span className="text-red-600 text-sm">{errors.understanding}</span>}</div>
          <div className="mb-4"><label>LinkedIn URL *</label><input name="linkedin" value={form.linkedin} onChange={handleChange} className="border p-2 w-full" />{errors.linkedin && <span className="text-red-600 text-sm">{errors.linkedin}</span>}</div>
          <div className="mb-4"><label>GitHub URL</label><input name="github" value={form.github} onChange={handleChange} className="border p-2 w-full" /></div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" disabled={loading}>{loading ? 'Submitting...' : 'Submit Application'}</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default IndustrialAttachmentApply;