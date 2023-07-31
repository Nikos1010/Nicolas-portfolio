import { useTranslate } from "../../../../hooks";
import { CVItem } from "../../models";
import style from "./customSection.module.scss";

interface Props {
  title: string;
  items: CVItem[];
  company?: string;
  date?: string;
  custom?: string;
  translate?: boolean;
}

function CustomSection({ title, items, company, date, translate = true, custom = '' }: Props) {
  const { translateWord } = useTranslate();
  return (
    <section
      className={`${style.container} ${style[custom]}`}>
      <div className={style.containerTitle}>
        <h3>{translate ? translateWord(title) : title}</h3>
        {company && <p>{company}</p>}
        {date && <span className={style.otherInfo}>{date}</span>}
      </div>
      <ul>
        {items &&
          items.map((item, i) => (
            <li key={i}>
              {item.translate ? translateWord(item.name) : item.name}{" "}
              {item.link && (
                <a className={style.linkTo} href={item.link}>
                  👀 Link to {translateWord(title)}
                </a>
              )}
            </li>
          ))}
      </ul>
    </section>
  );
}
export default CustomSection;
