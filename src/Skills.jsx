const Skills = () => {
    return (

        <section className="skillpart">
            <div>
                <h1 className="skill-title">Skills</h1>
                <p>I am still learning and improving my self so there will be more and more.</p>
            </div>

            <div className="skill-imgs">
                <div>
                    <img src="/js.png" alt=""  className="skill-img" />
                    <p>JavaScript</p>
                </div>

                <div>
                    <img src="/react.png" alt="" className="skill-img" />
                    <p>React</p>
                </div>

                <div>
                    <img src="/postgre.png" alt="" className="skill-img" />
                    <p>PostgreSQL</p>
                </div>

                <div>
                    <img src="/java.png" alt="" className="skill-img" />
                    <p>Java</p>
                </div>

                <div>
                    <i class="fa-brands fa-html5"></i>
                    <p>HTML 5</p>
                </div>

                <div>
                    <i class="fa-brands fa-css3-alt"></i>
                    <p>CSS 3</p>
                </div>

                <div>
                    <img src="/spring.jpg" alt="" className="skill-img" />
                    <p>React</p>
                </div>
            </div>
        </section>
    )
}


export default Skills;