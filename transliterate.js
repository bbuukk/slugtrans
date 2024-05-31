import { slugify, unslugify } from "./slugify.js";

// Transliteration map from Ukrainian to English
const transliterationMap = {
  ",": ",",
  "`": "`",
  "'": "~",
  " ": " ",
  "-": "_",
  "!": "!",
  ".": ".",
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "yi",
  й: "yu",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "hch",
  ш: "sh",
  щ: "shch",
  ь: "mz",
  ю: "iu",
  я: "ya",
};

// Reverse mapping for untransliteration
const untransliterationMap = {};
for (let key in transliterationMap) {
  untransliterationMap[transliterationMap[key]] = key;
}

// Transliterate function
export function transliterate(text) {
  const lowercase_text = text.toLowerCase();

  let result = "";
  for (let char of lowercase_text) {
    result += transliterationMap[char] || char;
  }
  return result;
}

export function untransliterate(text) {
  let result = "";

  const keys = Object.keys(untransliterationMap).sort(
    (a, b) => b.length - a.length
  );

  for (let i = 0; i < text.length; ) {
    for (let key of keys) {
      if (text.startsWith(key, i)) {
        result += untransliterationMap[key];
        i += key.length;
        break;
      }
    }
  }

  return result;
}
