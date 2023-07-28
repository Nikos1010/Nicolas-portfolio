import { useTranslate } from "../../hooks";
import style from "./subtitle.module.scss";

interface Props {
    name: string;
}

function Subtitle({ name }: Props) {
  const { translateWord } = useTranslate();
  return <h3 className={style.subtitle}>{translateWord(name)}</h3>;
}
export default Subtitle;
