```javascript
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Retrieve all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Retrieve a book by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
```
