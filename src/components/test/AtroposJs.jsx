import Atropos from "atropos/react";
import { NavLink } from "react-router-dom";

const AtroposJs = ({ title, description, link, image }) => {
  return (
    <Atropos
      className="card w-96 bg-base-300 shadow-xl"
      activeOffset={40}
      shadow={false}
      onRotate={true}
      rotate={true}
      rotateXMax={4}
      rotateYMax={4}
    >
      <figure>
        <img src={image} alt={title} data-atropos-offset="-5" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-emerald-500" data-atropos-offset="5">
          {title}
        </h2>
        <p data-atropos-offset="2">{description}</p>
        <div className="card-actions justify-end">
          <NavLink
            to={link}
            className="btn btn-outline"
            data-atropos-offset="-1"
          >
            Demo
          </NavLink>
        </div>
      </div>
    </Atropos>
  );
};

export default AtroposJs;
