const Projects = () => {
    return (
        <section className="project">

            <div className="project-title">
                <h1>Projects</h1>
            </div>

            <div className="project-container">

                <div className="pblueprint">
                    <img src="/main.jpg" alt="Project 1" />
                    <p className="project-p">This is my Currency project which is my first project (TOO BASIC)</p>
                    <span>Java Script</span>
                    <span>Axios</span>
                </div>

                <div className="pblueprint">
                    <img src="/main.jpg" alt="Project 2" />
                    <p className="project-p">This is my full stack E-commerce Project(Still working on it)</p>
                </div>

                <div className="pblueprint">
                    <img src="/main.jpg" alt="Project 3" />
                    <p className="project-p">This is my Twitter-Api project(Still working on it)</p> 
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>PostgreSQL</span>
                </div>

            </div>
        </section>
    )
}

export default Projects;
