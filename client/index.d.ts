type Book = {
  _id: ID;
  title: String;
  authors: [String];
  subject: String;
  image: String;
  link: String;
  read: Boolean!;
  bookId: String!;
};
