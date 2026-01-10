import scssImg from "./assets/logos/scss.svg";
import reactImg from "./assets/logos/react.png";
import nodeImg from "./assets/logos/node.svg";

import htmlImg from "./assets/logos/html.webp";
import cssImg from "./assets/logos/css.svg";
import jsImg from "./assets/logos/js.svg";

import StackItem from "./StackItem";

function Stack() {
  return (
    <section className="contentSection">
      <h2>Main Stack</h2>
      <div className="stackRow">
        <StackItem name="SCSS" img={scssImg} />
        <StackItem name="React" img={reactImg} />
        <StackItem name="NodeJS" img={nodeImg} />
      </div>
      <h2>Old Stack</h2>
      <div className="stackRow">
        <StackItem name="HTML" img={htmlImg} />
        <StackItem name="CSS" img={cssImg} />
        <StackItem name="JavaScript" img={jsImg} />
      </div>
    </section>
  );
}

export default Stack;
