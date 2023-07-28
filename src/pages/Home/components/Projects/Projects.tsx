import { Card, Subtitle } from "../../../../components";
import style from "./projects.module.scss";
import { PROJECTS } from "../../constants";

function Projects() {
  return (
    <section className={style.containerProject}>
      <Subtitle name={"Projects"} />
      <div className={style.listProjects}>
        {PROJECTS.map((proj) => (
          <Card
            key={proj.key}
            name={proj.name}
            img={proj.img}
            demo={proj.demo}
            git={proj.github}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
