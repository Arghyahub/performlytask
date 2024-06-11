import userData from "../db";

const resolvers = {
  Query: {
    // We can use a check user by userId and then return userData
    user: (_, { id }) => userData,
  },
};

export default resolvers;
