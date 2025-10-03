

const Home = () => {
  return (
    <section className="home">
      <div className="home-img">
        <img src="/main.jpg" alt="profile" />
      </div>
      <div className="home-content">
        <h1>
          Hi, It's <span>Bartu</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span></span>
        </h3>
        <p>
          I have been interested in software development since high school. 
          Over time, I turned this interest into practice and started learning programming. 
          Currently, I am actively enrolled in a full-stack development course. 
          On the front-end side, I’m working with React and JavaScript. 
          Right now i am working with Java, Spring Boot and SQL.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/bartu-aksu-b949ab34a/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/lbartul" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/lbaartul/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="mailto:lbartuaksul@gmail.com?subject=İletişim&body=Merhaba Bartu,"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
