const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findById({ _id: userId }).populate("books");
    },
    users: async () => {
      return User.find().populate("books");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You must be logged in");
    },

    book: async (parent, args) => {
      return await Book.findById(args.bookId).populate();
    },

    books: async (parent, args, context) => {
      //get the books
      // if (context.user) {
      //get the books that belong to the signed in user
      // return User.findById(context.user._id).populate("books");

      return Book.find();
      // }
    },

    // TODO: Needs to be edited to only populate signed-in user's books
    toBeRead: async () => {
      return await User.findById().populate("books", { read: false });
      // Book.find({ read: false })
    },
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    addBook: async (parent, { newBook }, context) => {
      // Updated addBook so it adds book to user array
      if (context.user) {
        const book = await Book.create({
          ...newBook,
          userId: context.user._id,
        }).then(({ _id }) => _id);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { books: book._id } }
        );

        return book;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updateUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { books: bookId } },
          { new: true }
        );

        return updateUser;
      }
    },

    readBook: async (parent, { bookId }, context) => {
      // console.log(bookId);
      if (context.user) {
        return await Book.findByIdAndUpdate(bookId, { read: true });
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
