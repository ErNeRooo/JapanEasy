import alphabetType from "../types/alphabetType";
import KanaType from "../types/kanaType";
import {
  hiragana,
  hiraganaDiacritics,
  hiraganaDiagraphs,
  katakana,
  katakanaDiacritics,
  katakanaDiagraphs,
} from "./kanaArrays";

const getRandomKana = (
  alphabetType: alphabetType,
  isMonographs: boolean,
  isDiacritics: boolean,
  isDiagraphs: boolean
): KanaType => {
  const kanaArray = [];
  if (alphabetType === "hiragana") {
    if (isMonographs) {
      kanaArray.push(...hiragana);
    }
    if (isDiacritics) {
      kanaArray.push(...hiraganaDiacritics);
    }
    if (isDiagraphs) {
      kanaArray.push(...hiraganaDiagraphs);
    }
  } else if (alphabetType === "katakana") {
    if (isMonographs) {
      kanaArray.push(...katakana);
    }
    if (isDiacritics) {
      kanaArray.push(...katakanaDiacritics);
    }
    if (isDiagraphs) {
      kanaArray.push(...katakanaDiagraphs);
    }
  }

  const randomKana = Math.floor(Math.random() * kanaArray.length);

  return {
    kana: kanaArray[randomKana][0],
    romaji: kanaArray[randomKana][1],
  } as KanaType;
};

export default getRandomKana;
