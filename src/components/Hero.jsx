import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero py-20 lg:py-0 min-h-[88vh] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImage}
          alt="hero image"
          className="object-contain lg:max-w-md"
        />
        <div className="p-4 lg:p-0">
          <h2 className="text-2xl font-bold">Hello there,</h2>
          <h1 className="text-3xl lg:text-8xl font-bold py-3">
            I am <span className="text-emerald-400">Annang Budi S</span>
          </h1>
          <p className="text-2xl font-bold mb-2">Front End Developer</p>
          <p>
            Designing Tomorrow's Web Today: Where Innovation Meets Code –
            Front-End Brilliance!
          </p>
          <div className="mt-5 flex gap-4 items-center">
            <NavLink to="/my-projects" className="btn btn-primary rounded">
              View My Work
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline rounded">
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
