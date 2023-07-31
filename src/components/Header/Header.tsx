import { NavRoutes, Toggle } from "..";
import { OPTIONS } from "../../constants";
import styles from "./header.module.scss";
import DropdownLanguage from "../DropdownLanguage/DropdownLanguage";

function Header() {
  const optionNav = [OPTIONS.HOME, OPTIONS.CV];

  return (
    <header className={styles.header}>
      <NavRoutes routes={optionNav} />
      <div className={styles.buttons}>
        <DropdownLanguage />
        <Toggle />
      </div>
    </header>
  );
}
export default Header;
