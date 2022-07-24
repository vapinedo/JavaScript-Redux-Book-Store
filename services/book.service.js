export const getBookList = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=relevance&q=oliver%20sacks`;
  const response = await fetch(url);
  const data = await response.json();
  const bookList = data.items;
  console.log(bookList);
  return bookList;
};

export const getBookById = async (id) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const response = await fetch(url);
  const book = await response.json();
  return book;
};