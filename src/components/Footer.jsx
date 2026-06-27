import { PROFILE } from "../constants";
import Logo from "./Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo className="h-6 w-6" showName />
        <p className="text-sm text-muted">© {year} {PROFILE.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
