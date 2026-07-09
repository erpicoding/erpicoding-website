import githubLogo from "./assets/logos/github.svg";
import mailLogo from "./assets/logos/mail.svg";

function Hero() {
  return (
    <header>
      <div className="banner borderAnimation">
        <h1>
          <span className="highlightText">Erpi</span>Coding
        </h1>

        <h2>
          Freizeit [
          <span className="highlightText">"Frontend&#8209;Developer"</span>,
          <wbr />
          <span className="highlightText">"Web&#8209;Designer"</span>] aus
          Braunschweig
        </h2>
        <div className="line"></div>
        <div className="links">
          <a href="https://github.com/erpicoding">
            <img src={githubLogo} height="34px" />
          </a>
          <a href="mailto://erik@erpicoding.de">
            <img src={mailLogo} height="40px" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
