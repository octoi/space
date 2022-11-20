import { GraphQLObjectType } from 'graphql';
import {
  LoginMutation,
  RegisterMutation,
  UpdateMutation,
} from './user.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    login: LoginMutation,
    register: RegisterMutation,
    updateUser: UpdateMutation,
  }),
});
