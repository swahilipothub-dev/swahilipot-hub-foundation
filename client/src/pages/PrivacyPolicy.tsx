import { useState, useEffect, useRef } from 'react';

const SECTIONS = [
  { id: 'intro', num: '1', title: 'Introduction and Policy Statement' },
  { id: 'definitions', num: '2', title: 'Definitions and Interpretation' },
  { id: 'purpose', num: '3', title: 'Purpose' },
  { id: 'scope', num: '4', title: 'Scope and Application' },
  { id: 'dpo', num: '5', title: 'Data Protection Officer' },
  { id: 'rights', num: '6', title: 'Rights of Data Subjects' },
  { id: 'security', num: '7', title: 'Data Security and Safeguards' },
  { id: 'dpia', num: '8', title: 'Data Protection Impact Assessments' },
  { id: 'cyber', num: '9', title: 'Cybersecurity and Information Security' },
  { id: 'sharing-kenya', num: '10', title: 'Data Sharing Within Kenya' },
  { id: 'cross-border', num: '11', title: 'Cross-Border Data Transfers' },
  { id: 'retention', num: '12', title: 'Data Retention and Storage' },
  { id: 'disposal', num: '13', title: 'Data Disposal' },
  { id: 'breach', num: '14', title: 'Data Breach Management' },
  { id: 'third-parties', num: '15', title: 'Third Parties and Partners' },
  { id: 'training', num: '16', title: 'Training and Awareness' },
  { id: 'roles', num: '17', title: 'Roles and Responsibilities' },
  { id: 'audit', num: '18', title: 'Audit and Assurance' },
  { id: 'records', num: '19', title: 'Records Management' },
  { id: 'review', num: '20', title: 'Policy Review' },
  { id: 'related', num: '21', title: 'Related Policies' },
  { id: 'exception', num: '22', title: 'Exception to Policy' },
];

const DEFINITIONS = [
  ['Applicable Law', 'All relevant laws and regulations governing data protection and privacy, including the Data Protection Act, 2019 of Kenya, its subsidiary legislation, and any applicable international instruments.'],
  ['Biometric Data', 'Personal data resulting from specific technical processing relating to the physical, physiological, or behavioural characteristics of a natural person, which allow or confirm unique identification, including facial images and fingerprint data.'],
  ['Child', 'Any natural person under the age of eighteen (18) years as defined under the laws of Kenya.'],
  ['Consent', 'Any freely given, specific, informed, and unambiguous indication of a data subject\u2019s wishes by which they, by a statement or clear affirmative action, signify agreement to processing of personal data relating to them.'],
  ['Data Controller', 'A natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purpose and means of the processing of personal data.'],
  ['Data Processor', 'A natural or legal person, public authority, agency, or other body which processes personal data on behalf of the Data Controller.'],
  ['Data Protection Impact Assessment (DPIA)', 'A systematic process for identifying and mitigating risks associated with processing that is likely to result in a high risk to the rights and freedoms of data subjects.'],
  ['Data Protection Officer (DPO)', 'The individual designated by the Foundation to oversee compliance with data protection obligations and act as a point of contact with the regulatory authority.'],
  ['Data Subject', 'An identified or identifiable natural person to whom personal data relates.'],
  ['Foundation', 'Swahilipot Hub Foundation, including its employees, officers, trustees, agents, and authorized representatives.'],
  ['Personal Data', 'Any information relating to an identified or identifiable natural person, including names, identification numbers, location data, online identifiers, or factors specific to physical, physiological, genetic, mental, economic, cultural, or social identity.'],
  ['Personal Data Breach', 'A breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored, or otherwise processed.'],
  ['Processing', 'Any operation or set of operations performed on personal data, whether or not by automated means, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, alignment, restriction, erasure, or destruction.'],
  ['Recipient', 'A natural or legal person, public authority, agency, or other body to which personal data is disclosed, whether a third party or not.'],
  ['Sensitive Personal Data', 'Personal data revealing race, health status, ethnic or social origin, conscience, belief, genetic data, biometric data, property details, marital status, family details, sex, or sexual orientation, or any other prescribed category.'],
  ['Third Party', 'Any natural or legal person, public authority, agency, or body other than the data subject, the Data Controller, the Data Processor, or persons authorized to process data under their direct authority.'],
  ['Transfer of Personal Data', 'The transmission, communication, or otherwise making available of personal data to a recipient, including cross-border transfers outside the jurisdiction of Kenya.'],
];

function Num({ children }) {
  return <span style={{ color: '#8a7a5c', fontVariantNumeric: 'tabular-nums', marginRight: '0.6em' }}>{children}</span>;
}

function P({ n, children }) {
  return (
    <p style={{ margin: '0 0 14px 0' }}>
      {n && <Num>{n}</Num>}
      {children}
    </p>
  );
}

function Sub({ n, children }) {
  return (
    <p style={{ margin: '0 0 10px 0', paddingLeft: 22 }}>
      {n && <Num>{n}</Num>}
      {children}
    </p>
  );
}

