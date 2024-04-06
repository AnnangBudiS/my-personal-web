import { NavLink } from "react-router-dom";
import { SIDEBAR_DATA } from "../data/data";

const Sidebar = () => {
  return (
    <div className="relative hidden lg:block z-[1]">
      <ul className="menu glasmorph rounded-box fixed right-4 top-56">
        {SIDEBAR_DATA.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.link}
              className="tooltip tooltip-left"
              data-tip={item.title}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
