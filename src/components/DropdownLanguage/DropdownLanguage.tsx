import { ChangeEvent, useState } from "react";
import { useTranslate } from "../../hooks";
import styles from './dropdownLanguage.module.scss'

function DropdownLanguage() {
  const { selectLanguage, translateWord } = useTranslate();
  const options = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
  ];
  const defaultValue =
    navigator.language === "en-US" ? "en" : navigator.language;

  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    selectLanguage(newValue);
  };

  return (
    <select className={styles.select} value={selectedValue} onChange={handleSelectChange}>
      {options.map((option) => (
        <option className={styles.option} key={option.value} value={option.value}>
          {translateWord(option.label)}
        </option>
      ))}
    </select>
  );
}

export default DropdownLanguage;
