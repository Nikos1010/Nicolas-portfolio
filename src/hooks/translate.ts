import { useLanguage } from "../context";
import { en, es } from "../translate";

interface Props {
  selectLanguage: (language: string) => void;
  translateWord: (word: string) => string;
}

export const useTranslate = (): Props => {
  const { language, setLanguage } = useLanguage();
  const TRANSLATE_DIC: Record<string, Record<string, string>> = {
    es,
    en,
  };

  const selectLanguage = (language: string): void => {
    setLanguage(language);
  };

  const translateWord = (word: string): string => {
    return TRANSLATE_DIC[language][word];
  };

  return {
    selectLanguage,
    translateWord,
  };
};
