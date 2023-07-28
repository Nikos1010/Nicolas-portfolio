import { ContainerTags } from "../../components";
import { useTranslate } from "../../hooks";
import { Presentation } from "./components";
import { TAGSHOME } from "./constants";
import style from "./home.module.scss";

function Home() {
  const { translateWord } = useTranslate();

  return (
    <article className={style.containerHome}>
      <div className={style.title}>
        <h1>Nicolas Montealegre</h1>
        <h2>{translateWord("Frontend_Developer")}</h2>
        <ContainerTags tags={TAGSHOME} />
      </div>
      <Presentation />
    </article>
  );
}
export default Home;
