import { useEffect, useState } from "react";
import styles from './toggle.module.scss'

function Toggle() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(prevIsDark => !prevIsDark);
  }

  useEffect(() => {
    const { style } = document.documentElement
    style.setProperty('--background', isDark ? '#2F2B2E' : '#EFEFEF');
    style.setProperty('--foreground', isDark ? '#EFEFEF' : '#000');
    style.setProperty('--buttons-background', isDark ? '#2D1140' : '#9D25F3');
    style.setProperty('--primary', isDark ? 'linear-gradient(182deg, #59181E 0%, #371F48 90.10%)' : 'linear-gradient(179deg, #F755BE 0%, #B55EF3 100%)');
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
