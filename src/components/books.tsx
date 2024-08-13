import {
  questionsBFG,
  questionsCharlotteWeb,
  questionsMagicTreeHouse,
} from "./questionary";

export const charlotteWebBook = {
  name: "Charlotte`s Web",
  author: "E.B. White",
  description:
    "Charlotte's Web is a heartwarming tale of friendship and loyalty. It follows the story of a pig named Wilbur and his spider friend, Charlotte, who works to save him from being slaughtered by writing messages in her web.",
  pages: 192,
  image: "/charlotte-web.jpg",
  points: 4,
  questions: { questionsCharlotteWeb },
};

export const theMagicTreeHouseBook = {
  name: "The Magic Tree House: Dinosaurs Before Dark",
  author: "Mary Pope Osborne",
  description:
    "Join Jack and Annie as they discover a magical tree house filled with books that transport them back to the time of dinosaurs. In this first adventure, they encounter a T-Rex and have to find their way back home. ",
  pages: 80,
  image: "/magic-tree-house.jpg",
  points: 2,
  questions: { questionsMagicTreeHouse },
};

export const theBfgBook = {
  name: "The BFG",
  author: "Roald Dahl",
  description:
    "The BFG tells the story of Sophie, a young girl who befriends the Big Friendly Giant. Together, they embark on a journey to stop the other giants who are not so friendly from eating humans.",
  pages: 224,
  image: "/bfg.jpg",
  points: 5,
  questions: { questionsBFG },
};
