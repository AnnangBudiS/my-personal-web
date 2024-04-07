import { RiMenu5Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Swap = () => {
  return (
    <label className="btn btn-circle swap swap-rotate">
      <input type="checkbox" />

      {/* hamburger icon */}
      <RiMenu5Fill className="swap-off fill-current" />

      {/* close icon */}
      <IoCloseSharp className="swap-on fill-current" />
    </label>
  );
};

export default Swap;
