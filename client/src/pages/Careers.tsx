import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, ChevronDown, ChevronUp, BookOpen, Mic } from "lucide-react";
import { useState } from "react";
import data from "@/data/jobs.json";
import { isDateCurrentOrFuture } from "@/utils/dateUtils";

const Careers = () => {
  const [expandedConsultancy, setExpandedConsultancy] = useState(false);

  const toggleConsultancyExpansion = () => {
    setExpandedConsultancy(!expandedConsultancy);
  };

  const handleViewTOR = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>V2T OCA Consultancy - Terms of Reference</title>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                max-width: 900px; 
                margin: 40px auto; 
                padding: 20px 30px;
                background-color: #ffffff;
                color: #333;
              }
              .header {
                text-align: center;
                margin-bottom: 40px;
                padding: 30px;
                background: linear-gradient(135deg, #1e3a8a 0%, #2c5282 100%);
                color: white;
                border-radius: 10px;
              }
              .header h1 {
                margin: 0;
                font-size: 2.5em;
                font-weight: 300;
                letter-spacing: 2px;
              }
              .header .subtitle {
                font-size: 1.2em;
                margin-top: 10px;
                opacity: 0.9;
              }
              .program-info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 30px 0;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 8px;
              }
              .program-info-item {
                text-align: center;
              }
              .program-info-item strong {
                display: block;
                color: #2c3e50;
                margin-bottom: 5px;
                font-size: 0.9em;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              h2 { 
                color: #1e3a8a; 
                margin-top: 40px; 
                margin-bottom: 20px; 
                border-bottom: 2px solid #1e3a8a; 
                padding-bottom: 10px;
                font-size: 1.8em;
              }
              h3 { 
                color: #2c5282; 
                margin-top: 30px; 
                margin-bottom: 15px;
                font-size: 1.4em;
              }
              h4 { 
                color: #374151; 
                margin-top: 25px; 
                margin-bottom: 10px;
                font-size: 1.2em;
              }
              table { 
                border-collapse: collapse; 
                width: 100%; 
                margin: 25px 0; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                border-radius: 8px;
                overflow: hidden;
              }
              th, td { 
                border: 1px solid #e1e8ed; 
                padding: 15px; 
                text-align: left; 
              }
              th { 
                background: linear-gradient(135deg, #1e3a8a, #2c5282); 
                color: white; 
                font-weight: 600;
                text-transform: uppercase;
                font-size: 0.9em;
                letter-spacing: 0.5px;
              }
              tr:nth-child(even) {
                background-color: #f8f9fa;
              }
              tr:hover {
                background-color: #f0fdf4;
              }
              .highlight { 
                background: linear-gradient(135deg, #f0fdf4, #e0f2fe); 
                padding: 20px; 
                border-left: 5px solid #1e3a8a; 
                margin: 25px 0; 
                border-radius: 0 8px 8px 0;
                box-shadow: 0 2px 8px rgba(30, 58, 138, 0.2);
              }
              ul, ol { 
                margin: 15px 0; 
                padding-left: 25px; 
              }
              li { 
                margin: 8px 0; 
                line-height: 1.7;
              }
              .contact { 
                padding: 25px; 
                border-radius: 10px; 
                margin-top: 40px;
                box-shadow: 0 4px 12px rgba(30, 58, 138, 0.1);
                border: 2px solid #1e3a8a;
              }
              .contact h3 {
                margin-top: 0;
                color: #ffffff;
              }
              .back-button {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #1e3a8a, #2c5282);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
                transition: all 0.3s ease;
                z-index: 1000;
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 8px;
              }
              .back-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(30, 58, 138, 0.4);
                background: linear-gradient(135deg, #1a252f, #374151);
              }
              .back-button svg {
                width: 20px;
                height: 20px;
              }
              .objectives-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 20px;
                margin: 25px 0;
              }
              .objective-item {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #3498db;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .objective-item strong {
                color: #2c3e50;
                display: block;
                margin-bottom: 8px;
              }
              .qualifications-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
                margin: 25px 0;
              }
              .qualification-box {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
              }
              .qualification-box h4 {
                margin-top: 0;
                color: #3498db;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
                margin-bottom: 20px;
              }
              .inclusion-targets {
                display: flex;
                justify-content: space-around;
                margin: 25px 0;
                padding: 20px;
                background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
                border-radius: 10px;
                text-align: center;
              }
              .target-item {
                flex: 1;
                padding: 15px;
              }
              .target-item strong {
                display: block;
                font-size: 2em;
                color: #e17055;
                margin-bottom: 10px;
              }
              .methodology-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 25px 0;
              }
              .method-item {
                background: #e8f4fd;
                padding: 20px;
                border-radius: 8px;
                border-top: 4px solid #3498db;
              }
              .method-item strong {
                color: #2c3e50;
                display: block;
                margin-bottom: 10px;
                font-size: 1.1em;
              }
              .gap-register-format {
                background: #fff3cd;
                border: 2px dashed #856404;
                padding: 20px;
                border-radius: 8px;
                margin: 25px 0;
              }
              @media (max-width: 768px) {
                .qualifications-section {
                  grid-template-columns: 1fr;
                }
                .inclusion-targets {
                  flex-direction: column;
                }
                .program-info {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>VIJANA2THRIVE (V2T) PROGRAM</h1>
              <div class="subtitle">Engage, Improve & Transform</div>
              <div class="subtitle">TERMS OF REFERENCE</div>
              <div class="subtitle">Organizational Capacity Assessment (OCA) Community Centers</div>
            </div>

            <div class="program-info">
              <div class="program-info-item">
                <strong>Program</strong>
                Vijana2Thrive (V2T)
              </div>
              <div class="program-info-item">
                <strong>Lead Organization</strong>
                Swahilipot Hub Foundation (SPH)
              </div>
              <div class="program-info-item">
                <strong>Partners</strong>
                NCCK, E4Impact, Mastercard Foundation
              </div>
              <div class="program-info-item">
                <strong>Target Counties</strong>
                Mombasa, Kilifi, Nairobi, Kitui
              </div>
            </div>

            <h2>1. Background and Program Context</h2>
            <p>The Vijana2Thrive (V2T) Program is a three-year initiative implemented by Swahilipot Hub Foundation (SPH) in consortium with the National Council of Churches of Kenya (NCCK) and E4Impact, with funding from the Mastercard Foundation under the Young Africa Works strategy. The program targets 42,900 opportunity youth – individuals not in Education, Employment, or Training (NEET) – across four counties in Kenya: Mombasa, Kilifi, Nairobi, and Kitui.</p>

            <p>The program is built around a community hub model, with four Community Centers designed as safe, inclusive, and youth-friendly spaces where young people can grow and thrive. These centers go beyond offering skills development, mentorship, psychosocial support, entrepreneurship pathways, and market linkages—they intentionally create an environment that nurtures talent, fosters a strong sense of purpose and responsibility, and develops leadership abilities.</p>

            <div class="inclusion-targets">
              <div class="target-item">
                <strong>80%</strong>
                Young Women
              </div>
              <div class="target-item">
                <strong>5%</strong>
                Persons with Disabilities (PWDs)
              </div>
              <div class="target-item">
                <strong>5%</strong>
                Refugees and Displaced Persons
              </div>
            </div>

            <h3>Implementing Partners</h3>
            <div class="highlight">
              <p><strong>Swahilipot Hub Foundation (SPH)</strong> - Lead organization responsible for managing centers in Mombasa and Kilifi counties, bringing extensive organizational expertise and established frameworks.</p>
              <p><strong>National Council of Churches of Kenya (NCCK)</strong> - Rolls out centers in Nairobi and Kitui counties, leveraging extensive partner networks for community mobilization.</p>
              <p><strong>E4Impact Foundation</strong> - Supports entrepreneurship training and business capacity building, including access to challenge funds.</p>
            </div>

            <h2>2. Purpose and Objectives of the Consultancy</h2>
            <p>The primary purpose of this consultancy is to undertake a comprehensive Organizational Capacity Assessment (OCA) of each of the four youth community centers through a structured and participatory process that reflects how the hubs function and serve young people.</p>

            <h3>2.1 Specific Objectives</h3>
            <div class="objectives-grid">
              <div class="objective-item">
                <strong>Objective 1</strong>
                Assess the physical accessibility and infrastructure of each center to ensure equitable access for all beneficiaries, including persons with disabilities.
              </div>
              <div class="objective-item">
                <strong>Objective 2</strong>
                Evaluate internet and digital infrastructure capacity to support blended learning, e-learning, and digital skills development activities.
              </div>
              <div class="objective-item">
                <strong>Objective 3</strong>
                Review safety and security arrangements at each center to ensure a safe environment for all users, especially young women and vulnerable groups.
              </div>
              <div class="objective-item">
                <strong>Objective 4</strong>
                Assess the implementation of gender equality and social inclusion (GESI) principles at each hub, aligned with Mastercard Foundation guidelines.
              </div>
              <div class="objective-item">
                <strong>Objective 5</strong>
                Evaluate the organizational and institutional capacity of each hub to manage and deliver program components effectively.
              </div>
              <div class="objective-item">
                <strong>Objective 6</strong>
                Assess safeguarding policies, systems, and capacity in line with international safeguarding standards and the SAFE initiative.
              </div>
              <div class="objective-item">
                <strong>Objective 7</strong>
                Assess program delivery capacity, including staff competency, case management systems, and referral networks.
              </div>
              <div class="objective-item">
                <strong>Objective 8</strong>
                Develop a consolidated Gap Closure Register with prioritized recommendations for each center.
              </div>
            </div>

            <h2>3. Scope of the Assessment</h2>
            <p>The consultancy will cover all four V2T Youth Community Centers:</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>County</th>
                  <th>Hub Manager</th>
                  <th>Hub Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mombasa</td>
                  <td>Swahilipot Hub Foundation (SPH)</td>
                  <td>Existing – Expansion hub</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kilifi</td>
                  <td>Swahilipot Hub Foundation (SPH)</td>
                  <td>New hub</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nairobi</td>
                  <td>National Council of Churches of Kenya (NCCK)</td>
                  <td>New hub</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Kitui</td>
                  <td>National Council of Churches of Kenya (NCCK)</td>
                  <td>New hub</td>
                </tr>
              </tbody>
            </table>

            <h2>4. Key Assessment Areas</h2>
            <p>The OCA will evaluate each center across eight thematic areas:</p>

            <h3>Area A: Physical Accessibility and Inclusive Infrastructure</h3>
            <p>Examines whether each center's built environment genuinely enables participation by all target beneficiaries, with particular focus on persons with disabilities, young mothers, and other vulnerable groups.</p>

            <h3>Area B: Internet and Digital Infrastructure</h3>
            <p>Evaluates each center's digital readiness to support the program's blended-learning and digital-skills components, including internet connectivity, computing devices, and assistive technologies.</p>

            <h3>Area C: Safety and Security</h3>
            <p>Assesses the physical and operational security environment at each hub, with a heightened focus on the safety of young women and vulnerable participants.</p>

            <h3>Area D: Gender Equality and Social Inclusion (GESI)</h3>
            <p>Evaluates how deeply gender equality and social inclusion principles are embedded across each center's governance, staffing, programming, and culture.</p>

            <h3>Area E: Safeguarding and Child/Vulnerable Adult Protection</h3>
            <p>Assesses the comprehensiveness and operationalization of each centre's safeguarding framework, including policies, training, and reporting mechanisms.</p>

            <h3>Area F: Organizational Governance and Management Capacity</h3>
            <p>Examines the institutional systems underpinning each hub's ability to operate effectively and with accountability.</p>

            <h3>Area G: Program Delivery Capacity</h3>
            <p>Evaluates each center's readiness to deliver the core programmatic components of V2T, including case management, psychosocial support, and skills training.</p>

            <h3>Area H: Community Engagement and Stakeholder Relations</h3>
            <p>Assesses how well each center is rooted in and responsive to its broader community, including partnerships and coordination mechanisms.</p>

            <h2>5. Assessment Methodology</h2>
            <p>The consultant(s) will employ a participatory, mixed-methods approach combining document review, physical inspection, key informant interviews, and focus group discussions.</p>

            <h3>5.1 Data Collection Methods</h3>
            <div class="methodology-grid">
              <div class="method-item">
                <strong>Document Review</strong>
                Review of organizational policies, HR documents, operational plans, safeguarding frameworks, M&E systems, and partnership agreements.
              </div>
              <div class="method-item">
                <strong>Physical Site Inspection</strong>
                Structured walk-through of each center using standardized accessibility checklists covering Areas A-C.
              </div>
              <div class="method-item">
                <strong>Key Informant Interviews</strong>
                Semi-structured interviews with center coordinators, case managers, safeguarding focal points, and partner representatives.
              </div>
              <div class="method-item">
                <strong>Focus Group Discussions</strong>
                Separate FGDs with young women, young men, persons with disabilities, and refugees to capture lived experiences.
              </div>
              <div class="method-item">
                <strong>Community Consultations</strong>
                Discussions with community leaders, local government representatives, and other stakeholders.
              </div>
              <div class="method-item">
                <strong>Observation</strong>
                Direct observation of program sessions, staff–participant interactions, and GESI practices.
              </div>
            </div>

            <h2>6. Deliverables</h2>
            <table>
              <thead>
                <tr>
                  <th>Deliverable</th>
                  <th>Description</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inception Report</td>
                  <td>Work plan, refined methodology, data collection tools, and stakeholder engagement schedule</td>
                  <td>Week 1–2 after contract signing</td>
                </tr>
                <tr>
                  <td>Data Collection & Field Visits</td>
                  <td>Site visits to all 4 centers; physical inspections, staff interviews, FGDs with youth participants</td>
                  <td>Week 3–5</td>
                </tr>
                <tr>
                  <td>Draft OCA Report (per center)</td>
                  <td>Individual draft reports for each of the 4 centers with findings, ratings, and preliminary recommendations</td>
                  <td>Week 6–7</td>
                </tr>
                <tr>
                  <td>Consolidated OCA Report</td>
                  <td>Cross-center synthesis report with comparative analysis, thematic findings, and prioritized action plan</td>
                  <td>Week 8</td>
                </tr>
                <tr>
                  <td>Validation Workshop</td>
                  <td>Presentation of findings to SPH, NCCK, E4Impact, and Mastercard Foundation for validation and feedback</td>
                  <td>Week 9</td>
                </tr>
                <tr>
                  <td>Final OCA Report & Gap Register</td>
                  <td>Final report incorporating validation feedback plus completed Gap Closure Register for each center</td>
                  <td>Week 10</td>
                </tr>
              </tbody>
            </table>

            <h3>6.2 Detailed Deliverables</h3>
            <ol>
              <li><strong>Inception Report (Planning and Scoping)</strong> - Detailed assessment purpose, scope, methodology, framework, workplan, and tools.</li>
              <li><strong>Stakeholder Engagement Plan and Records</strong> - Mapping and engagement plan with documentation of consultations.</li>
              <li><strong>Customized OCA Tools</strong> - Tailored assessment tools adapted to youth community hubs with inclusion indicators.</li>
              <li><strong>Data Collection Report</strong> - Documentation of fieldwork conducted using mixed methods.</li>
              <li><strong>Capacity Assessment and Analysis Report</strong> - Comprehensive analysis with capacity scoring and gap identification.</li>
              <li><strong>Validation Workshop Reports</strong> - Reports from stakeholder validation sessions and feedback incorporation.</li>
              <li><strong>Capacity Development Action Plans (per Center)</strong> - Practical, prioritized, and time-bound action plans for each center.</li>
              <li><strong>Final OCA Report</strong> - Consolidated, user-friendly report with methodology, findings, and actionable recommendations.</li>
              <li><strong>Capacity Strengthening and Follow-up Framework</strong> - Proposed framework for tracking progress and future reassessments.</li>
            </ol>

            <h2>7. Gap Closure Register</h2>
            <p>A key output of the OCA will be a Gap Closure Register for each center. This register will provide a structured action plan for addressing identified weaknesses.</p>
            
            <div class="gap-register-format">
              <h4>Gap Closure Register Format:</h4>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Assessment Area</th>
                    <th>Rating (1–4)</th>
                    <th>Gap Identified</th>
                    <th>Recommended Action</th>
                    <th>Priority / Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>[Area A–H]</td>
                    <td>[1/2/3/4]</td>
                    <td>[Description of gap]</td>
                    <td>[Specific action]</td>
                    <td>[High/Medium/Low – Month X]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>8. Qualifications of the Consultant</h2>
            <div class="qualifications-section">
              <div class="qualification-box">
                <h4>8.1 Essential Qualifications</h4>
                <ul>
                  <li>Advanced degree in social sciences, development studies, gender studies, organizational development, international development, or a related field</li>
                  <li>Minimum 7 years of demonstrated experience in organizational capacity assessments, institutional development, or program evaluation in the NGO / development sector in Kenya</li>
                  <li>Demonstrated expertise in gender equality and social inclusion (GESI), with knowledge of GESI assessment tools and frameworks relevant to youth development programs</li>
                  <li>Strong knowledge of safeguarding standards, including PSEA, child protection, and the SAFE initiative requirements</li>
                  <li>Experience assessing physical accessibility for persons with disabilities against the Kenya national standards and international accessibility guidelines</li>
                  <li>Demonstrated experience conducting participatory research with marginalized populations, including young women, PWDs, and refugees</li>
                  <li>Excellent written and verbal communication skills in English; proficiency in Swahili is an added advantage for community-level engagement</li>
                </ul>
              </div>
              <div class="qualification-box">
                <h4>8.2 Desirable Qualifications</h4>
                <ul>
                  <li>Prior experience working with Mastercard Foundation-funded programs or other large-scale youth employment programs in Kenya</li>
                  <li>Knowledge of the youth employment and skills development ecosystem in Mombasa, Kilifi, Nairobi, and/or Kitui counties</li>
                  <li>Experience in digital infrastructure and data systems assessment for NGO programs</li>
                  <li>Familiarity with community hub models and youth-led organization frameworks</li>
                </ul>
              </div>
            </div>

            <h2>9. Ethical Standards and Data Protection</h2>
            <p>The consultant must adhere to the highest ethical standards throughout the assignment:</p>
            <ul>
              <li>Obtain written informed consent from all research participants before data collection</li>
              <li>Ensure complete confidentiality and anonymity of individual respondents in all reports and presentations</li>
              <li>Apply a 'do no harm' approach in all interactions with young people, particularly survivors of gender-based violence, persons with disabilities, and refugees</li>
              <li>Comply with Kenya's Data Protection Act (2019) and Mastercard Foundation data governance requirements</li>
              <li>Immediately report any safeguarding concerns identified during the assessment to the SPH Safeguarding Focal Point</li>
              <li>Ensure that data collection methods are gender-responsive and adapted to the needs of participants with varying literacy levels, disabilities, and language backgrounds</li>
            </ul>

            <h2>10. Management and Reporting Arrangements</h2>
            <p>The consultant will report directly to the Programs Director at SPH, who will serve as the primary point of contact for this consultancy. The V2T GESI Officer, Program Manager, Community Center Coordinators, and HR & Safeguarding Officer will provide technical input and quality assurance on specific assessment areas.</p>

            <h3>Regular Check-ins:</h3>
            <ul>
              <li>Kick-off meeting with SPH, NCCK, and E4Impact within 3 days of contract signing</li>
              <li>Debrief call after each site visit within 48 hours of completion</li>
              <li>Review meeting upon submission of each draft report</li>
              <li>Validation workshop for consolidated findings before final report submission</li>
            </ul>

            <h2>11. Application Requirements</h2>
            <p>Interested and qualified consultants or consulting firms are invited to submit the following:</p>
            <ol>
              <li><strong>Technical Proposal:</strong> Detailed methodology, work plan with timelines, understanding of the ToR, and proposed adaptations to the assessment approach</li>
              <li><strong>Financial Proposal:</strong> Itemized budget including daily rates, number of days per activity, travel costs, and any other relevant costs. Proposals should be submitted in USD</li>
              <li><strong>Curriculum Vitae(s):</strong> CV(s) of the lead consultant and any team members, highlighting relevant experience and qualifications</li>
              <li><strong>Samples of Previous Work:</strong> At least two examples of previously conducted OCA reports, capacity assessments, or GESI assessments of similar scope</li>
              <li><strong>References:</strong> Contact details of at least three professional references from clients of similar assignments</li>
            </ol>

            <a href="#" class="back-button" onclick="window.close()">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414 1.414l-7-7z" clip-rule="evenodd"/>
              </svg>
              Back to Careers
            </a>

            <div class="contact">
              <h3>Application Submission</h3>
              <p>Applications should be submitted to: <strong>procurement@swahilipothub.co.ke</strong> with the subject line: <strong>V2T OCA Consultancy Application – [Consultant/Firm Name]</strong> by the deadline specified in the Call for Applications.</p>
            </div>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  const openJobs = data.jobs.filter((job) =>
    isDateCurrentOrFuture(job.application.deadline)
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We Are <span className="text-gradient-blue">Hiring</span>
              </h1>
              <p className="text-xl text-gray-700">
                Join our team and help empower youth through technology, arts,
                and entrepreneurship across the Kenyan Coast.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {openJobs.length === 0 && (
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      VIJANA2THRIVE (V2T) OCA Consultancy
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleConsultancyExpansion}
                        className="ml-2"
                      >
                        {expandedConsultancy ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Organizational Capacity Assessment for Community Centers - A comprehensive evaluation of four youth community centers across Mombasa, Kilifi, Nairobi, and Kitui counties.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">10 weeks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-swahilipot-600" />
                        <span className="text-sm text-gray-600">One-time consultancy</span>
                      </div>
                    </div>
                    
                    {expandedConsultancy && (
                      <div className="mt-6 space-y-6 border-t pt-6">
                        <div>
                          <h4 className="font-semibold mb-2">Background</h4>
                          <p className="text-gray-700">
                            The Vijana2Thrive (V2T) Program is a three-year initiative targeting 42,900 opportunity youth across four counties in Kenya. The program uses a community hub model with four Community Centers designed as safe, inclusive, and youth-friendly spaces.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Objectives</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Assess physical accessibility and infrastructure for equitable access</li>
                            <li>Evaluate internet and digital infrastructure capacity</li>
                            <li>Review safety and security arrangements</li>
                            <li>Assess GESI principles implementation</li>
                            <li>Evaluate organizational and institutional capacity</li>
                            <li>Assess safeguarding policies and systems</li>
                            <li>Assess program delivery capacity</li>
                            <li>Develop consolidated Gap Closure Register</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Scope</h4>
                          <p className="text-gray-700">
                            All four V2T Youth Community Centers: Mombasa (SPH - Expansion), Kilifi (SPH - New), Nairobi (NCCK - New), Kitui (NCCK - New)
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Methodology</h4>
                          <p className="text-gray-700">
                            Mixed-methods approach including document review, physical site inspection, key informant interviews, focus group discussions, and community consultations.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Key Deliverables</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Inception Report with methodology and tools</li>
                            <li>Stakeholder engagement plan and records</li>
                            <li>Customized OCA assessment tools</li>
                            <li>Data collection report</li>
                            <li>Capacity assessment and analysis report</li>
                            <li>Validation workshop reports</li>
                            <li>Capacity development action plans per center</li>
                            <li>Final OCA report</li>
                            <li>Capacity strengthening and follow-up framework</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Qualifications</h4>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-swahilipot-600">Essential:</h5>
                              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Advanced degree in social sciences, development studies, or related field</li>
                                <li>Minimum 7 years in organizational capacity assessments</li>
                                <li>Expertise in gender equality and social inclusion (GESI)</li>
                                <li>Knowledge of safeguarding standards and SAFE initiative</li>
                                <li>Experience with physical accessibility assessments</li>
                                <li>Experience with participatory research with marginalized populations</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-swahilipot-600">Desirable:</h5>
                              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                <li>Prior experience with Mastercard Foundation programs</li>
                                <li>Knowledge of youth employment ecosystem in target counties</li>
                                <li>Experience in digital infrastructure assessment</li>
                                <li>Familiarity with community hub models</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Application Requirements</h4>
                          <p className="text-gray-700 mb-3">
                            Interested consultants should submit: Technical Proposal, Financial Proposal, CV(s), 
                            Samples of Previous Work, and References to: procurement@swahilipothub.co.ke
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="outline"
                        onClick={toggleConsultancyExpansion}
                        className="flex-1"
                      >
                        {expandedConsultancy ? 'Show Less' : 'Show More'}
                      </Button>
                      <Button 
                        onClick={handleViewTOR}
                        className="flex-1 bg-swahilipot-600 hover:bg-swahilipot-700"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {openJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>

                      <p className="text-gray-700 mb-4">
                        {job.overview.position_summary}
                      </p>

                      <p className="text-gray-700 mb-4">
                        Application Deadline: {job.application.deadline}
                      </p>

                      <Button
                        className="bg-swahilipot-600 hover:bg-swahilipot-700 w-fit"
                        asChild
                      >
                        <Link to={`/career/${job.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-gray-700 mb-12">
                Join a dynamic team passionate about making a difference in East
                Africa through technology, arts, and entrepreneurship.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Impactful Work</h3>
                    <p className="text-gray-600">
                      Make a real difference in the lives of youth across East
                      Africa
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Growth & Learning</h3>
                    <p className="text-gray-600">
                      Continuous learning opportunities and professional
                      development
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-swahilipot-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-6 h-6 text-swahilipot-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">
                      Dynamic Environment
                    </h3>
                    <p className="text-gray-600">
                      Work in a vibrant, creative, and innovative workspace
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;
