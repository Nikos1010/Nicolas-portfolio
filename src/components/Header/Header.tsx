import { NavRoutes, Toggle } from "..";
import { OPTIONS } from "../../constants";
import styles from "./header.module.scss";

function Header() {
  const optionNav = [
    OPTIONS.HOME,
    OPTIONS.CV,
    OPTIONS.PROJECTS,
    OPTIONS.SKILLS,
  ];

  return (
    <header className={styles.header}>
      <NavRoutes routes={optionNav} />
      <Toggle />
    </header>
  );
}
export default Header;
