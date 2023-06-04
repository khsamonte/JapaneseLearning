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
  { kanji: "分", kana: "ふん", romaji: "fun", english: "minute" },
  {
    kanji: "時間",
    kana: "じかん",
    romaji: "jikan",
    english: "hour",
  },
  { kanji: "", kana: "", romaji: "nichi", english: "day" },
  { kanji: "週", kana: "しゅう", romaji: "shuu", english: "week" },
  { kanji: "カ月", kana: "かげつ", romaji: "kagetsu", english: "month" },
  { kanji: "年", kana: "ねん", romaji: "nen", english: "year" },
];

function addNumbersToSpanOfTime() {
  const arr = [];

  function romajiConverter(unit, i) {
    if (unit.english === "minute") {
      if (i === 1) {
        return "ippun";
      } else if (i === 3 || i === 4) {
        return `${numbers[i - 1].romaji}pun`;
      } else if (i === 6) {
        return "roppun";
      } else if (i === 8) {
        return "happun";
      } else if (i === 10) {
        return "juppun";
      }
    } else if (unit.english === "hour") {
      if (i === 4) {
        return "yojikan";
      } else if (i === 7) {
        return ["nanajikan", "shichijikan"];
      } else if (i === 9) {
        return "kujikan";
      }
    } else if (unit.english === "week") {
      if (i === 1) {
        return ["isshuu", "isshuukan"];
      } else if (i === 8) {
        return ["hasshuu", "hasshuukan"];
      } else {
        return [
          `${numbers[i - 1].romaji}${unit.romaji}`,
          `${numbers[i - 1].romaji}${unit.romaji}kan`,
        ];
      }
    }

    return `${numbers[i - 1].romaji}${unit.romaji}`;
  }

  function pluralizeEN(unit, i) {
    if (i === 1) {
      return `${i} ${unit}`;
    }
    return `${i} ${unit}s`;
  }

  spanOfTimeUnits.forEach((unit) => {
    for (let i = 1; i <= 10; i++) {
      arr.push({
        kanji: "",
        kana: "",
        romaji: romajiConverter(unit, i),
        english: pluralizeEN(unit.english, i),
      });
    }
  });

  return arr;
}

const spanOfTime = addNumbersToSpanOfTime();

console.log(spanOfTime);

export { numbers, spanOfTime };
