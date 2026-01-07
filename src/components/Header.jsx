import Nav from "./Nav";
import lemonLogo from "../assets/lemon.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <img src={lemonLogo} alt="Little Lemon logo" className="logo" />
          <h1>Little Lemon</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}
