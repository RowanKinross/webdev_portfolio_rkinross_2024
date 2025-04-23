import { useNavigate, useLocation } from "react-router-dom";
import './navToggle.css';

function NavToggle() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    const nextPath = location.pathname === "/portfolio" ? "/about" : "/portfolio";
    navigate(nextPath);
  };

  const buttonLabel = location.pathname === "/portfolio" ? "// ABOUT" : "// PORTFOLIO";

  return (
    <button className="navToggle" onClick={handleToggle}>
      {buttonLabel}
    </button>
  );
}

export default NavToggle;
