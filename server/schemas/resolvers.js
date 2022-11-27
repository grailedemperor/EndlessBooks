const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findbyId({ _id: userId }).populate("books");
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

    books: async () => {
      return Book.find({});
    },

    toBeRead: async () => {
      return await Book.find({ read: false }).populate();
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

    addBook: async (
      parent,
      { title, authors, subject, image, link, read = false, bookId = "" }
    ) => {
      return await Book.create({
        title,
        authors,
        subject,
        image,
        link,
        read,
        bookId,
      });
    },

    readBook: async (parent, { read }, context) => {
      if (context.user) {
        return await Book.findByIdAndUpdate(
          context.book._id,
          // TODO: This might need to be reverted to args
          { read: true },
          {
            new: true,
          }
        );
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
