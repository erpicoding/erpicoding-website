import imgHA from "./assets/hausaufgaben-manager.webp";
import imgEncryptor from "./assets/smg.png";

import ProjectItem from "./ProjectItem.jsx";

function Projects() {
  return (
    <section className="contentSection">
      <h2>Projects</h2>
      <div className="projektContainer">
        <ProjectItem
          name="Homework-Manager"
          img={imgHA}
          stack={["Html", "CSS", "JavaScript"]}
          linkOpen="https://erpicoding.de/ha"
          linkGH="https://github.com/erpicoding/Hausaufgaben-Manager"
        />
        <ProjectItem
          name="Encryption tool"
          img={imgEncryptor}
          stack={["Html", "SCSS", "JavaScript"]}
          linkOpen="https://erpicoding.de/smg"
          linkGH="https://github.com/erpicoding/secret-message-generator/"
        />
      </div>
    </section>
  );
}

export default Projects;
