import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <section id="home">
      <div className="gradient-overlay"></div>
      <div className="max-w-4xl text-center z-10">
        <h1>
          Hi, I'm <span>Agostina</span>
        </h1>
        <h2>Full Stack Developer & RPA Specialist</h2>
        <p>I build smart, efficient, and beautiful digital experiences💖</p>
        <div className="buttons">
          <div>
            <Link to="/about">View projects</Link>
          </div>
          <div>
            <Link to="/about">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
