import { getBookList }  from './services/book.service.js';
import { createCard } from './helpers/dom.helper.js';

const main = async () => {
  const cardTargetDOM = document.getElementById("bookCardGrid");
  let bookList = await getBookList();
  bookList.forEach((book) => createCard(book, cardTargetDOM));
};
main();
