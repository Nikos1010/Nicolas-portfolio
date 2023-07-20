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
    style.setProperty('--primary', isDark ? 'linear-gradient(75deg, rgba(157,17,154,1) 0%, rgba(0,24,172,1) 100%)' : 'linear-gradient(264deg, rgba(194,73,205,1) 0%, rgba(72,90,196,1) 100%)');
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
