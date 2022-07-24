import { getXCharFromText } from "./string.helper.js";
import { getBookById } from "../services/book.service.js";

export const createCard = (cardData, targetDOM) => {
  const cardId = cardData.id;
  const cardTitle = cardData.volumeInfo.title;
  const cardImg = cardData.volumeInfo.imageLinks.thumbnail;
  const cardDescription = getXCharFromText(
    cardData.volumeInfo.description,
    140
  );

  const container = document.createElement("div");
  container.className = "col book-item animate__animated animate__fadeIn";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.setAttribute("src", cardImg);

  const body = document.createElement("div");
  body.className = "card-body";

  const actionsContainer = document.createElement("div");
  actionsContainer.className =
    "d-flex justify-content-between align-items-center mt-3";

  const detailBtn = document.createElement("button");
  detailBtn.className = "btn btn-primary btn-sm";
  detailBtn.addEventListener("click", () => renderBookDetail(cardId));
  detailBtn.innerText = "See Details";

  const addToCart = document.createElement("button");
  addToCart.className =
    "btn btn-outline-info btn-sm d-flex d-flex justify-content-between align-items-center gap-2";
  addToCart.setAttribute("title", "Add to cart");
  addToCart.innerHTML =
    "<i class='bx bx-cart-add' style='font-size: 1.2rem'></i> <span>Add to card</span>";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = cardTitle;

  const text = document.createElement("p");
  text.className = "card-text text-muted";
  text.innerText = cardDescription;

  body.appendChild(title);
  body.appendChild(text);
  actionsContainer.appendChild(detailBtn);
  actionsContainer.appendChild(addToCart);
  body.appendChild(actionsContainer);

  card.appendChild(img);
  card.appendChild(body);

  container.appendChild(card);
  targetDOM.appendChild(container);
};

export const renderBookDetail = async (bookId) => {
  const bookDetail = await getBookById(bookId);
  console.log({ bookDetail });
};
