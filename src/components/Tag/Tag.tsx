import { ReactElement } from "react";
import style from "./tag.module.scss";

interface Props {
  name: string;
  icon: ReactElement;
  link?: string;
}

function Tag({ name, icon, link }: Props) {
  const hoverStyle: Record<string, string> = {
    linkedin: style.linkedin,
    email: style.gmail,
  };

  const styleTag = (): string => {
    return link ? hoverStyle[name.toLocaleLowerCase()] : style.noEvent;
  };

  return (
    <a className={`${style.tag} ${styleTag()}`} href={link} target="_blank">
      {icon}
      <span>{name}</span>
    </a>
  );
}
export default Tag;
