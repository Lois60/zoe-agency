import "./About.css";

export const About = ()=>{
    return (
      <section className="about-container">
        <div className="about-img">
          <img  className="abt-img"  src="./AboutPic.jpeg" alt="" srcset="" />
        </div>
        <div className="about-text">
          <h1>Digital Marketing That Works</h1>
          <p>
            Zoe Agency is a dynamic digital marketing firm dedicated to
            empowering small and medium enterprises (SMEs) with cutting-edge
            website designs and advanced technology solutions. Our mission is to
            enhance your business's online presence, driving increased leads and
            sales through our innovative digital strategies.
          </p>
          <div className="about-numbers">
            <div className="first">
              <h1>2 +</h1>
              <p>Years Of Experience</p>
            </div>
            <div className="second">
              <h1>15 +</h1>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
    );
}