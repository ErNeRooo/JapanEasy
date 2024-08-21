const partOfSpeechData: string[][] = [
  ["adn.", "adnominal"],
  ["adv.", "adverb"],
  ["aux.", "auxiliary"],
  ["conj.", "conjunction"],
  ["cp.", "compound"],
  ["i-adj.", "i-adjective"],
  ["interj.", "interjection"],
  ["n.", "noun"],
  ["na-adj.", "na-adjective"],
  ["num.", "numeral"],
  ["p.", "particle"],
  ["p. case", "case particle"],
  ["p. conj.", "conjunctive particle"],
  ["p. disc.", "discourse particle"],
  ["pron.", "pronoun"],
  ["v.", "verb"],
];

const getFullPartOfSpeech = (array: string[]) => {
  const fullNames = [];
  for (let i = 0; i < partOfSpeechData.length; i++) {
    if (array.includes(partOfSpeechData[i][0])) {
      fullNames.push(partOfSpeechData[i][1]);
    }
  }

  return fullNames;
};

export default getFullPartOfSpeech;
