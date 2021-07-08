import { users } from '../data/data'

export const resolvers = {
  Query: {
    users: () => users,
  },
};
