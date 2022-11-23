const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findbyId({ _id: userId });
    },

    book: async (parent, { bookId }) => {
      return Book.findbyId({ _id: bookId });
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

    addBook: async (parent, { title, authors, subject, image, link, read }) => {
      return await Book.create({ title, authors, subject, image, link, read });
    },

    readBook: async (parent, args, context) => {
      if (context.user) {
        return await Book.findByIdAndUpdate(context.book._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
