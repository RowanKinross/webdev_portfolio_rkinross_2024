import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './navToggle.css';

function NavToggle() {
  const [isPortfolio, setIsPortfolio] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    const nextPath = isPortfolio ? "/about" : "/portfolio";
    setIsPortfolio(!isPortfolio);
    navigate(nextPath);
  };

  // switch up portfolio and about label based on what I'm looking at
  const buttonLabel = location.pathname === "/about" ? "PORTFOLIO" : "ABOUT";

  return (
    <button className="navToggle" onClick={handleToggle}>
      // {buttonLabel}
    </button>
  );
}

export default NavToggle;