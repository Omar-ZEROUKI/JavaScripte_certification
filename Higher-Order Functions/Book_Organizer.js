const books = [
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1949 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1995 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

const sortByYear =(book1,book2)=> {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter( (book)=>book.releaseYear <1950)
console.log(filteredBooks.sort(sortByYear))
