import { CustomSection } from "./components";
import style from "./cv.module.scss";
import { EDUCATION, EXPERIENCE, SKILLS, UNIQUENAMEPROJ } from "./constants";
import { TAGSHOME } from "..";
import { ContainerTags } from "../../components";

function PageCV() {
  return (
    <>
      <article>
        <section className={style.sectionTitle}>
          <h1 className={style.title}>Nicolas Montealegre Barragán</h1>
          <ContainerTags tags={TAGSHOME} />
        </section>
        <hr />
        <CustomSection title="Skills" items={SKILLS} />
        <hr />
        <CustomSection title="Projects" items={UNIQUENAMEPROJ} />
        <hr />
        <CustomSection title="Experience" custom="bt0" items={[]} />
        {EXPERIENCE &&
          EXPERIENCE.map((exp) => (
            <CustomSection
              key={exp.company}
              title={exp.profession}
              company={exp.company}
              date={exp.date}
              items={exp.goals}
              translate={false}
              custom="section"
            />
          ))}
        <hr />
        <CustomSection title="Education" custom="bt0" items={[]} />
        {EDUCATION &&
          EDUCATION.map((edu) => (
            <CustomSection
              key={edu.company}
              title={edu.profession}
              company={edu.company}
              date={edu.date}
              items={edu.goals}
              custom="section"
            />
          ))}
      </article>
    </>
  );
}
export default PageCV;
