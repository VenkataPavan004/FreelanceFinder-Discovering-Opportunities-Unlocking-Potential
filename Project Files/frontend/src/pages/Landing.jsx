import AppNavbar from "../components/Navbar";
import "./Landing.css";

export default function Landing() {
  return (
    <>
      <AppNavbar />

      <section className="hero">
        <div className="hero-inner">
          <h1>Empower Your Journey</h1>

          <p>
            Hire expert freelancers or showcase your skills and get hired
            globally on SB Works.
          </p>
        </div>
      </section>
    </>
  );
}
