/* eslint-disable react/prop-types */
import brandLogo from "../assets/akshatt.png";

const Logo = ({ className = "h-8 w-8", showName = false }) => (
  <span className="inline-flex items-center gap-2.5">
    <img src={brandLogo} alt="Akshat Dwivedi" className={`${className} object-contain`} />
    {showName && (
      <span className="text-sm font-medium tracking-tight text-ink">Akshat Dwivedi</span>
    )}
  </span>
);

export default Logo;
