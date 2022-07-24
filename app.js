import { getBookList } from "./services/book.service.js";
import { createCard } from "./helpers/dom.helper.js";

export const App = () => {
  const cardGrid = document.createElement("div");
  cardGrid.className = "row row-cols-1 row-cols-md-4 g-3";

  const getBooks = async () => {
    let bookList = await getBookList();
    bookList.forEach((book) => createCard(book, cardGrid));
  };
  getBooks();  
  return cardGrid;
};

