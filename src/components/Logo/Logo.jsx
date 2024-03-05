import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
const Logo = ({ className, size }) => {
  return (
    <Link to="/" className={className}>
      <img src={logo} width={size} />
    </Link>
  );
};

Logo.defaultProps = {
  size: 80,
};
export default Logo;
