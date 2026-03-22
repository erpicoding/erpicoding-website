import githubLogo from "./assets/logos/github.svg";

function Hero() {
  return (
    <header>
      <div className="banner borderAnimation">
        <h1>
          Moin, ich heiße <br />
          <span className="highlightText">Erik</span>
        </h1>
        <h2>
          Ich bin Freizeit [
          <span className="highlightText">"Frontend-Developer"</span>,
          <wbr />
          <span className="highlightText">"Web-Designer"</span>] aus
          Braunschweig
        </h2>
        <div className="line"></div>
        <div className="links">
          <a href="https://github.com/erpicoding">
            <img src={githubLogo} height="34px" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
