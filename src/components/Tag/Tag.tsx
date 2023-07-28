import { ReactElement } from "react";
import style from "./tag.module.scss";

interface Props {
  name: string;
  icon: ReactElement;
  link?: string;
}

function Tag({ name, icon, link }: Props) {
  return (
    <a className={`${style.tag} ${link ? '': style.noEvent}`} href={link} target="_blank">
      {icon}
      <span>{name}</span>
    </a>
  );
}
export default Tag;
