import { NavLink } from "react-router-dom";
import styles from "./option.module.scss";
import { BodyOption } from "../../models";

interface Props {
  routes: BodyOption[];
}

function Options({ routes }: Props) {
  return (
    <nav className={styles.containerLink}>
      {routes.map((option) => (
        <NavLink
          key={option.routerLink}
          to={option.routerLink}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }>
          {option.label}
        </NavLink>
      ))}
    </nav>
  );
}
export default Options;
