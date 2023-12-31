import { useTranslate } from "../../../../hooks";
import style from "./presentation.module.scss";
import imgProfile from "../../../../assets/profile.png";
import { ContainerTags, Subtitle } from "../../../../components";
import { TAGSABOUT } from "../../constants";

function Presentation() {
  const { translateWord } = useTranslate();
  return (
    <section className={style.container}>
      <div className={style.containerText}>
        <Subtitle name={"About_me"} />
        <p>
          <strong>{translateWord("Impactful_phrase")}</strong>.{" "}
          {translateWord("describe_me")}
        </p>
        <p>
          <strong>{translateWord("service_from_colombia")}</strong>
        </p>
        <ContainerTags tags={TAGSABOUT} left={true} />
      </div>
      <figure>
        <img src={imgProfile} alt="Noith image" />
      </figure>
    </section>
  );
}
export default Presentation;
