import scssImg from "./assets/logos/scss.svg";
import reactImg from "./assets/logos/react.png";
import nodeImg from "./assets/logos/node.svg";

import expressImg from "./assets/logos/express.jpg";
import jsImg from "./assets/logos/js.svg";

import StackItem from "./StackItem";

function Stack() {
  return (
    <section className="contentSection stackSection">
      <div className="stack">
        <h2>Frontend</h2>
        <StackItem name="React" img={reactImg} />
        <StackItem name="JavaScript" img={jsImg} />
        <StackItem name="SCSS" img={scssImg} />
      </div>
      <div className="stack">
        <h2>Backend</h2>
        <StackItem name="NodeJS" img={nodeImg} />
        <StackItem name="express" img={expressImg} />
      </div>
    </section>
  );
}

export default Stack;
