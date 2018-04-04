const alphabet = {
  a: 1,
  á: 2,
  b: 3,
  d: 4,
  ð: 5,
  e: 6,
  f: 7,
  g: 8,
  h: 9,
  i: 10,
  í: 11,
  j: 12,
  k: 13,
  l: 14,
  m: 15,
  n: 16,
  o: 17,
  ó: 18,
  p: 19,
  r: 20,
  s: 21,
  t: 22,
  u: 23,
  ú: 24,
  v: 25,
  y: 26,
  ý: 27,
  æ: 28,
  ø: 29,
};

module.exports = function sort(array) {
  return array.sort((a, b) => {
    for (let i = 0; i < a.length; i += 1) {
      if (alphabet[a.charAt(i).toLowerCase()] < alphabet[b.charAt(i).toLowerCase()]) return -1;
      if (alphabet[a.charAt(i).toLowerCase()] > alphabet[b.charAt(i).toLowerCase()]) return 1;
    }
    return 0;
  });
};
