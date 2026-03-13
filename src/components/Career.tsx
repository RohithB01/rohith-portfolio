import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E in Computer Science</h4>
                <h5>Kalpataru Institute of Technology, Tiptur</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Completed Bachelor of Engineering in Computer Science and
              Engineering, building a strong foundation in programming,
              algorithms, and software development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Teachnook, Bengaluru</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and deployed a responsive web application using HTML, CSS,
              and JavaScript. Integrated REST APIs for real-time data and gained
              hands-on experience in Git, debugging, and end-to-end deployment
              workflows.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Tech in Artificial Intelligence</h4>
                <h5>REVA University, Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specializing in Generative AI and RAG-based systems. Built
              end-to-end ML pipelines for fraud detection, document intelligence,
              and churn prediction. Holds dual Microsoft Azure certifications
              (AI-102 & DP-100).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;