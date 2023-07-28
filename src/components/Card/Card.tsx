import styles from "./card.module.scss";
import { LiaGithubAlt, LiaTripadvisor } from "react-icons/lia";

interface Props {
  name: string;
  img: string;
}

function Card({ name, img }: Props) {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.cardImg}></img>
      <ul className={styles.socialMedia}>
        <li>
          <LiaTripadvisor />
        </li>
        <li>
          <LiaGithubAlt />
        </li>
      </ul>
      <div className={styles.cardInfo}>
        <p className={styles.title}>{name}</p>
      </div>
    </div>
  );
}
export default Card;
