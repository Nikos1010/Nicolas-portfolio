import styles from "./card.module.scss";
import { LiaGithubAlt, LiaTripadvisor } from "react-icons/lia";

interface Props {
  name: string;
  demo: string;
  git: string;
  img: string;
}

function Card({ name, img, demo, git }: Props) {
  const goToPage = (link: string) => {
    if (link.length > 0) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className={styles.card}>
      <img src={img} className={styles.cardImg}></img>
      <ul className={styles.socialMedia}>
        <li onClick={() => goToPage(demo)}>
          <LiaTripadvisor />
        </li>
        {git && (
          <li onClick={() => goToPage(git)}>
            <LiaGithubAlt />
          </li>
        )}
      </ul>
      <div className={styles.cardInfo}>
        <p className={styles.title}>{name}</p>
      </div>
    </div>
  );
}
export default Card;
