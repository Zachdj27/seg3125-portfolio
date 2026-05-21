import zachPic from '../assets/zach.jpeg'
function About() {
    return (
      <section id="about" className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="section-label">
                SEG 3125 Portfolio
              </p>
  
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm Zach.
              </h1>
  
              <p className="lead hero-text">
                I am a Software Engineering student at the University of Ottawa
                interested in full stack development, UI design, and technology.
              </p>
  
              <p className="hero-text">
                This portfolio was created for SEG 3125 and showcases my
                design work, projects, and learning process throughout the course.
              </p>
  
              <div className="mt-4">
                <a href="#cases" className="btn btn-primary me-3">
                  View Case Studies
                </a>
  
                <a
                  href="https://github.com/Zachdj27"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  GitHub
                </a>
              </div>
            </div>
  
            <div className="col-lg-5 text-center">
              <img
                src={zachPic}
                alt="Profile"
                className="profile-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
