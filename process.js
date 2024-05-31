export function sanitize(text) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const html = /<[^>]*>/g;

  return text.replace(html, '').replace(punctuation, '').toLowerCase();
}

export function processForSE(text) {
  const whspace = /\s+/;
  const words = text.split(whspace);

  /* Remove the last letter from each word
        and filter out words shorter than 2 characters */
  const prsWords = words
    .map((word) => word.slice(0, -1))
    .filter((word) => word.length >= 2);

  return prsWords.join(' ');
}
