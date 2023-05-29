import { numbers } from "./numbers";

// Sunday to Saturday translations
const daysOfTheWeek = [
  {
    kana: "げつようび",
    kanji: "月曜日",
    romaji: "getsuyoubi",
    english: "monday",
  },
  { kana: "かようび", kanji: "火曜日", romaji: "kayoubi", english: "tuesday" },
  {
    kana: "すいようび",
    kanji: "水曜日",
    romaji: "suiyoubi",
    english: "wednesday",
  },
  {
    kana: "もくようび",
    kanji: "木曜日",
    romaji: "mokuyoubi",
    english: "thursday",
  },
  {
    kana: "きんようび",
    kanji: "金曜日",
    romaji: "kinyoubi",
    english: "friday",
  },
  { kana: "どようび", kanji: "土曜日", romaji: "doyoubi", english: "saturday" },
  {
    kana: "にちようび",
    kanji: "日曜日",
    romaji: "nichiyoubi",
    english: "sunday",
  },
];

// January to December translations
const months = [
  {
    kanji: "一月",
    kana: "いちがつ",
    romaji: "ichigatsu",
    english: "january",
    days: 31,
  },
  {
    kanji: "二月",
    kana: "にがつ",
    romaji: "nigatsu",
    english: "february",
    days: 29,
  },
  {
    kanji: "三月",
    kana: "さんがつ",
    romaji: "sangatsu",
    english: "march",
    days: 31,
  },
  {
    kanji: "四月",
    kana: "しがつ",
    romaji: "shigatsu",
    english: "april",
    days: 30,
  },
  {
    kanji: "五月",
    kana: "ごがつ",
    romaji: "gogatsu",
    english: "may",
    days: 31,
  },
  {
    kanji: "六月",
    kana: "ろくがつ",
    romaji: "rokugatsu",
    english: "june",
    days: 30,
  },
  {
    kanji: "七月",
    kana: "しちがつ",
    romaji: "shichigatsu",
    english: "july",
    days: 31,
  },
  {
    kanji: "八月",
    kana: "はちがつ",
    romaji: "hachigatsu",
    english: "august",
    days: 31,
  },
  {
    kanji: "九月",
    kana: "くがつ",
    romaji: "kugatsu",
    english: "september",
    days: 30,
  },
  {
    kanji: "十月",
    kana: "じゅうがつ",
    romaji: "juugatsu",
    english: "october",
    days: 31,
  },
  {
    kanji: "十一月",
    kana: "じゅういちがつ",
    romaji: "juuichigatsu",
    english: "november",
    days: 30,
  },
  {
    kanji: "十二月",
    kana: "じゅうにがつ",
    romaji: "juunigatsu",
    english: "december",
    days: 31,
  },
];

// Days 1 - 10 translations
const daysCounters = [
  { kanji: "", kana: "", romaji: "tsuitachi", english: "1" },
  { kanji: "", kana: "", romaji: "futsuka", english: "2" },
  { kanji: "", kana: "", romaji: "mikka", english: "3" },
  { kanji: "", kana: "", romaji: "yokka", english: "4" },
  { kanji: "", kana: "", romaji: "itsuka", english: "5" },
  { kanji: "", kana: "", romaji: "muika", english: "6" },
  { kanji: "", kana: "", romaji: "nanoka", english: "7" },
  { kanji: "", kana: "", romaji: "youka", english: "8" },
  { kanji: "", kana: "", romaji: "kokonoka", english: "9" },
  { kanji: "", kana: "", romaji: "tooka", english: "10" },
];

// Days 11 to 31 translations
function addRemainingDays() {
  let remainingDays = [];

  for (let i = 11; i < 32; i++) {
    let romaji = "";
    if (i === 14) {
      romaji = "juuyokka";
    } else if (i === 20) {
      romaji = "hatsuka";
    } else if (i === 24) {
      romaji = "nijuuyokka";
    } else {
      romaji = numbers[i - 1].romaji + "nichi";
    }
    romaji = romaji.replace("nana", "shichi");
    romaji = romaji.replace("kyuu", "ku");

    remainingDays.push({
      kanji: "",
      kana: "",
      romaji: romaji,
      english: i + "",
    });
  }
  return remainingDays;
}
daysCounters.push(...addRemainingDays());

// Combine the months (Jan to Dec) and days (1 to 31)
const dates = [];
function createDates() {
  const arr = [];

  months.forEach((month, idx) => {
    for (let i = 0; i < month.days; i++) {
      arr.push({
        kanji: "",
        kana: "",
        romaji: month.romaji + " " + daysCounters[i].romaji,
        english: month.english + " " + daysCounters[i].english,
      });
    }
  });

  return arr;
}
dates.push(...createDates());

export { daysOfTheWeek, dates, daysCounters };
