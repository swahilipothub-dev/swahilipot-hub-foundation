declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GraduationCap, User, MapPin, Calendar, FileText, Linkedin, Github, Building2, BookOpen } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { industrialAttachmentAPI } from '@/services/api';

// Types for the dropdown data
interface Institution {
  _id: string;
  name: string;
  county: string;
}

interface Course {
  _id: string;
  name: string;
  certification: string;
  institution: {
    _id: string;
    name: string;
  };
}

interface Department {
  _id: string;
  name: string;
  description: string;
}

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
  const [dataLoading, setDataLoading] = useState(true);
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const navigate = useNavigate();

  // Fetch dropdown data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataLoading(true);
        const [institutionsData, coursesData, departmentsData] = await Promise.all([
          industrialAttachmentAPI.getInstitutions(),
          industrialAttachmentAPI.getCourses(),
          industrialAttachmentAPI.getDepartments()
        ]);
        
        setInstitutions(institutionsData);
        setCourses(coursesData);
        setDepartments(departmentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setErrors({ general: 'Failed to load form data. Please refresh the page.' });
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const handleSelectChange = (name: string, value: string) => {
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    
    setLoading(true);
    try {
      const data = await industrialAttachmentAPI.submitApplication(form);
      
      // Analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'industrial_attachment_apply');
      }
      
      navigate('/industrial-attachment/success', { state: { ref: data.referenceId } });
    } catch (error: any) {
      setErrors({ general: error.message || 'Failed to submit application' });
    } finally {
      setLoading(false);
    }
  };

  // Filter courses based on selected institution
  const filteredCourses = form.institution 
    ? courses.filter(course => course.institution._id === form.institution)
    : courses;

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Loading Application Form...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Industrial Attachment Application</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join SwahiliPot Hub for an enriching industrial attachment experience. Fill out the form below to begin your application process.
          </p>
        </div>

        {errors.general && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertDescription className="text-red-700">{errors.general}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5" />
                <div>
                  <CardTitle className="text-white">Personal Information</CardTitle>
                  <CardDescription className="text-blue-100">Tell us about yourself</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className={errors.firstName ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-600 text-xs">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="middleName" className="text-sm font-medium">Middle Name</Label>
                  <Input
                    id="middleName"
                    name="middleName"
                    value={form.middleName}
                    onChange={handleChange}
                    placeholder="Enter your middle name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className={errors.lastName ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-600 text-xs">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+254 700 000 000"
                    className={errors.phone ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-600 text-xs">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-sm font-medium">Date of Birth *</Label>
                  <Input
                    id="dob"
                    name="dob"
                    type="date"
                    value={form.dob}
                    onChange={handleChange}
                    className={errors.dob ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.dob && <p className="text-red-600 text-xs">{errors.dob}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
                  <Select value={form.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                    <SelectTrigger className={errors.gender ? "border-red-300 focus:border-red-500" : ""}>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-600 text-xs">{errors.gender}</p>}
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="location" className="text-sm font-medium">Residential Location/Town *</Label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Enter your location"
                    className={`pl-10 ${errors.location ? "border-red-300 focus:border-red-500" : ""}`}
                  />
                </div>
                {errors.location && <p className="text-red-600 text-xs mt-1">{errors.location}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5" />
                <div>
                  <CardTitle className="text-white">Academic Information</CardTitle>
                  <CardDescription className="text-green-100">Your educational background</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-sm font-medium">Learning Institution *</Label>
                  <Select value={form.institution} onValueChange={(value) => handleSelectChange('institution', value)}>
                    <SelectTrigger className={errors.institution ? "border-red-300 focus:border-red-500" : ""}>
                      <SelectValue placeholder="Select your institution" />
                    </SelectTrigger>
                    <SelectContent>
                      {institutions.map((inst) => (
                        <SelectItem key={inst._id} value={inst._id}>
                          {inst.name} - {inst.county}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.institution && <p className="text-red-600 text-xs">{errors.institution}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course" className="text-sm font-medium">Course *</Label>
                  <Select 
                    value={form.course} 
                    onValueChange={(value) => handleSelectChange('course', value)}
                    disabled={!form.institution}
                  >
                    <SelectTrigger className={errors.course ? "border-red-300 focus:border-red-500" : ""}>
                      <SelectValue placeholder={form.institution ? "Select your course" : "Select institution first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredCourses.map((course) => (
                        <SelectItem key={course._id} value={course._id}>
                          {course.name} ({course.certification})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.course && <p className="text-red-600 text-xs">{errors.course}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-sm font-medium">Department *</Label>
                  <Select value={form.department} onValueChange={(value) => handleSelectChange('department', value)}>
                    <SelectTrigger className={errors.department ? "border-red-300 focus:border-red-500" : ""}>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept._id} value={dept._id}>
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.department && <p className="text-red-600 text-xs">{errors.department}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearOfStudy" className="text-sm font-medium">Year of Study *</Label>
                  <Select value={form.yearOfStudy} onValueChange={(value) => handleSelectChange('yearOfStudy', value)}>
                    <SelectTrigger className={errors.yearOfStudy ? "border-red-300 focus:border-red-500" : ""}>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 6 }, (_, i) => i + 1).map(y => (
                        <SelectItem key={y} value={`Year ${y}`}>{`Year ${y}`}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.yearOfStudy && <p className="text-red-600 text-xs">{errors.yearOfStudy}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationDate" className="text-sm font-medium">Expected Graduation *</Label>
                  <Input
                    id="graduationDate"
                    name="graduationDate"
                    type="date"
                    value={form.graduationDate}
                    onChange={handleChange}
                    className={errors.graduationDate ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.graduationDate && <p className="text-red-600 text-xs">{errors.graduationDate}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents & Availability */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5" />
                <div>
                  <CardTitle className="text-white">Documents & Availability</CardTitle>
                  <CardDescription className="text-purple-100">Upload your documents and availability</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="resumeUrl" className="text-sm font-medium">Resume/CV URL *</Label>
                  <Input
                    id="resumeUrl"
                    name="resumeUrl"
                    value={form.resumeUrl}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className={errors.resumeUrl ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.resumeUrl && <p className="text-red-600 text-xs">{errors.resumeUrl}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetterUrl" className="text-sm font-medium">Cover Letter URL *</Label>
                  <Input
                    id="coverLetterUrl"
                    name="coverLetterUrl"
                    value={form.coverLetterUrl}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className={errors.coverLetterUrl ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.coverLetterUrl && <p className="text-red-600 text-xs">{errors.coverLetterUrl}</p>}
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="availableStart" className="text-sm font-medium">Available to Start *</Label>
                <div className="relative mt-2">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="availableStart"
                    name="availableStart"
                    type="date"
                    value={form.availableStart}
                    onChange={handleChange}
                    min="2025-09-01"
                    className={`pl-10 ${errors.availableStart ? "border-red-300 focus:border-red-500" : ""}`}
                  />
                </div>
                {errors.availableStart && <p className="text-red-600 text-xs mt-1">{errors.availableStart}</p>}
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="onsite"
                    name="onsite"
                    checked={form.onsite}
                    onCheckedChange={(checked) => setForm(f => ({ ...f, onsite: checked as boolean }))}
                  />
                  <Label htmlFor="onsite" className="text-sm font-medium">I can attend on-site</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Statements */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                <div>
                  <CardTitle className="text-white">Personal Statements</CardTitle>
                  <CardDescription className="text-orange-100">Tell us more about yourself</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="about" className="text-sm font-medium">About Yourself *</Label>
                  <Textarea
                    id="about"
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Tell us about your background, interests, and what drives you..."
                    rows={3}
                    className={errors.about ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.about && <p className="text-red-600 text-xs">{errors.about}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="community" className="text-sm font-medium">Community Engagement Statement *</Label>
                  <Textarea
                    id="community"
                    name="community"
                    value={form.community}
                    onChange={handleChange}
                    placeholder="Describe your involvement in community activities and social impact initiatives..."
                    rows={3}
                    className={errors.community ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.community && <p className="text-red-600 text-xs">{errors.community}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="understanding" className="text-sm font-medium">Understanding of SwahiliPot *</Label>
                  <Textarea
                    id="understanding"
                    name="understanding"
                    value={form.understanding}
                    onChange={handleChange}
                    placeholder="What do you know about SwahiliPot Hub and why do you want to join us?"
                    rows={3}
                    className={errors.understanding ? "border-red-300 focus:border-red-500" : ""}
                  />
                  {errors.understanding && <p className="text-red-600 text-xs">{errors.understanding}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                <div>
                  <CardTitle className="text-white">Professional Links</CardTitle>
                  <CardDescription className="text-indigo-100">Your online presence</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn URL *</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className={`pl-10 ${errors.linkedin ? "border-red-300 focus:border-red-500" : ""}`}
                    />
                  </div>
                  {errors.linkedin && <p className="text-red-600 text-xs">{errors.linkedin}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-sm font-medium">GitHub URL</Label>
                  <div className="relative">
                    <Github className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="github"
                      name="github"
                      value={form.github}
                      onChange={handleChange}
                      placeholder="https://github.com/yourusername"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={form.agreeTerms}
                    onCheckedChange={(checked) => setForm(f => ({ ...f, agreeTerms: checked as boolean }))}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="agreeTerms" className="text-sm font-medium">I agree to the terms and conditions *</Label>
                    <p className="text-xs text-gray-600">By checking this box, you agree to our terms of service and privacy policy.</p>
                    {errors.agreeTerms && <p className="text-red-600 text-xs">{errors.agreeTerms}</p>}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreeComms"
                    name="agreeComms"
                    checked={form.agreeComms}
                    onCheckedChange={(checked) => setForm(f => ({ ...f, agreeComms: checked as boolean }))}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="agreeComms" className="text-sm font-medium">I agree to receive communications</Label>
                    <p className="text-xs text-gray-600">Receive updates about your application and future opportunities.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting Application...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndustrialAttachmentApply;
