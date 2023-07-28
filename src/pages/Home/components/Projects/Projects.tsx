import { Card, Subtitle } from "../../../../components";
import style from "./projects.module.scss";
import fundation from '../../../../assets/fundacion.png'

function Projects() {
  const PROJECTS = ["Fundación Cultipva-T", "Arroz con Pollo", "Rappi", "No se que pedo"];
  return (
    <section className={style.containerProject}>
      <Subtitle name={"Projects"} />
      <div className={style.listProjects}>
        {PROJECTS.map((proj, i) => (
          <Card key={i} name={proj} img={fundation} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
