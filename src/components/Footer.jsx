import { PROFILE } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-ink/50 sm:flex-row">
        <p>
          © {year} {PROFILE.name}
        </p>
        <p>Designed &amp; built in React — end to end.</p>
      </div>
    </footer>
  );
};

export default Footer;
