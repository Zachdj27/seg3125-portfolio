import barberImg from '../assets/barber.png';
import shopImg from '../assets/eshop.png';
import memoryImg from '../assets/memory.png';
import dashboardImg from '../assets/dashboard.png';

const projects = [
    {
      title: 'Design 1: Service Website',
      description: 'A responsive website for a fake business.',
      image:
        barberImg,
      link: 'https://supercutz.netlify.app'
    },
    {
      title: 'Design 2: Memory Game.',
      description:'Interactive game built for the web',
      image:
        memoryImg,
        link: 'https://think-tiles.netlify.app'
    },
    {
      title: 'Design 3: E-commerce site',
      description: 'Modern e-commerce shopping experience.',
      image:
        shopImg,
        link: 'https://chronos-e-commerce.netlify.app'
    },
    {
      title: 'Design 4: Analytics Dashboard',
      description: 'Dashboard with analytics and visualizations.',
      image:
      dashboardImg,
      link: 'https://rink-metrics.netlify.app'
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
