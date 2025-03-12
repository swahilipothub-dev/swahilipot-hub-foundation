import React from 'react';

function Reports() {
  const reports = [
    {
      title: 'Annual Impact Report 2023',
      category: 'Annual Report',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
      description: 'A comprehensive overview of our achievements, impact metrics, and community initiatives throughout 2023.',
      downloadUrl: '#',
      fileSize: '2.5 MB',
      date: 'December 2023'
    },
    {
      title: 'Youth Empowerment Program Evaluation',
      category: 'Program Report',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      description: 'Detailed analysis of our youth empowerment programs and their impact on community development.',
      downloadUrl: '#',
      fileSize: '1.8 MB',
      date: 'October 2023'
    },
    {
      title: 'Technology Initiative Results',
      category: 'Project Report',
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
      description: 'Results and outcomes from our technology training and innovation programs.',
      downloadUrl: '#',
      fileSize: '3.2 MB',
      date: 'September 2023'
    },
    {
      title: 'Community Engagement Survey',
      category: 'Research Report',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      description: 'Findings from our comprehensive community engagement and needs assessment survey.',
      downloadUrl: '#',
      fileSize: '1.5 MB',
      date: 'August 2023'
    },
    {
      title: 'Arts & Culture Program Impact',
      category: 'Program Report',
      thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b',
      description: 'Evaluation of our arts and culture initiatives and their impact on youth development.',
      downloadUrl: '#',
      fileSize: '2.1 MB',
      date: 'July 2023'
    },
    {
      title: 'Financial Transparency Report',
      category: 'Financial Report',
      thumbnail: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07',
      description: 'Detailed financial statements and allocation of resources for our programs and initiatives.',
      downloadUrl: '#',
      fileSize: '1.9 MB',
      date: 'June 2023'
    }
  ];

  return (
    <>
      <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">Reports & Publications</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Our Reports</div>
            <h1 className="display-6 mb-5">Latest Reports & Publications</h1>
          </div>
          
          <div className="row g-4">
            {reports.map((report, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="causes-item d-flex flex-column bg-light border-top border-5 border-primary rounded-top overflow-hidden h-100">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src={report.thumbnail} alt={report.title} style={{height: '250px', width: '100%', objectFit: 'cover'}} />
                    <div className="causes-overlay">
                      <a className="btn btn-outline-primary" href={report.downloadUrl}>
                        Download Report
                        <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                          <i className="fa fa-download"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="p-4 flex-fill d-flex flex-column">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="text-primary">{report.category}</small>
                      <small className="text-primary"><i className="fa fa-file-pdf me-2"></i>{report.fileSize}</small>
                    </div>
                    <h5 className="mb-3">{report.title}</h5>
                    <p className="mb-4">{report.description}</p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between">
                        <small><i className="fa fa-calendar me-2"></i>{report.date}</small>
                        <a className="text-primary" href={report.downloadUrl}>
                          Download Now<i className="fa fa-arrow-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;