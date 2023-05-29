// import { templateSettings } from "lodash";

const numbers = [
  { kana: "いち", kanji: "一", romaji: "ichi", english: "1" },
  { kana: "に", kanji: "二", romaji: "ni", english: "2" },
  { kana: "さん", kanji: "三", romaji: "san", english: "3" },
  { kana: "よん", kanji: "四", romaji: "yon", english: "4" },
  { kana: "ご", kanji: "五", romaji: "go", english: "5" },
  { kana: "ろく", kanji: "六", romaji: "roku", english: "6" },
  { kana: "なな", kanji: "七", romaji: "nana", english: "7" },
  { kana: "はち", kanji: "八", romaji: "hachi", english: "8" },
  { kana: "きゅう", kanji: "九", romaji: "kyuu", english: "9" },
  { kana: "じゅう", kanji: "十", romaji: "juu", english: "10" },
];

// TENS

const tens = [];
for (let i = 0; i < 9; i++) {
  tens.push({
    kana: numbers[9]["kana"] + numbers[i]["kana"],
    kanji: numbers[9]["kanji"] + numbers[i]["kanji"],
    romaji: numbers[9]["romaji"] + "-" + numbers[i]["romaji"],
    english: numbers[0]["english"] + numbers[i]["english"],
  });
}

// numbers.push(...tens);
// console.log(numbers);

// 20-99

const doubleDigits = [];
numbers.forEach((tens, tensIndex) => {
  numbers.forEach((ones) => {
    // Ignore 101+
    if (tens.english === "10") {
      return;
    }
    // Ignore 100
    if (numbers[tensIndex + 1].english === "10" && ones.english === "10") {
      return;
    }

    let kana = "";
    let kanji = "";
    let romaji = "";
    let english = "";

    if (ones.english === "10") {
      kanji = numbers[tensIndex + 1].kanji + numbers[9].kanji;
      kana = numbers[tensIndex + 1].kana + numbers[9].kana;
      romaji = numbers[tensIndex + 1].romaji + "juu";
      english = numbers[tensIndex + 1].english + "0";
    } else {
      if (tens.english === "1") {
        kanji = numbers[9].kanji + ones.kanji;
        kana = numbers[9].kana + ones.kana;
        romaji = numbers[9].romaji + "" + ones.romaji;
        english = numbers[0].english + ones.english;
      } else {
        kanji = tens.kanji + numbers[9].kanji + ones.kanji;
        kana = tens.kana + numbers[9].kana + ones.kana;
        romaji = tens.romaji + "" + numbers[9].romaji + "" + ones.romaji;
        english = tens.english + ones.english;
      }
    }

    doubleDigits.push({
      kanji: kanji,
      kana: kana,
      romaji: romaji,
      english: english,
    });
  });
});

numbers.push(...doubleDigits);

const spanOfTimeUnits = [
  { kanji: "分", kana: "ふん", romaji: "fun", english: "minutes" },
  {
    kanji: "時間",
    kana: "じかん",
    romaji: "jikan",
    english: ["hour", "hours"],
  },
  { kanji: "", kana: "", romaji: "", english: ["day", "days"] },
  { kanji: "", kana: "", romaji: "", english: "weeks" },
  { kanji: "", kana: "", romaji: "", english: "months" },
  { kanji: "", kana: "", romaji: "", english: "years" },
];

console.log(numbers);

export { numbers };
