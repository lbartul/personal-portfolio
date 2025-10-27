const Projects = () => {
  return (
    <section className="project">
      <div className="project-title">
        <h1>Projects</h1>
      </div>

      <div className="project-container">

        <div className="pblueprint">
          <img src="/ecomm.jpg" alt="Project 2" />
          <p className="project-p">
            This is my full stack E-commerce Project (Still working on it)
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="buttons">
            <a
              href="https://github.com/lbartul/e-commerce-project"
              target="_blank"
            >
              View on GitHub
            </a>
            <a
              href="https://e-commerce-project-delta-lovat.vercel.app/"
              target="_blank"
            >
              Go to App
            </a>
          </div>
        </div>

        <div className="pblueprint">
          <img src="/twapi.png" alt="Project 3" />
          <p className="project-p">This is my Twitter-Api project</p>
          <div className="tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
          </div>

          <div className="buttons">
            <a
              href="https://github.com/lbartul/Twitter-api-Project"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="pblueprint">
          <img src="/port.png" alt="Project 1" />
          <p className="project-p">
            This is my portfolio project with dark theme and language provider
          </p>
          <div className="tags">
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="buttons">
            <a
              href="https://github.com/lbartul/frontendproject"
              target="_blank"
            >
              View on GitHub
            </a>
            <a
              href="https://frontendproject-peach.vercel.app/"
              target="_blank"
            >
              Go to App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
