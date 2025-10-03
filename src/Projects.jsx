const Projects = () => {
    return (
        <section className="project">

            <div className="project-title">
                <h1>Projects</h1>
            </div>

            <div className="project-container">


                <div className="pblueprint">
                    <a href="https://e-commerce-project-delta-lovat.vercel.app/" target="_blank">
                        <img src="/ecomm.jpg" alt="Project 2" />
                        <p className="project-p">This is my full stack E-commerce Project (Still working on it)</p>
                        <div className="tags">
                            <span>Java Script</span>
                            <span>React</span>
                        </div>
                    </a>
                </div>

                <div className="pblueprint">
                    <a href="https://github.com/lbartul/Twitter-api-Project" target="_blank">
                        <img src="/twapi.png" alt="Project 3" />
                        <p className="project-p">This is my Twitter-Api project (Still working on it)</p> 
                        <div className="tags">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>PostgreSQL</span>
                        </div>
                    </a>
                </div>


                <div className="pblueprint">
                    <a href="https://frontendproject-peach.vercel.app/" target="_blank">
                        <img src="/port.png" alt="Project 1" />
                        <p className="project-p">This is my portfolio project with dark theme and language provider</p>
                        <div className="tags">
                            <span>JavaScript</span>
                            <span>React</span>
                        </div>
                    </a>  
                </div>

            </div>
        </section>
    )
}

export default Projects;