function Section({ id, num, title, children, refCb }) {
  return (
    <section id={id} ref={refCb} style={{ scrollMarginTop: 90, marginBottom: 56 }}>
      <h2
        style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 26,
          fontWeight: 600,
          color: '#241f14',
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'baseline',
          gap: 14,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: '#a8shy', minWidth: 26 }}>
          <span style={{ color: '#b08b3f' }}>{num}</span>
        </span>
        {title}
      </h2>
      <div style={{ fontSize: 16, lineHeight: 1.68, color: '#3a3427', maxWidth: 700 }}>
        {children}
      </div>
    </section>
  );
}

export default function DataProtectionPolicy() {
  const [active, setActive] = useState('intro');
  const [navOpen, setNavOpen] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  return (
    <div
      style={{
        '--ink': '#241f14',
        '--paper': '#faf7f0',
        '--rule': '#dcd3bd',
        '--gold': '#b08b3f',
        fontFamily: "'Source Serif 4', Georgia, serif",
        background: 'var(--paper)',
        color: 'var(--ink)',
        minHeight: '100%',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Space+Mono&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #e4d4a6; }
        a { color: inherit; }
      `}</style>

      {/* Header */}
      <header
        style={{
          borderBottom: '1px solid var(--rule)',
          padding: '28px 32px 24px',
          background: 'var(--paper)',
        }}
      >
        <div style={{ maxWidth: 980, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: '#8a7a52',
                  marginBottom: 10,
                }}
              >
                Swahilipot Hub Foundation
              </div>
              <h1
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  lineHeight: 1.05,
                  margin: 0,
                  color: 'var(--ink)',
                }}
              >
                Data Protection &amp; Privacy Policy
              </h1>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13, color: '#6b6248', lineHeight: 1.5 }}>
              <div>Kenya Data Protection Act, 2019</div>
              <div>Constitution of Kenya, Article 31</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setNavOpen((v) => !v)}
          style={{
            display: 'none',
            marginTop: 16,
            border: '1px solid var(--rule)',
            background: 'transparent',
            padding: '8px 14px',
            fontSize: 13,
            fontFamily: "'Space Mono', monospace",
            color: 'var(--ink)',
            cursor: 'pointer',
          }}
          className="nav-toggle"
        >
          {navOpen ? 'Close contents' : 'Contents'}
        </button>
      </header>

      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: 48,
          padding: '40px 32px 100px',
        }}
      >
        {/* Sidebar TOC */}
        <nav
          style={{
            position: 'sticky',
            top: 32,
            alignSelf: 'start',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
            fontSize: 13.5,
            paddingRight: 8,
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.06em',
              color: '#8a7a52',
              marginBottom: 14,
            }}
          >
            CONTENTS
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  style={{
                    display: 'flex',
                    gap: 10,
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px 0',
                    color: active === s.id ? 'var(--ink)' : '#8b8264',
                    fontWeight: active === s.id ? 600 : 400,
                    borderLeft: active === s.id ? '2px solid var(--gold)' : '2px solid transparent',
                    paddingLeft: 10,
                    marginLeft: -12,
                    lineHeight: 1.35,
                    fontFamily: "'Source Serif 4', Georgia, serif",
                  }}
                >
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11.5, color: '#b08b3f', minWidth: 18 }}>
                    {s.num}
                  </span>
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Document body */}
        <main>
          <Section id="intro" num="1" title="Introduction and Policy Statement" refCb={(el) => (refs.current.intro = el)}>
            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', marginBottom: 10 }}>1.1 Introduction</h3>
            <P n="1.1.1">
              Swahilipot Hub Foundation (hereinafter referred to as &ldquo;the Foundation&rdquo;) recognizes that the right to privacy is a fundamental human right safeguarded under Article 31 of the Constitution of Kenya, 2010, as well as under international human rights instruments.
            </P>
            <P n="1.1.2">
              This Policy is adopted pursuant to the Data Protection Act, 2019 of Kenya and its subsidiary legislation, and is informed by internationally accepted data protection standards, including the GDPR.
            </P>
            <P n="1.1.3">
              The Foundation, being a youth-centered organization engaged in innovation, training, community programming, and digital engagement, routinely processes personal data of beneficiaries, employees, partners, and stakeholders. Accordingly, it is committed to ensuring that all such processing is undertaken lawfully, fairly, transparently, and securely.
            </P>
            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>1.2 Policy Statement</h3>
            <P n="1.2.1">The Foundation shall process personal data in a lawful, fair, and transparent manner.</P>
            <P n="1.2.2">The Foundation commits to safeguarding the rights and freedoms of all data subjects and embedding data protection principles in all its operations.</P>
            <P n="1.2.3">Any breach of this Policy shall result in appropriate disciplinary, contractual, or legal action.</P>
          </Section>

          <Section id="definitions" num="2" title="Definitions and Interpretation" refCb={(el) => (refs.current.definitions = el)}>
            <p style={{ marginBottom: 18 }}>In this Policy, unless the context otherwise requires, the following terms shall have the meanings assigned to them hereunder:</p>
            <dl style={{ margin: 0, maxWidth: 700 }}>
              {DEFINITIONS.map(([term, def]) => (
                <div key={term} style={{ marginBottom: 16, borderTop: '1px solid var(--rule)', paddingTop: 14 }}>
                  <dt style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 15.5, marginBottom: 4, color: 'var(--ink)' }}>
                    &ldquo;{term}&rdquo;
                  </dt>
                  <dd style={{ margin: 0, fontSize: 15, color: '#4a4433' }}>{def}</dd>
                </div>
              ))}
            </dl>
            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '26px 0 10px' }}>2.2 Interpretation</h3>
            <P>Words importing the singular shall include the plural and vice versa.</P>
            <P n="2.2.1">References to any statute or statutory provision shall include any amendment, re-enactment, or replacement thereof.</P>
            <P n="2.2.2">Headings in this Policy are for convenience only and shall not affect the interpretation of the provisions herein.</P>
            <P n="2.2.3">In the event of any inconsistency between this Policy and Applicable Law, the provisions of Applicable Law shall prevail.</P>
          </Section>

          <Section id="purpose" num="3" title="Purpose" refCb={(el) => (refs.current.purpose = el)}>
            <p style={{ marginBottom: 14 }}>This Policy is intended to:</p>
            <Sub n="3.1">Provide a structured framework for lawful collection, use, storage, sharing, and disposal of personal data;</Sub>
            <Sub n="3.2">Ensure compliance with statutory and regulatory obligations;</Sub>
            <Sub n="3.3">Safeguard the rights of data subjects, including vulnerable populations such as youth and children;</Sub>
            <Sub n="3.4">Mitigate risks associated with data breaches, misuse, or unauthorized disclosure; and</Sub>
            <Sub n="3.5">Promote a culture of data protection and accountability within the Foundation.</Sub>
          </Section>

          <Section id="scope" num="4" title="Scope and Application" refCb={(el) => (refs.current.scope = el)}>
            <P n="4.1">This Policy applies to:</P>
            <Sub n="4.1.1">All employees, trustees, consultants, interns, and volunteers;</Sub>
            <Sub n="4.1.2">All partners, grantees, contractors, and third parties;</Sub>
            <Sub n="4.1.3">All personal data processed by the Foundation as a Data Controller or Data Processor.</Sub>
            <P n="4.2">It applies to all formats of data, including digital and physical records.</P>
            <P n="4.3">
              The responsibility for the continuous maintenance and ownership of this policy document lies with the Legal Department. This document will be subject to review at least once every 2 years.
            </P>
          </Section>

          <Section id="dpo" num="5" title="Data Protection Officer" refCb={(el) => (refs.current.dpo = el)}>
            <P n="5.1">The Foundation shall designate a Data Protection Officer (DPO).</P>
            <P n="5.2">The DPO shall oversee compliance, training, audits, and liaison with regulators.</P>
          </Section>

          <Section id="rights" num="6" title="Rights of Data Subjects" refCb={(el) => (refs.current.rights = el)}>
            <P n="6.1">The Foundation shall uphold:</P>
            <Sub n="6.1.1">Right to be informed;</Sub>
            <Sub n="6.1.2">Right of access;</Sub>
            <Sub n="6.1.3">Right to rectification;</Sub>
            <Sub n="6.1.4">Right to erasure;</Sub>
            <Sub n="6.1.5">Right to object;</Sub>
            <Sub n="6.1.6">Right to data portability.</Sub>
            <P n="6.2">Processing shall only occur where lawful, including consent, contractual necessity, legal obligation, public interest, or legitimate interest.</P>
            <P n="6.3">Consent must be informed, specific, and freely given.</P>
            <div style={{ background: '#f2ead4', border: '1px solid #e2d3a4', padding: '16px 18px', margin: '18px 0' }}>
              <P n="6.4">
                Notwithstanding any other provision herein, the collection and processing of personal data relating to children shall only be undertaken in accordance with the Data Protection Act, and shall be subject to verifiable consent of a parent or legal guardian, or such other lawful basis as may be permitted under the Act. In all instances, <strong>the best interests of the child shall be the primary consideration and shall prevail at all times.</strong>
              </P>
            </div>
            <P n="6.5">Data subjects may withdraw consent at any time.</P>
          </Section>

          <Section id="security" num="7" title="Data Security and Safeguards" refCb={(el) => (refs.current.security = el)}>
            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', marginBottom: 10 }}>7.1 General Obligations</h3>
            <P n="7.1.1">
              The Foundation shall implement and continuously maintain appropriate technical, organizational, and administrative security measures to protect personal data against unauthorized access, alteration, disclosure, loss, destruction, or any form of unlawful processing.
            </P>
            <P n="7.1.2">Such measures shall be proportionate to:</P>
            <Sub n="a.">the nature of the personal data processed;</Sub>
            <Sub n="b.">the level of risk to data subjects;</Sub>
            <Sub n="c.">the volume and sensitivity of data; and</Sub>
            <Sub n="d.">the technological environment in which processing occurs.</Sub>

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>7.2 Technical Safeguards</h3>
            <p style={{ marginBottom: 10 }}>The Foundation shall ensure the implementation of, inter alia, the following technical controls:</p>
            {[
              ['7.2.1 Access Control Systems', ['Role-based access control (RBAC) restricting data access strictly on a \u201cneed-to-know\u201d basis;', 'Unique user identification and authentication credentials for all systems.']],
              ['7.2.2 Encryption Standards', ['Encryption of personal data at rest and in transit using industry-standard encryption protocols;', 'Secure key management procedures.']],
              ['7.2.3 Network and System Security', ['Firewalls, intrusion detection systems, and endpoint protection tools;', 'Secure configuration of servers, cloud systems, and databases.']],
              ['7.2.4 Secure Authentication Mechanisms', ['Multi-factor authentication (MFA) for systems containing sensitive or large-scale personal data;', 'Strong password policies and periodic credential updates.']],
              ['7.2.5 Backup and Disaster Recovery', ['Regular encrypted backups of critical data;', 'A tested disaster recovery and business continuity plan to ensure data availability.']],
              ['7.2.6 Logging and Monitoring', ['Audit logs for all access, modification, and deletion of personal data;', 'Continuous monitoring for suspicious or unauthorized activity.']],
            ].map(([h, items]) => (
              <div key={h} style={{ marginBottom: 14 }}>
                <p style={{ fontWeight: 600, margin: '0 0 6px 22px' }}>{h}</p>
                <ul style={{ margin: '0 0 0 44px', padding: 0, listStyle: 'disc' }}>
                  {items.map((it) => (
                    <li key={it} style={{ marginBottom: 4 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>7.3 Organizational Safeguards</h3>
            <p style={{ marginBottom: 10 }}>The Foundation shall implement internal governance controls including:</p>
            <Sub n="7.3.1">Confidentiality Obligations &mdash; All staff and third parties shall be bound by confidentiality undertakings regarding personal data.</Sub>
            <Sub n="7.3.2">Access Governance &mdash; Formal procedures for granting, reviewing, and revoking access rights upon role change or termination.</Sub>
            <Sub n="7.3.3">Staff Training and Awareness &mdash; Regular mandatory training on data protection, cybersecurity, and incident response.</Sub>
            <Sub n="7.3.4">Internal Policies and Procedures &mdash; Implementation of ICT security policies, incident response protocols, and data handling procedures.</Sub>
            <Sub n="7.3.5">Third-Party Risk Management &mdash; Due diligence assessments of vendors and partners; contractual obligations requiring equivalent security standards.</Sub>

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>7.4 Physical Security Measures</h3>
            <p style={{ marginBottom: 10 }}>The Foundation shall ensure protection of physical records through:</p>
            <Sub n="a.">Restricted access to premises and storage facilities;</Sub>
            <Sub n="b.">Secure filing systems and locked storage for hard-copy records;</Sub>
            <Sub n="c.">Visitor access controls and monitoring where sensitive data is stored.</Sub>

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>7.5 Incident Detection and Response</h3>
            <p style={{ marginBottom: 10 }}>The Foundation shall maintain a Data Breach Response Mechanism, including:</p>
            <Sub n="a.">Immediate detection and reporting of suspected breaches;</Sub>
            <Sub n="b.">Internal escalation procedures to the Data Protection Officer;</Sub>
            <Sub n="c.">Containment and mitigation measures;</Sub>
            <Sub n="d.">Documentation and post-incident review;</Sub>
            <Sub n="e.">Notification to regulators and affected data subjects in accordance with legal timelines.</Sub>

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>7.6 Privacy by Design and Default</h3>
            <p style={{ marginBottom: 10 }}>The Foundation shall embed data protection principles into all systems, projects, and programs by ensuring that:</p>
            <Sub n="a.">Only necessary data is collected by default;</Sub>
            <Sub n="b.">Systems are designed to minimize data exposure;</Sub>
            <Sub n="c.">Privacy considerations are integrated at the earliest stages of project development.</Sub>
          </Section>

          <Section id="dpia" num="8" title="Data Protection Impact Assessments (DPIAs)" refCb={(el) => (refs.current.dpia = el)}>
            <P n="8.1">
              The Foundation shall conduct a Data Protection Impact Assessment (DPIA) prior to initiating any processing activity that is likely to result in a high risk to the rights and freedoms of data subjects, in accordance with applicable law and international best practice.
            </P>
            <P n="8.2">A DPIA shall be mandatory where processing involves, inter alia:</P>
            <Sub n="a)">Large-scale processing of personal data relating to beneficiaries, youth participants, or program users;</Sub>
            <Sub n="b)">Processing of sensitive personal data (including biometric, health, or safeguarding data);</Sub>
            <Sub n="c)">Systematic monitoring or profiling of individuals;</Sub>
            <Sub n="d)">Use of new or emerging technologies (including AI-based tools or digital platforms);</Sub>
            <Sub n="e)">Cross-border data transfers involving donor systems or international partners;</Sub>
            <Sub n="f)">Integration of multiple datasets that may lead to re-identification of individuals.</Sub>

            <P n="8.3">A DPIA conducted by the Foundation shall include:</P>
            <Sub n="a.">A clear description of the nature, scope, context, and purpose of processing;</Sub>
            <Sub n="b.">An assessment of necessity and proportionality of the processing activities;</Sub>
            <Sub n="c.">Identification and evaluation of risks to data subjects;</Sub>
            <Sub n="d.">Description of technical and organizational measures to mitigate risks;</Sub>
            <Sub n="e.">Assessment of residual risks after mitigation;</Sub>
            <Sub n="f.">Documentation of compliance with applicable legal obligations.</Sub>

            <P n="8.4">The Data Protection Officer shall be responsible for:</P>
            <Sub n="a.">Initiating DPIAs where required;</Sub>
            <Sub n="b.">Coordinating risk assessments with relevant departments;</Sub>
            <Sub n="c.">Reviewing DPIA outcomes and recommending mitigation measures;</Sub>
            <Sub n="d.">Maintaining DPIA records for audit and regulatory review.</Sub>

            <P n="8.5">Where a DPIA indicates high residual risk that cannot be mitigated, the Foundation shall:</P>
            <Sub n="a.">Consult the Office of the Data Protection Commissioner prior to processing (where required by law);</Sub>
            <Sub n="b.">Reassess whether the processing activity should be modified, postponed, or discontinued.</Sub>

            <P n="8.6">DPIAs shall not be treated as one-off exercises. The Foundation shall:</P>
            <Sub n="a.">Review DPIAs periodically or upon significant changes to processing activities;</Sub>
            <Sub n="b.">Update DPIAs where there are changes in technology, purpose, or risk profile;</Sub>
            <Sub n="c.">Maintain an auditable record of all DPIAs conducted.</Sub>
          </Section>

          <Section id="cyber" num="9" title="Cybersecurity and Information Security Provisions" refCb={(el) => (refs.current.cyber = el)}>
            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', marginBottom: 10 }}>9.1 General Cybersecurity Obligation</h3>
            <P n="9.1.1">
              The Foundation shall implement and maintain a comprehensive cybersecurity and information security framework designed to protect all personal data, organizational data, systems, networks, and digital infrastructure against cyber threats, unauthorized access, cyberattacks, data breaches, and system failures.
            </P>
            <P n="9.1.2">The Foundation recognizes cybersecurity as an integral component of data protection and institutional governance.</P>

            {[
              ['9.2', 'Cybersecurity Governance Framework', 'The Foundation shall establish clear governance structures for cybersecurity, including:', [
                'Appointment of a designated Information Security Lead (which may be integrated with the ICT or Data Protection function);',
                'Oversight by senior management and reporting to the Board where necessary;',
                'Development and periodic review of cybersecurity policies and protocols;',
                'Integration of cybersecurity risk management into organizational risk registers.',
              ]],
              ['9.3', 'Access Control and Identity Management', 'The Foundation shall ensure strict identity and access management controls, including:', [
                'Role-Based Access Control (RBAC) restricting access to authorized personnel only;',
                'Principle of least privilege at all times;',
                'Immediate revocation of access upon termination, suspension, or role change;',
                'Multi-Factor Authentication (MFA) for all critical systems, including email, databases, and cloud platforms;',
                'Regular access reviews and audits.',
              ]],
              ['9.4', 'Network and Infrastructure Security', 'The Foundation shall secure its ICT infrastructure through:', [
                'Deployment of firewalls, intrusion detection and prevention systems (IDS/IPS);',
                'Segmentation of networks to isolate sensitive systems;',
                'Secure configuration of servers, cloud systems, and endpoints;',
                'Continuous monitoring of network traffic for anomalies;',
                'Protection against malware, ransomware, and phishing attacks.',
              ]],
              ['9.5', 'Endpoint and Device Security', 'All devices used to access Foundation systems shall be subject to:', [
                'Mandatory installation of approved antivirus and endpoint protection software;',
                'Encryption of devices storing or accessing personal data;',
                'Automatic screen locking and secure authentication;',
                'Prohibition of unauthorized software installation;',
                'Mobile Device Management (MDM) controls where applicable.',
              ]],
              ['9.6', 'Secure Communication and Email Security', 'The Foundation shall ensure secure communication practices, including:', [
                'Use of official, secured organizational email accounts for all official communications;',
                'Encryption of sensitive email communications where necessary;',
                'Prohibition of transmission of sensitive personal data via unsecured channels unless properly encrypted;',
                'Awareness training on phishing, social engineering, and fraudulent communications.',
              ]],
              ['9.7', 'Data Backup and Recovery', 'The Foundation shall maintain a robust backup and disaster recovery system, including:', [
                'Regular automated backups of critical systems and databases;',
                'Encryption of backup data;',
                'Off-site or secure cloud storage of backups;',
                'Periodic testing of data restoration procedures;',
                'Maintenance of a documented Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP).',
              ]],
              ['9.9', 'Monitoring, Logging, and Threat Detection', 'The Foundation shall implement continuous monitoring mechanisms, including:', [
                'System and user activity logging for all critical systems;',
                'Real-time monitoring for unauthorized access attempts;',
                'Retention of logs for audit and investigative purposes;',
                'Regular review of logs by authorized personnel;',
                'Deployment of threat detection tools where feasible.',
              ]],
              ['9.10', 'Cybersecurity Awareness and Training', 'The Foundation shall ensure that all personnel:', [
                'Receive mandatory cybersecurity training upon onboarding;',
                'Undertake periodic refresher training on emerging threats;',
                'Are trained on phishing awareness, password hygiene, and safe data handling;',
                'Understand their obligations under this Policy.',
              ]],
              ['9.11', 'Third-Party Cybersecurity Compliance', 'All vendors, contractors, grantees, and partners accessing Foundation systems or data shall:', [
                'Comply with equivalent cybersecurity standards;',
                'Sign binding Data Processing or Data Sharing Agreements;',
                'Implement appropriate security safeguards;',
                'Permit security audits where necessary;',
                'Report cybersecurity incidents affecting Foundation data within 48 hours.',
              ]],
              ['9.12', 'Cloud and Digital Platform Security', 'Where cloud services or digital platforms are used, the Foundation shall ensure:', [
                'Use of reputable and secure service providers;',
                'Compliance with international security certifications (where applicable);',
                'Data encryption at rest and in transit;',
                'Clear contractual provisions on data ownership, access, and deletion;',
                'Geographic awareness of data storage locations for compliance with cross-border transfer rules.',
              ]],
              ['9.13', 'Cyber Risk Management', 'The Foundation shall maintain an ongoing cyber risk management framework that includes:', [
                'Regular vulnerability assessments and penetration testing (where feasible);',
                'Identification and mitigation of emerging cyber threats;',
                'Inclusion of cybersecurity risks in institutional risk registers;',
                'Continuous improvement of security controls.',
              ]],
            ].map(([n, h, lead, items]) => (
              <div key={n} style={{ margin: '22px 0' }}>
                <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', marginBottom: 8 }}>{n} {h}</h3>
                <p style={{ marginBottom: 8 }}>{lead}</p>
                <ul style={{ margin: '0 0 0 22px', padding: 0, listStyle: 'disc' }}>
                  {items.map((it) => (
                    <li key={it} style={{ marginBottom: 4 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#8a7a52', margin: '22px 0 10px' }}>9.8 Cybersecurity Incident Response</h3>
            <P n="9.8.1">The Foundation shall maintain a formal Cybersecurity Incident Response Plan, which shall include:</P>
            <Sub n="a.">Immediate detection, reporting, and escalation of cybersecurity incidents;</Sub>
            <Sub n="b.">Containment and mitigation measures to limit impact;</Sub>
            <Sub n="c.">Investigation and forensic analysis where required;</Sub>
            <Sub n="d.">Recovery and restoration of systems;</Sub>
            <Sub n="e.">Post-incident review and implementation of corrective actions.</Sub>
            <P n="9.8.2">All incidents shall be escalated to the Data Protection Officer without undue delay.</P>

            <div style={{ background: '#f6ecec', border: '1px solid #e3c9c9', padding: '16px 18px', margin: '20px 0' }}>
              <h3 style={{ fontSize: 14, fontFamily: "'Space Mono', monospace", color: '#9a4d4d', marginBottom: 10 }}>9.14 Prohibition of Unauthorized Access</h3>
              <p style={{ marginBottom: 10 }}>
                Any unauthorized access, interception, or interference with Foundation systems or data shall constitute a serious disciplinary and potentially criminal offence and may result in:
              </p>
              <Sub n="a.">Disciplinary action;</Sub>
              <Sub n="b.">Contract termination;</Sub>
              <Sub n="c.">Legal proceedings under applicable Kenyan cybercrime and data protection laws.</Sub>
            </div>
          </Section>

          <Section id="sharing-kenya" num="10" title="Data Sharing Within Kenya" refCb={(el) => (refs.current['sharing-kenya'] = el)}>
            <P n="10.1">
              The Foundation may share personal data with duly vetted partners, service providers, implementing partners, or government agencies within the Republic of Kenya where such sharing is lawful, necessary for the performance of its functions, programmatic implementation, compliance obligations, or legitimate interests of the Foundation, and is consistent with the principles of data minimisation and purpose limitation.
            </P>
            <P n="10.2">Any sharing of personal data within Kenya shall be subject to a written data sharing or data processing agreement, which shall, at a minimum, provide for:</P>
            <Sub n="a.">Purpose limitation &mdash; data shall be used strictly for the specified and lawful purpose for which it is shared;</Sub>
            <Sub n="b.">Confidentiality obligations &mdash; all recipients shall maintain strict confidentiality of shared data;</Sub>
            <Sub n="c.">Security safeguards &mdash; including administrative, technical, and physical safeguards to prevent unauthorised access, loss, alteration, or disclosure;</Sub>
            <Sub n="d.">Data minimisation &mdash; only the minimum necessary data shall be shared;</Sub>
            <Sub n="e.">Restrictions on onward transfer &mdash; no further sharing without prior written consent of the Foundation;</Sub>
            <Sub n="f.">Retention and deletion obligations &mdash; data must be deleted or returned upon completion of the purpose;</Sub>
            <Sub n="g.">Compliance with applicable law, including the Data Protection Act.</Sub>
          </Section>

          <Section id="cross-border" num="11" title="Cross-Border Data Transfers" refCb={(el) => (refs.current['cross-border'] = el)}>
            <P n="11.1">
              The Foundation may transfer personal data outside the Republic of Kenya in the course of implementing donor-funded programmes, partnerships, research activities, or where otherwise operationally required, provided that such transfer is lawful and justified.
            </P>
            <P n="11.2">
              All cross-border transfers shall comply with the provisions of the Data Protection Act and applicable international data protection standards, including principles relating to lawful processing, transparency, accountability, and security safeguards.
            </P>
            <P n="11.3">Cross-border transfers shall only be undertaken where one or more of the following conditions are met:</P>
            <Sub n="a.">The recipient jurisdiction or organisation provides adequate data protection safeguards;</Sub>
            <Sub n="b.">A binding written agreement is in place incorporating data protection obligations equivalent to this Policy;</Sub>
            <Sub n="c.">Explicit or informed consent of the data subject has been obtained, where required by law;</Sub>
            <Sub n="d.">The transfer is necessary for the performance of a contract, public interest mandate, or donor requirement;</Sub>
            <Sub n="e.">The transfer is otherwise permitted under applicable law.</Sub>
            <P n="11.4">
              The Foundation shall take reasonable steps to ensure that all international partners, contractors, or recipients of data maintain standards of protection equivalent to or higher than those required under Kenyan law, including appropriate technical and organisational safeguards.
            </P>
          </Section>

          <Section id="retention" num="12" title="Data Retention and Storage" refCb={(el) => (refs.current.retention = el)}>
            <P n="12.1">
              Personal data shall be retained only for as long as is necessary to fulfil the purpose for which it was collected, including legal, regulatory, contractual, donor, and operational requirements.
            </P>
            <P n="12.2">
              Subject to applicable legal or donor requirements, the Foundation shall retain personal data for a <strong>maximum period of seven (7) years</strong> from the date of last interaction or completion of the purpose of collection, whichever is later.
            </P>
            <P n="12.3">Upon expiry of the retention period, personal data shall be:</P>
            <Sub n="a.">Securely deleted or permanently destroyed; or</Sub>
            <Sub n="b.">Anonymised in such a manner that the data subject can no longer be identified; or</Sub>
            <Sub n="c.">Retained beyond the retention period only where renewed consent has been obtained or where required by law.</Sub>
            <Sub n="d.">The Foundation shall maintain a documented retention schedule and ensure periodic review of stored data to prevent unnecessary accumulation of personal data.</Sub>
          </Section>

          <Section id="disposal" num="13" title="Data Disposal" refCb={(el) => (refs.current.disposal = el)}>
            <P n="13.1">The Foundation shall ensure secure and irreversible disposal of personal data as follows:</P>
            <p style={{ fontWeight: 600, margin: '10px 0 6px 22px' }}>a. Hard copy records:</p>
            <Sub n="i.">Secure shredding using cross-cut or industrial shredders;</Sub>
            <Sub n="ii.">Incineration where appropriate; or</Sub>
            <Sub n="iii.">Certified destruction by an approved service provider.</Sub>
            <p style={{ fontWeight: 600, margin: '14px 0 6px 22px' }}>b. Electronic records:</p>
            <Sub n="i.">Secure deletion using industry-standard data wiping tools;</Sub>
            <Sub n="ii.">Overwriting or cryptographic erasure;</Sub>
            <Sub n="iii.">Physical destruction of storage media where necessary.</Sub>
            <P n="13.2">
              All data disposal activities shall be formally documented, including date, method of disposal, category of data disposed, and responsible officer, to ensure full auditability and accountability.
            </P>
          </Section>

          <Section id="breach" num="14" title="Data Breach Management" refCb={(el) => (refs.current.breach = el)}>
            <div style={{ background: '#f6ecec', border: '1px solid #e3c9c9', padding: '16px 18px', marginBottom: 16 }}>
              <P n="14.1">
                Any actual or suspected personal data breach shall be reported internally immediately and escalated to the designated Data Protection Officer without undue delay, and in any event <strong>within seventy-two (72) hours</strong> where the breach is likely to pose a risk to data subjects.
              </P>
            </div>
            <P n="14.2">
              Where required under the Data Protection Act, the Foundation shall notify the Office of the Data Protection Commissioner within the prescribed timelines and format.
            </P>
            <P n="14.3">Where a breach is likely to result in a high risk to the rights and freedoms of data subjects, the Foundation shall notify affected individuals without undue delay, providing clear information on:</P>
            <Sub n="a.">Nature of the breach;</Sub>
            <Sub n="b.">Likely consequences;</Sub>
            <Sub n="c.">Mitigation measures taken;</Sub>
            <Sub n="d.">Recommended protective steps.</Sub>
          </Section>

          <Section id="third-parties" num="15" title="Third Parties and Partners" refCb={(el) => (refs.current['third-parties'] = el)}>
            <P n="15.1">
              All third parties, partners, consultants, contractors, and service providers processing personal data on behalf of the Foundation shall be bound by written agreements requiring compliance with this Policy and the applicable provisions of the Data Protection Act.
            </P>
            <P n="15.2">
              All partners shall be required to report any suspected or actual data breach to the Foundation within <strong>forty-eight (48) hours</strong> of becoming aware of the incident.
            </P>
            <P n="15.3">
              The Foundation reserves the right to audit, monitor, or suspend any partner&rsquo;s access to data where non-compliance is suspected or confirmed.
            </P>
          </Section>

          <Section id="training" num="16" title="Training and Awareness" refCb={(el) => (refs.current.training = el)}>
            <P n="16.1">All employees, volunteers, interns, and relevant stakeholders shall undergo mandatory data protection and privacy training upon onboarding and periodically thereafter.</P>
            <P n="16.2">Data protection compliance shall form part of induction programmes, performance management systems, and continuous professional development.</P>
            <P n="16.3">The Foundation shall conduct periodic awareness campaigns to ensure continuous understanding of data protection obligations.</P>
          </Section>

          <Section id="roles" num="17" title="Roles and Responsibilities" refCb={(el) => (refs.current.roles = el)}>
            <P n="17.1">
              <strong>Staff Responsibilities:</strong> All staff shall ensure compliance with this Policy, uphold confidentiality obligations, and immediately report any suspected breach or misuse of data.
            </P>
            <P n="17.2">
              <strong>Management Responsibilities:</strong> Management shall ensure effective implementation of this Policy, including provision of resources, oversight mechanisms, and enforcement of compliance measures.
            </P>
            <P n="17.3">
              <strong>Board Responsibilities:</strong> The Board of Trustees shall provide strategic oversight, ensure accountability, and approve periodic reviews of the Policy.
            </P>
            <P n="17.4">
              <strong>Data Protection Function:</strong> Where applicable, the designated Data Protection Officer shall oversee compliance with the Data Protection Act, monitor risks, and serve as the primary contact for regulatory authorities.
            </P>
          </Section>

          <Section id="audit" num="18" title="Audit and Assurance" refCb={(el) => (refs.current.audit = el)}>
            <P n="18.1">The Foundation shall conduct periodic internal audits to assess compliance with this Policy, including data handling, storage, sharing, and security practices.</P>
            <P n="18.2">External independent audits may be commissioned periodically or where required by donors, regulators, or risk assessments.</P>
            <P n="18.3">Audit findings shall be documented, reported to management and the Board, and corrective actions shall be implemented within stipulated timelines.</P>
          </Section>

          <Section id="records" num="19" title="Records Management" refCb={(el) => (refs.current.records = el)}>
            <P n="19.1">The Foundation shall maintain accurate and up-to-date records of all data processing activities, including categories of data processed, lawful basis, and data sharing arrangements.</P>
            <P n="19.2">The Foundation shall maintain retention schedules for all categories of personal data processed.</P>
            <P n="19.3">The Foundation shall maintain a disposal register documenting all data destruction and anonymisation activities.</P>
          </Section>

          <Section id="review" num="20" title="Policy Review" refCb={(el) => (refs.current.review = el)}>
            <P n="20.1">This Policy shall be reviewed at least every two (2) years, or earlier where there are material changes in law, operations, donor requirements, or regulatory guidance under the Data Protection Act.</P>
            <P n="20.2">Amendments to this Policy shall be approved by the Board of Trustees.</P>
          </Section>

          <Section id="related" num="21" title="Related Policies" refCb={(el) => (refs.current.related = el)}>
            <p style={{ marginBottom: 12 }}>This Policy shall be read in conjunction with and shall not override the following:</p>
            <Sub n="a.">Safeguarding Policy</Sub>
            <Sub n="b.">Code of Conduct</Sub>
            <Sub n="c.">ICT and Information Security Policy</Sub>
            <Sub n="d.">Disciplinary Policy</Sub>
            <Sub n="e.">Whistleblowing Policy (where applicable)</Sub>
          </Section>

          <Section id="exception" num="22" title="Exception to Policy" refCb={(el) => (refs.current.exception = el)}>
            <p style={{ marginBottom: 14 }}>
              Policy deviation shall not be acceptable unless a department cannot implement the provisions of a policy as approved by the Board of Directors due to changes in local or international laws and regulatory requirements, and/or where the risk the policy was put in place to manage no longer exists. In such a case, the department should raise an addendum to change the policy.
            </p>
            <p>
              Exception(s) to this policy must be approved by the Chief Executive Officer or their designate and, if of a material nature, the Board of Directors must ratify such changes.
            </p>
          </Section>

          <footer style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--rule)', fontSize: 12.5, color: '#8a7a52' }}>
            Swahilipot Hub Foundation &middot; Data Protection &amp; Privacy Policy
          </footer>
        </main>
      </div>

      <style>{`
        @media (max-width: 820px) {
          div[style*="grid-template-columns: 240px 1fr"] {
            grid-template-columns: 1fr !important;
          }
          nav[style*="position: sticky"] {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}