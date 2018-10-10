import article281 from "./assets/data/logboek/281";
import article1000 from "./assets/data/logboek/1000";
import article1001 from "./assets/data/logboek/1001";
import article1002 from "./assets/data/logboek/1002";
import article1003 from "./assets/data/logboek/1003";
import article1004 from "./assets/data/logboek/1004";
import article1005 from "./assets/data/logboek/1005";
import article1006 from "./assets/data/logboek/1006";
import article1007 from "./assets/data/logboek/1007";
import article1008 from "./assets/data/logboek/1008";
import article1009 from "./assets/data/logboek/1009";
import article1010 from "./assets/data/logboek/1010";
import article1011 from "./assets/data/logboek/1011";
import article1012 from "./assets/data/logboek/1012";
import article1013 from "./assets/data/logboek/1013";
import article1014 from "./assets/data/logboek/1014";
import article1015 from "./assets/data/logboek/1015";
import article1016 from "./assets/data/logboek/1016";
import article1017 from "./assets/data/logboek/1017";
import article1018 from "./assets/data/logboek/1018";
import article1019 from "./assets/data/logboek/1019";
import article1020 from "./assets/data/logboek/1020";
import article1021 from "./assets/data/logboek/1021";
import article1022 from "./assets/data/logboek/1022";
import article1023 from "./assets/data/logboek/1023";
import article1024 from "./assets/data/logboek/1024";
import article1025 from "./assets/data/logboek/1025";
import article1026 from "./assets/data/logboek/1026";
import article1027 from "./assets/data/logboek/1027";
import article1028 from "./assets/data/logboek/1028";
import article1029 from "./assets/data/logboek/1029";
import article1030 from "./assets/data/logboek/1030";
import article1031 from "./assets/data/logboek/1031";
import article1032 from "./assets/data/logboek/1032";

const articles = [
  article1032,
  article1031,
  article1030,
  article1029,
  article1028,
  article1027,
  article1026,
  article1025,
  article1024,
  article1023,
  article1022,
  article1021,
  article1020,
  article1019,
  article1018,
  article1017,
  article1016,
  article1015,
  article1014,
  article1013,
  article1012,
  article1011,
  article1010,
  article1009,
  article1008,
  article1007,
  article1006,
  article1005,
  article1004,
  article1003,
  article1002,
  article1001,
  article1000,
  article281
];
const [latestArticle] = articles;

const previousArticle = (article) => {
  const index = articles.indexOf(article);
  return articles[index + 1];
}

const nextArticle = (article) => {
  const index = articles.indexOf(article);
  return articles[index - 1];
}

export { latestArticle, previousArticle, nextArticle, articles };
