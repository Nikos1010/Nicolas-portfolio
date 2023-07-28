import style from "./tag.module.scss";

interface Props {
  name: string;
}

function Tag({ name }: Props) {
  return (
    <div className={style.tag}>
      <span>{name}</span>
    </div>
  );
}
export default Tag;
