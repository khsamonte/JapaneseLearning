export const numbers = [
  { kana: "いち", kanji: "一", romaji: "ichi", meaning: "one" },
  { kana: "に", kanji: "二", romaji: "ni", meaning: "two" },
  { kana: "さん", kanji: "三", romaji: "san", meaning: "three" },
  { kana: "よん", kanji: "四", romaji: "yon", meaning: "four" },
  { kana: "ご", kanji: "五", romaji: "go", meaning: "five" },
  { kana: "ろく", kanji: "六", romaji: "roku", meaning: "six" },
  { kana: "なな", kanji: "七", romaji: "nana", meaning: "seven" },
  { kana: "はち", kanji: "八", romaji: "hachi", meaning: "eight" },
  { kana: "きゅう", kanji: "九", romaji: "kyū", meaning: "nine" },
  { kana: "じゅう", kanji: "十", romaji: "jū", meaning: "ten" },
];

// TENS

const tens = [];
const tensMeaning = [
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

for (let i = 0; i < 9; i++) {
  tens.push({
    kana: numbers[9]["kana"] + numbers[i]["kana"],
    kanji: numbers[9]["kanji"] + numbers[i]["kanji"],
    romaji: numbers[9]["romaji"] + numbers[i]["romaji"],
    meaning: tensMeaning[i],
  });
}

numbers.push(...tens);

// 20-99

console.log(numbers);
