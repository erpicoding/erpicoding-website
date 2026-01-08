import githubLogo from "./assets/logos/github.svg";

function Hero() {
  return (
    <header>
      <div className="banner borderAnimation">
        <h1>
          Hi, My name is <br />
          <span className="highlightText">Erik</span>
        </h1>
        <h2>
          I am a [<span className="highlightText">"Frontend-Developer"</span>,
          <span className="highlightText">"Web-Designer"</span>] located in
          Germany
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
