const projects = [
    {
      title: 'Design 1: Service Website',
      description: 'A responsive website for a fake business.',
      image:
        'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=1470&auto=format&fit=crop',
      link: 'https://supercutz.netlify.app'
    },
    {
      title: 'Design 2: Memory Game.',
      description:'Interactive game built for the web',
      image:
        'https://images.unsplash.com/photo-1541278107931-e006523892df?q=80&w=1471&auto=format&fit=crop',
        link: 'https://think-tiles.netlify.app'
    },
    {
      title: 'Design 3: E-commerce site',
      description: 'Modern e-commerce shopping experience.',
      image:
        'https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=687&auto=format&fit=crop',
        link: 'https://chronos-e-commerce.netlify.app'
    },
    {
      title: 'Design 4: Analytics Dashboard',
      description: 'Dashboard with analytics and visualizations.',
      image:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop'
    }
  ];
  
  function CaseStudies() {
    return (
      <section id="cases" className="section-light">
        <div className="container">
          <h2 className="section-title mb-5">
            Case Studies
          </h2>
  
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="case-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="case-image"
                  />
  
                  <div className="p-4">
                    <h4>{project.title}</h4>
  
                    <p className="text-light-emphasis">
                      {project.description}
                    </p>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"className="btn btn-outline-light">
                      View Project
                    </a>
                    ) : (
                      <button className="btn btn-outline-light">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default CaseStudies;
