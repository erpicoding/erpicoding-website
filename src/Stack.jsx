import scssImg from "./assets/logos/scss.svg";
import reactImg from "./assets/logos/react.png";
import nodeImg from "./assets/logos/node.svg";

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
    </section>
  );
}

export default Stack;
