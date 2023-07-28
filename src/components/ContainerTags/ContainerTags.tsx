import { Tag } from "..";
import style from "./containerTags.module.scss";

interface Props {
  tags: string[];
  left?: boolean;
}

function ContainerTags({ tags, left = false }: Props) {
  return (
    <div className={`${style.containerTags} ${left ? style.left : ""}`}>
      {tags.map((tag, i) => (
        <Tag key={i} name={tag} />
      ))}
    </div>
  );
}
export default ContainerTags;
