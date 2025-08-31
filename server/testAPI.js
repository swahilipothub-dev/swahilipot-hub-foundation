import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:5000/api';

const testEndpoints = async () => {
  console.log('Testing Industrial Attachment API endpoints...\n');

  try {
    // Test institutions endpoint
    console.log('1. Testing GET /api/users/institutions');
    const institutionsRes = await fetch(`${BASE_URL}/users/institutions`);
    if (institutionsRes.ok) {
      const institutions = await institutionsRes.json();
      console.log(`✅ Success: Found ${institutions.length} institutions`);
      console.log('   Sample:', institutions[0]?.name || 'None');
    } else {
      console.log('❌ Failed:', institutionsRes.status, institutionsRes.statusText);
    }

    // Test courses endpoint
    console.log('\n2. Testing GET /api/users/courses');
    const coursesRes = await fetch(`${BASE_URL}/users/courses`);
    if (coursesRes.ok) {
      const courses = await coursesRes.json();
      console.log(`✅ Success: Found ${courses.length} courses`);
      console.log('   Sample:', courses[0]?.name || 'None');
    } else {
      console.log('❌ Failed:', coursesRes.status, coursesRes.statusText);
    }

    // Test departments endpoint
    console.log('\n3. Testing GET /api/users/departments');
    const departmentsRes = await fetch(`${BASE_URL}/users/departments`);
    if (departmentsRes.ok) {
      const departments = await departmentsRes.json();
      console.log(`✅ Success: Found ${departments.length} departments`);
      console.log('   Sample:', departments[0]?.name || 'None');
    } else {
      console.log('❌ Failed:', departmentsRes.status, departmentsRes.statusText);
    }

    // Test application submission endpoint
    console.log('\n4. Testing POST /api/users/industrial-attachments');
    const testApplication = {
      firstName: "Test",
      middleName: "User",
      lastName: "Application",
      phone: "+254700000000",
      email: "test@example.com",
      institution: "test-institution-id",
      course: "test-course-id",
      location: "Nairobi",
      dob: "2000-01-01",
      resumeUrl: "https://example.com/resume.pdf",
      coverLetterUrl: "https://example.com/cover.pdf",
      gender: "Male",
      department: "test-department-id",
      yearOfStudy: "Year 3",
      graduationDate: "2025-06-01",
      availableStart: "2025-01-01",
      onsite: true,
      agreeTerms: true,
      agreeComms: true,
      about: "Test about section",
      community: "Test community section",
      understanding: "Test understanding section",
      linkedin: "https://linkedin.com/in/test",
      github: "https://github.com/test"
    };

    const submitRes = await fetch(`${BASE_URL}/users/industrial-attachments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testApplication),
    });

    if (submitRes.ok) {
      const result = await submitRes.json();
      console.log('✅ Success: Application submitted');
      console.log('   Reference ID:', result.referenceId);
    } else {
      const error = await submitRes.json();
      console.log('❌ Failed:', submitRes.status, submitRes.statusText);
      console.log('   Error:', error.message);
    }

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
};

// Check if server is running
const checkServer = async () => {
  try {
    const res = await fetch(`${BASE_URL.replace('/api', '')}`);
    if (res.ok) {
      console.log('✅ Server is running');
      await testEndpoints();
    } else {
      console.log('❌ Server responded with error:', res.status);
    }
  } catch (error) {
    console.log('❌ Cannot connect to server. Make sure it\'s running on port 5000');
    console.log('   Start the server with: npm run dev');
  }
};

checkServer();
