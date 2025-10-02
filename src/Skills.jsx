const Skills = () => {
    return (

        <section className="skillpart">
            <div>
                <h1 className="skill-title">Skills</h1>
            </div>

            <div className="skill-imgs">
                <div>
                    <img src="../public/js.png" alt=""  className="skill-img" />
                    <p>Java Script</p>
                </div>

                <div>
                    <img src="../public/react.png" alt="" className="skill-img" />
                    <p>React</p>
                </div>

                <div>
                    <img src="../public/postgre.png" alt="" className="skill-img" />
                    <p>PostgreSQL</p>
                </div>

                <div>
                    <img src="../public/java.png" alt="" className="skill-img" />
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
            </div>
        </section>
    )
}


export default Skills;