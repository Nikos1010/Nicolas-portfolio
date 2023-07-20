import { useEffect, useState } from "react";
import styles from './toggle.module.scss'

function Toggle() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(prevIsDark => !prevIsDark);
  }

  useEffect(() => {
    const { style } = document.documentElement
    style.setProperty('--background', isDark ? '#1f2023' : '#efefef');
    style.setProperty('--foreground', isDark ? '#efefef' : '#1f2023');
    style.setProperty('--primary', isDark ? '#151516' : '#e3e3e3');
  }, [isDark]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
    }
  }, [])

  return (
    <div className={`${styles.toggle} ${isDark ? styles.dark : ''}`}>
      <label className={styles.toggleLabel} htmlFor="darkModeToggle" onClick={handleClick}>
        <div className={styles.toggleInner}>
          <div className={styles.toggleSwitch}>{isDark ? '🌙' : '🔆'}</div>
        </div>
      </label>
    </div>
  );
};

export default Toggle
