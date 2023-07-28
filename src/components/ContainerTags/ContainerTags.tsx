import { Tag } from "..";
import { ModelTag } from "../../models";
import style from "./containerTags.module.scss";

interface Props {
  tags: ModelTag[];
  left?: boolean;
}

function ContainerTags({ tags, left = false }: Props) {
  return (
    <div className={`${style.containerTags} ${left ? style.left : ""}`}>
      {tags.map((tag) => (
        <Tag key={tag.key} name={tag.name} icon={tag.icon} link={tag.link} />
      ))}
    </div>
  );
}
export default ContainerTags;
