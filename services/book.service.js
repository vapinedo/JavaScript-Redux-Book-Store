export const getBookList = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=relevance&q=oliver%20sacks`;
  const response = await fetch(url);
  const data = await response.json();
  const bookList = data.items;
  console.log(bookList);
  return bookList;
};

