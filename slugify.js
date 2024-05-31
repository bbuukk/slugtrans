import { transliterate, untransliterate } from "./transliterate.js";

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w~,-]+/g, "")
    .replace(/,/g, "--");
}

export function unslugify(text) {
  return text
    .replace(/--/g, ",")
    .replace(/-/g, " ")
    .replace(/\w\S*/g, function (txt) {
      return txt;
    });
}
