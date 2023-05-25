// import { templateSettings } from "lodash";

const numbers = [
  { kana: "いち", kanji: "一", romaji: "ichi", meaning: "1" },
  { kana: "に", kanji: "二", romaji: "ni", meaning: "2" },
  { kana: "さん", kanji: "三", romaji: "san", meaning: "3" },
  { kana: "よん", kanji: "四", romaji: "yon", meaning: "4" },
  { kana: "ご", kanji: "五", romaji: "go", meaning: "5" },
  { kana: "ろく", kanji: "六", romaji: "roku", meaning: "6" },
  { kana: "なな", kanji: "七", romaji: "nana", meaning: "7" },
  { kana: "はち", kanji: "八", romaji: "hachi", meaning: "8" },
  { kana: "きゅう", kanji: "九", romaji: "kyū", meaning: "9" },
  { kana: "じゅう", kanji: "十", romaji: "jū", meaning: "10" },
];

// TENS

const tens = [];
for (let i = 0; i < 9; i++) {
  tens.push({
    kana: numbers[9]["kana"] + numbers[i]["kana"],
    kanji: numbers[9]["kanji"] + numbers[i]["kanji"],
    romaji: numbers[9]["romaji"] + "-" + numbers[i]["romaji"],
    meaning: numbers[0]["meaning"] + numbers[i]["meaning"],
  });
}

// numbers.push(...tens);
// console.log(numbers);

// 20-99

// TRY

const doubleDigits = [];
numbers.forEach((tens, tensIndex) => {
  numbers.forEach((ones) => {
    // Ignore 101+
    if (tens.meaning === "10") {
      return;
    }
    // Ignore 100
    if (numbers[tensIndex + 1].meaning === "10" && ones.meaning === "10") {
      return;
    }

    let kana = "";
    let kanji = "";
    let romaji = "";
    let meaning = "";

    if (ones.meaning === "10") {
      kanji = numbers[tensIndex + 1].kanji + numbers[9].kanji;
      kana = numbers[tensIndex + 1].kana + numbers[9].kana;
      romaji = numbers[tensIndex + 1].romaji + "-jū";
      meaning = numbers[tensIndex + 1].meaning + "0";
    } else {
      if (tens.meaning === "1") {
        kanji = numbers[9].kanji + ones.kanji;
        kana = numbers[9].kana + ones.kana;
        romaji = numbers[9].romaji + "-" + ones.romaji;
        meaning = numbers[0].meaning + ones.meaning;
      } else {
        kanji = tens.kanji + numbers[9].kanji + ones.kanji;
        kana = tens.kana + numbers[9].kana + ones.kana;
        romaji = tens.romaji + "-" + numbers[9].romaji + "-" + ones.romaji;
        meaning = tens.meaning + ones.meaning;
      }
    }

    doubleDigits.push({
      kanji: kanji,
      kana: kana,
      romaji: romaji,
      meaning: meaning,
    });
  });
});

numbers.push(...doubleDigits);
export { numbers };
