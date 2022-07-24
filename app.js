const getBookList = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=oliver%20sacks`;
  const response = await fetch(url);
  const data = await response.json();
  const bookList = data.items;
  console.log(bookList);
  return bookList;
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
  const cardTitle = cardData.volumeInfo.title;
  const seeDetail = cardData.volumeInfo.infoLink;
  const cardImg = cardData.volumeInfo.imageLinks.thumbnail;
  const cardDescription = getXCharFromText(cardData.volumeInfo.description, 140);

  const container = document.createElement("div");
  container.className = "col";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.setAttribute('src', cardImg);

  const body = document.createElement("div");
  body.className = "card-body";


  const linkWrapper = document.createElement('div');
  linkWrapper.className = 'd-grid mt-3';

  const detailLink = document.createElement('a');
  detailLink.className = 'btn btn-outline-primary';
  detailLink.setAttribute('href', seeDetail);
  detailLink.setAttribute('target', '_blank');
  detailLink.innerText = 'See Details';

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = cardTitle;

  const text = document.createElement("p");
  text.className = "card-text";
  text.innerText = cardDescription;  

  body.appendChild(title);
  body.appendChild(text);
  linkWrapper.appendChild(detailLink);
  body.appendChild(linkWrapper);

  card.appendChild(img);
  card.appendChild(body);

  container.appendChild(card);
  targetDOM.appendChild(container);
};

const main = async () => {
  const cardTargetDOM = document.getElementById("bookCardGrid");
  let bookList = await getBookList();
  bookList.forEach((book) => createCard(book, cardTargetDOM));
};
main();
