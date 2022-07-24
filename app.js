const getBookList = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
};

const getXCharFromText = (text, countChar) => {
  const blackList = [null, undefined, ""];
  if (blackList.includes(text) || Number.isNaN(text)) {
    return "";
  }
  const extract = text.substring(0, countChar);
  return extract;
};

const createCard = (cardData, targetDOM) => {
  const title = cardData.volumeInfo.title;
  const img = cardData.volumeInfo.imageLinks.thumbnail;
  const description = getXCharFromText(cardData.volumeInfo.description, 140);

  console.log({ cardData });

  const cardWrapperEl = document.createElement("div");
  cardWrapperEl.className = "col";

  const cardInnerWrapperEl = document.createElement("div");
  cardInnerWrapperEl.className = "card";

  const cardImg = document.createElement('img');
  cardImg.className = 'card-img-top';
  cardImg.setAttribute('src', img);

  const bodyEl = document.createElement("div");
  bodyEl.className = "card-body";

  const bodyTitleEl = document.createElement("h5");
  bodyTitleEl.className = "card-title";
  bodyTitleEl.innerText = title;

  const bodyTextEl = document.createElement("p");
  bodyTextEl.className = "card-text";
  bodyTextEl.innerText = description;
  

  bodyEl.appendChild(bodyTitleEl);
  bodyEl.appendChild(bodyTextEl);
  cardInnerWrapperEl.appendChild(cardImg);
  cardInnerWrapperEl.appendChild(bodyEl);
  cardWrapperEl.appendChild(cardInnerWrapperEl);
  targetDOM.appendChild(cardWrapperEl);
};

const main = async () => {
  const cardTargetDOM = document.getElementById("bookCardGrid");
  let bookList = await getBookList();
  bookList.forEach((book) => createCard(book, cardTargetDOM));
};
main();
